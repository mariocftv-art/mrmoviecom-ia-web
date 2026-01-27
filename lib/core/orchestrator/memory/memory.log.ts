// lib/core/orchestrator/memory/memory.log.ts

export interface CognitiveLog {
  timestamp: number;
  event: string;
}

const logs: CognitiveLog[] = [];

export function logEvent(event: string): void {
  logs.push({ timestamp: Date.now(), event });
}

export function getLogs(): CognitiveLog[] {
  return logs;
}
