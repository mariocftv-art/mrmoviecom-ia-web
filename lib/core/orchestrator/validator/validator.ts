// lib/core/orchestrator/validator/validator.ts

import { PlanStep } from "../planner_htn/plannerHTN";

export interface ValidationResult {
  approved: boolean;
  score: number;
  reason?: string;
}

export function validateExecution(
  steps: PlanStep[],
  confidence: number = 0.5
): ValidationResult {
  if (!steps || steps.length === 0) {
    return {
      approved: false,
      score: 0,
      reason: "Nenhum passo para validar",
    };
  }

  const highRiskCount = steps.filter(s => s.risk === "high").length;
  const penalty = highRiskCount * 0.1;

  const score = Math.max(0, Math.min(1, confidence - penalty));

  return {
    approved: score >= 0.6,
    score,
    reason: score >= 0.6 ? "Execução aprovada" : "Score insuficiente",
  };
}
