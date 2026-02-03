// app/api/command/route.ts

import { NextResponse } from "next/server"
import { Orchestrator } from "@/app/dashboard/components/ai/orchestrator"

export async function POST() {
  const result = Orchestrator({
    source: "api"
  })

  return NextResponse.json({
    ok: true,
    result
  })
}
