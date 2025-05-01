import { prisma } from '@/services/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  let name = searchParams.get('name')

  // Check if exists
  if (!name) return NextResponse.json({ data: 'Not found' }, { status: 404 })

  name = name.toLowerCase().trim()

  // Find identity record by name
  const identityRecord = await prisma.user.findUnique({
    where: {
      name
    }
  })

  // Check if exists
  if (!identityRecord)
    return NextResponse.json({ data: 'Not found' }, { status: 404 })

  // Respond NIP-05
  return NextResponse.json(
    {
      names: {
        [name]: identityRecord.pubkey
      }
    },
    { status: 200 }
  )
}
