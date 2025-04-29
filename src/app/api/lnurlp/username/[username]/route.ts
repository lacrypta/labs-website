import { NextRequest } from 'next/server'
import { generateLUD06 } from '@/lib/utils/lnurl'

// Import PrismaClient to interact with the database
import { PrismaClient } from '@prisma/client'

// Initialize a new PrismaClient instance
const prisma = new PrismaClient()

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  // Extract the username from the request parameters
  const { username } = params

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

  // Generate LUD06 data using the user's public key
  const lud06 = generateLUD06(user.pubkey)

  // Return the generated LUD06 data as a JSON response with a 200 status
  return new Response(JSON.stringify(lud06), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
