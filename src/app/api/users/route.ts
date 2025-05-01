import { NextRequest, NextResponse } from 'next/server'
import { Event, verifyEvent } from 'nostr-tools'
import { validateSchema } from '@/lib/utils/nostr'

import { generateIdentityEvent, publishEvent } from '@/lib/utils/lawallet'
import { PrismaClient } from '@prisma/client'

import reserved from '@/constants/reserved.json'
const ADMIN_PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY!

const prisma = new PrismaClient()

async function createUser(request: NextRequest) {
  const event: Event = (await request.json()) as unknown as Event

  try {
    if (!verifyEvent(event)) throw new Error('Malformed event')
    validateSchema(event)

    if (event.tags.find(t => t[0] === 't')![1] !== 'create-identity')
      throw new Error('Only create-identity subkind is allowed')
  } catch (e: unknown) {
    return NextResponse.json({ reason: (e as Error).message }, { status: 422 })
  }

  try {
    // Get variables from Event tags
    let name = event.tags.find(t => t[0] === 'name')![1]!
    const nonce = event.tags.find(t => t[0] === 'nonce')![1]!

    name = name.toLowerCase().trim()

    // Validate variables exist
    try {
      if (!name) throw new Error('You need to set a name tag')
      if (!nonce) throw new Error('Nonce not found')
    } catch (e: unknown) {
      return NextResponse.json(
        { reason: (e as Error).message },
        { status: 422 }
      )
    }

    // Validate reserved names
    if (reserved.find(r => r === name))
      return NextResponse.json({ reason: 'Name is reserved' }, { status: 403 })

    // Start transaction
    await prisma.$transaction(async tx => {
      // Find nonce record
      const nonceRecord = await tx.nonce.findUnique({
        where: {
          id: nonce
        }
      })

      if (!nonceRecord) {
        throw new Error('Nonce not found')
      }

      if (nonceRecord.burned) {
        throw new Error('Nonce already burned')
      }

      // Find identity record by name or pubkey
      const userRecord = await tx.user.findFirst({
        where: {
          OR: [{ name }, { pubkey: event.pubkey }]
        }
      })

      if (userRecord) {
        throw new Error('Name or pubkey already taken')
      }

      // Burn nonce
      await tx.nonce.update({
        data: {
          burned: true
        },
        where: {
          id: nonce
        }
      })

      // Add identity record to database
      await tx.user.create({
        data: {
          name: name,
          pubkey: event.pubkey,
          nonceId: nonceRecord.id
        }
      })
    })

    // Broadcast identity
    try {
      const _event = generateIdentityEvent(name, event.pubkey)
      await publishEvent(_event, ADMIN_PRIVATE_KEY, 'https://api.lacrypta.ar')
    } catch (e) {
      console.error('Failed to broadcast create identity event')
      console.error(e)
    }

    return NextResponse.json({ pubkey: event.pubkey }, { status: 200 })
  } catch (error: unknown) {
    const message = (error as Error).message
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

async function getUser(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  let name = searchParams.get('name')

  // Check if exists
  if (!name) return NextResponse.json({ data: 'Not found' }, { status: 404 })

  name = name.toLowerCase().trim()

  // Find identity record by name
  const userRecord = await prisma.user.findUnique({
    where: {
      name
    }
  })

  // Check if exists
  if (!userRecord)
    return NextResponse.json({ data: 'Not found' }, { status: 404 })

  // Respond NIP-05
  return NextResponse.json(
    {
      names: {
        [name]: userRecord.pubkey
      }
    },
    { status: 200 }
  )
}

export async function POST(request: NextRequest) {
  return createUser(request)
}

export async function GET(request: NextRequest) {
  return getUser(request)
}
