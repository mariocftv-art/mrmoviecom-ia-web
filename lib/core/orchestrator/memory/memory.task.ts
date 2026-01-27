// lib/core/orchestrator/memory/memory.task.ts

export interface TaskMemory {
  taskId: string;
  logs: string[];
}

const tasks = new Map<string, TaskMemory>();

export function createTask(taskId: string): TaskMemory {
  const t: TaskMemory = { taskId, logs: [] };
  tasks.set(taskId, t);
  return t;
}

export function logTask(taskId: string, message: string): void {
  const t = tasks.get(taskId);
  if (t) t.logs.push(message);
}
