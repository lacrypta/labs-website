import { SendyClient } from '@/services/sendy'
import { NextRequest, NextResponse } from 'next/server'

// Get environment variables
const SENDY_API_URL = process.env.SENDY_API_URL!
const SENDY_API_KEY = process.env.SENDY_API_KEY!
const SENDY_LIST_ID = process.env.SENDY_LIST_ID!

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  })
}

// Handle main POST request for subscription
export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body
    const body = await request.json()

    // Log the entire request details
    console.dir(
      {
        method: request.method,
        body,
        headers: Object.fromEntries(request.headers),
        url: request.url
      },
      { depth: null }
    )

    // Validate email
    const { email } = body
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.error('Invalid email address:', email)
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    console.info('Email address is valid:', email)

    // Initialize Sendy client
    const sendy = new SendyClient(SENDY_API_URL, SENDY_API_KEY)

    console.info('Subscribing to Sendy:', email)
    console.info('SENDY_LIST_ID:', SENDY_LIST_ID)

    // Subscribe to Sendy
    const response = await sendy.subscribe({
      name: '',
      email: email,
      listId: SENDY_LIST_ID
    })

    console.info('Response:', response)

    // Check if subscription was successful
    if (!response.success) {
      console.error('Error:', response)
      return NextResponse.json({ error: response.message }, { status: 400 })
    }

    console.info('Successfully subscribed to Sendy:')

    // Return success response
    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)

    // Return error response
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
