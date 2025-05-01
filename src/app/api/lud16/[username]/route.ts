import { NextRequest } from 'next/server'
import { generateLUD06 } from '@/lib/utils/lnurl'
import { prisma } from '@/services/prisma'

const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME || '0')

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  const { username } = await context.params

  if (!username) {
    return new Response('Username not found', { status: 404 })
  }

  const user = await prisma.user.findUnique({
    where: { name: username },
    cacheStrategy: { ttl: REVALIDATE_TIME }
  })

  if (!user) {
    return new Response('Username not found', { status: 404 })
  }

  const lud06 = generateLUD06(user.pubkey)

  return new Response(JSON.stringify(lud06), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${REVALIDATE_TIME}`
    }
  })
}

export const revalidate = 3600
