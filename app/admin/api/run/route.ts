import { Orchestrator } from "@/lib/orchestrator"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const orchestrator = new Orchestrator()

  const result = await orchestrator.run({
    projectId: "ui-project",
    projectName: "Create Video Flow",
    userInput: body.input,
  })

  return NextResponse.json(result)
}
