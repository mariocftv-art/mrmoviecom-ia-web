import { NextResponse } from 'next/server'
import { getDashboardIAEvolution } from '../../../../lib/dashboardIAEvolution'
import type { Period } from '../../../../lib/dashboardIA'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const period = (searchParams.get('period') as Period) ?? '7days'

  const data = await getDashboardIAEvolution(period)
  return NextResponse.json(data)
}
