// lib/core/orchestrator/governance/governance.policy.ts

export type RiskLevel = "low" | "medium" | "high";

export interface GovernanceDecision {
  allowed: boolean;
  reason?: string;
}

const MAX_AUTONOMY_SCORE = 0.85;

export function checkGovernance(
  confidence?: number,
  highRiskCount: number = 0
): GovernanceDecision {
  if ((confidence ?? 0) > MAX_AUTONOMY_SCORE) {
    return {
      allowed: false,
      reason: "Autonomia acima do limite permitido",
    };
  }

  if (highRiskCount >= 3) {
    return {
      allowed: false,
      reason: "Risco acumulado excessivo",
    };
  }

  return { allowed: true };
}
