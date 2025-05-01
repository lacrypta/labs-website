import { prisma } from '@/services/prisma'
import { NextRequest, NextResponse } from 'next/server'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers':
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ nonce: string }> }
) {
  const { nonce } = await context.params

  // get nonce from database
  const nonceRecord = await prisma.nonce.findUnique({
    where: { id: nonce }
  })

  if (!nonceRecord) {
    return NextResponse.json(
      { error: 'Nonce not found', status: false },
      { status: 404, headers }
    )
  }

  // Check if burned
  if (nonceRecord.burned) {
    return NextResponse.json(
      { status: false, error: 'Nonce has been burned' },
      { status: 410, headers }
    )
  } else {
    return NextResponse.json({ status: true }, { status: 200 })
  }
}

// Handle CORS preflight
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers
  })
}
