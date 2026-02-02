// lib/ai/engine.ts
import { getNextTask } from "./taskQueue";
import { setIAStatus } from "./aiStatus";

let running = false;
let currentTask: any = null;
let lastOutput: string | null = null;

export function startEngine() {
  if (running) return;
  running = true;

  console.log("[ENGINE] Iniciada");

  setInterval(async () => {
    if (currentTask) return;

    const task = getNextTask();
    if (!task) return;

    currentTask = task;
    setIAStatus("busy");

    console.log("[ENGINE] Processando:", task.id);

    // simulação real de processamento
    await new Promise((res) => setTimeout(res, 2000));

    lastOutput = `Task ${task.id} finalizada com sucesso`;
    currentTask = null;

    setIAStatus("online");
    console.log("[ENGINE] Finalizada:", task.id);
  }, 1000);
}

export function getCurrentTask() {
  return currentTask;
}

export function getLastOutput() {
  return lastOutput;
}
