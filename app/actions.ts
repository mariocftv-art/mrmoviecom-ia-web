"use server"

import { Orchestrator } from "@/lib/orchestrator"

export async function runAdminAction(input: string) {
  const orchestrator = new Orchestrator()

  const result = await orchestrator.run({
    projectId: "admin-project",
    projectName: "Admin MVP Project",
    userInput: input
  })

  return result
}
