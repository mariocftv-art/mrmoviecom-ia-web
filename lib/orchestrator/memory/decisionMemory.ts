// lib/orchestrator/memory/decisionMemory.ts

export type DecisionStatus = "approved" | "rejected";

export type DecisionRecord = {
  id: string;
  description: string;
  status: DecisionStatus;
  timestamp: number;
};

let decisionMemory: DecisionRecord[] = [];

/**
 * Registrar decisão tomada
 */
export function registerDecision(
  id: string,
  description: string,
  status: DecisionStatus
) {
  decisionMemory.push({
    id,
    description,
    status,
    timestamp: Date.now(),
  });
}

/**
 * Verificar se uma decisão já existe
 */
export function getDecision(id: string): DecisionRecord | undefined {
  return decisionMemory.find((d) => d.id === id);
}

/**
 * Listar todas as decisões
 */
export function listDecisions(): DecisionRecord[] {
  return decisionMemory;
}
