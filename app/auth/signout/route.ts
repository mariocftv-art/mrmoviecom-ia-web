import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { message: 'Signout desativado no MVP' },
    { status: 200 }
  )
}
