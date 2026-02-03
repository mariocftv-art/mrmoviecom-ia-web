import { NextResponse } from "next/server"
import { Orchestrator } from "@/app/dashboard/components/ai/orchestrator"

export async function POST() {
  const result = await Orchestrator({ source: "api" })

  return NextResponse.json({
    ok: true,
    result: result ?? { status: "orchestrator-skipped" }
  })
}
