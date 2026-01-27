// lib/core/orchestrator/executor/executor.ts

import { PlanStep } from "../planner_htn/plannerHTN";

export interface ExecutionResult {
  success: boolean;
  message: string;
}

export function executeStep(step: PlanStep): ExecutionResult {
  // Stub de execução segura (sem ferramentas externas ainda)
  console.log(
    `[EXECUTOR] Executando: ${step.description} (risco=${step.risk})`
  );

  return {
    success: true,
    message: "Passo executado com sucesso",
  };
}
