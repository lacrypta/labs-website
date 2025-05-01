// create a route to get a nonce

import { prisma } from '@/services/prisma'
import { NextRequest, NextResponse } from 'next/server'

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
      { status: 404 }
    )
  }

  // Check if burned
  if (nonceRecord.burned) {
    return NextResponse.json(
      { status: false, error: 'Nonce has been burned' },
      { status: 410 }
    )
  } else {
    return NextResponse.json({ status: true }, { status: 200 })
  }
}
