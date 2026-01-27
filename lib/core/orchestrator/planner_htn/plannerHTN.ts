// lib/core/orchestrator/planner_htn/plannerHTN.ts

import { GoalDecision } from "../goal_router/goalRouter";

export type RiskLevel = "low" | "medium" | "high";

export interface PlanStep {
  id: number;
  description: string;
  risk: RiskLevel;
}

export interface ExecutionPlan {
  steps: PlanStep[];
}

export function createPlan(decision: GoalDecision): ExecutionPlan {
  const steps: PlanStep[] = [];

  if (decision.type === "analysis") {
    steps.push(
      { id: 1, description: "Coletar informações", risk: "low" },
      { id: 2, description: "Analisar dados", risk: "medium" },
      { id: 3, description: "Gerar conclusão", risk: "low" }
    );
  } else if (decision.type === "execution") {
    steps.push(
      { id: 1, description: "Preparar execução", risk: "medium" },
      { id: 2, description: "Executar tarefa", risk: "high" },
      { id: 3, description: "Validar resultado", risk: "low" }
    );
  } else {
    steps.push({
      id: 1,
      description: "Solicitar esclarecimento do objetivo",
      risk: "low",
    });
  }

  return { steps };
}
