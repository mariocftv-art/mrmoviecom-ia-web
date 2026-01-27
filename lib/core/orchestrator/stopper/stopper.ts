// lib/core/orchestrator/stopper/stopper.ts

import { PlanStep } from "../planner_htn/plannerHTN";

export interface StopDecision {
  stop: boolean;
  reason?: string;
}

export function shouldStop(
  steps: PlanStep[],
  currentStep: number
): StopDecision {
  if (currentStep >= steps.length) {
    return { stop: true, reason: "Todos os passos executados" };
  }

  const highRiskCount = steps.filter(s => s.risk === "high").length;
  if (highRiskCount >= 3) {
    return { stop: true, reason: "Risco acumulado elevado" };
  }

  return { stop: false };
}
