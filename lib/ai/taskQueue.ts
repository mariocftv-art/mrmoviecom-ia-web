// lib/ai/taskQueue.ts

export type IATaskType = "text" | "analysis" | "command";

export interface IATask {
  id: string;
  type: IATaskType;
  payload: any;
  createdAt: number;
}

const queue: IATask[] = [];

export function addTask(task: IATask) {
  queue.push(task);
  console.log("[QUEUE] Task adicionada:", task);
}

export function getNextTask(): IATask | null {
  return queue.shift() || null;
}

export function hasTasks(): boolean {
  return queue.length > 0;
}
// DEBUG ONLY — acesso direto pelo console
if (typeof window !== "undefined") {
  // @ts-ignore
  window.addIATask = addTask;
}
