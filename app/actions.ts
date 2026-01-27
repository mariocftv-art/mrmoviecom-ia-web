"use server";

import { runOrchestrator } from "@/lib/orchestrator";

export async function runAdminAction(input: string) {
  if (!input || input.trim().length === 0) {
    return {
      error: "Input vazio",
    };
  }

  const result = await runOrchestrator(input);

  return result;
}
