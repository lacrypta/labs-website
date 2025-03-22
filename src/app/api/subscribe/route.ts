import { NextRequest, NextResponse } from 'next/server'

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  })
}

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
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Call newsletter service API
    // 3. Send confirmation email
    // For now, we'll just return success

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
