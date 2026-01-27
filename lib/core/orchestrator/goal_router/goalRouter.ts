// lib/core/orchestrator/goal_router/goalRouter.ts

export type GoalType =
  | "analysis"
  | "creation"
  | "execution"
  | "unknown";

export interface GoalDecision {
  goal: string;
  type: GoalType;
  confidence: number;
}

export function routeGoal(goal: string): GoalDecision {
  const normalized = goal.toLowerCase();

  let type: GoalType = "unknown";

  if (
    normalized.includes("analisar") ||
    normalized.includes("avaliar") ||
    normalized.includes("verificar")
  ) {
    type = "analysis";
  } else if (
    normalized.includes("criar") ||
    normalized.includes("gerar") ||
    normalized.includes("produzir")
  ) {
    type = "creation";
  } else if (
    normalized.includes("executar") ||
    normalized.includes("rodar") ||
    normalized.includes("implementar")
  ) {
    type = "execution";
  }

  return {
    goal,
    type,
    confidence: type === "unknown" ? 0.3 : 0.8,
  };
}
