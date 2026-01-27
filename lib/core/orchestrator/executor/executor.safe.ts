// lib/core/orchestrator/executor/executor.safe.ts

import { PlanStep } from "../planner_htn/plannerHTN";

export interface SafeExecutionResult {
  success: boolean;
  output?: string;
  error?: string;
}

const MAX_RUNTIME_MS = 5000;

export async function executeSafely(
  step: PlanStep
): Promise<SafeExecutionResult> {
  try {
    const start = Date.now();

    // Simulação controlada (sandbox)
    while (Date.now() - start < 50) {
      // noop
    }

    if (Date.now() - start > MAX_RUNTIME_MS) {
      return { success: false, error: "Timeout excedido" };
    }

    return {
      success: true,
      output: `Executado com segurança: ${step.description}`,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message ?? "Erro desconhecido",
    };
  }
}
