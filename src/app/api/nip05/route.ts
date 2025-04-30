import { NextRequest } from 'next/server'

// Import PrismaClient to interact with the database
import { PrismaClient } from '@prisma/client'

// Initialize a new PrismaClient instance
const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  // get name from searchParams
  const username = req.nextUrl.searchParams.get('name')

  if (!username) {
    return new Response('Username not found', {
      status: 404
    })
  }

  // Query the database to find a user with the specified username
  const user = await prisma.user.findUnique({
    where: {
      name: username
    }
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
    headers: { 'Content-Type': 'application/json' }
  })
}
