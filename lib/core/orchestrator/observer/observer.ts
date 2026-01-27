// lib/core/orchestrator/observer/observer.ts

import { OrchestratorContext } from "../orchestrator";

export function observe(context: OrchestratorContext): void {
  console.log("=== ORCHESTRATOR OBSERVER ===");
  console.log("Estado:", context.state);
  console.log("Objetivo:", context.goal);
  console.log("Passo atual:", context.currentStep);
  console.log("Total de passos:", context.steps.length);
  console.log("Confiança:", context.confidence);
  console.log("============================");
}
