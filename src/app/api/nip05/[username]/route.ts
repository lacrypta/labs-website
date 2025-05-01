import { NextRequest } from 'next/server'

// Import PrismaClient to interact with the database
import { prisma } from '@/services/prisma'

// Constants
const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME || '0')

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  // Extract the username from the request parameters
  const { username } = await context.params

  if (!username) {
    return new Response('Username not found', {
      status: 404
    })
  }

  // Query the database to find a user with the specified username
  const user = await prisma.user.findUnique({
    where: {
      name: username
    },
    cacheStrategy: { ttl: REVALIDATE_TIME }
  })

  // If no user is found, return a 404 response
  if (!user) {
    return new Response('Username not found', {
      status: 404
    })
  }

  // Generate NIP05 data using the user's public key
  const nip05 = {
    names: {
      [username]: user.pubkey
    }
  }

  // Return the generated LUD06 data as a JSON response with a 200 status
  return new Response(JSON.stringify(nip05), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${REVALIDATE_TIME}`
    }
  })
}

export const revalidate = 3600
