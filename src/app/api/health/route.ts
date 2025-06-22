import { NextResponse } from 'next/server'
import packageJson from '@/../package.json'

export async function GET() {
  return NextResponse.json(
    { status: 'ok', uptime: process.uptime(), version: packageJson.version },
    { status: 200 }
  )
}
