// lib/core/orchestrator/memory/memory.session.ts

export interface SessionMemory {
  sessionId: string;
  startedAt: number;
  data: Record<string, any>;
}

const sessions = new Map<string, SessionMemory>();

export function createSession(sessionId: string): SessionMemory {
  const mem: SessionMemory = {
    sessionId,
    startedAt: Date.now(),
    data: {},
  };
  sessions.set(sessionId, mem);
  return mem;
}

export function getSession(sessionId: string): SessionMemory | undefined {
  return sessions.get(sessionId);
}

export function writeSession(
  sessionId: string,
  key: string,
  value: any
): void {
  const s = sessions.get(sessionId);
  if (s) s.data[key] = value;
}
