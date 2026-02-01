// lib/ai/engine.ts
import { setIAStatus } from "./aiStatus";
import { addTask, getNextTask, hasTasks, IATask } from "./taskQueue";

let engineRunning = false;

export function startEngine() {
  if (engineRunning) return;
  engineRunning = true;

  console.log("[ENGINE] Iniciada");
  setIAStatus("online");

  loop();
}

async function loop() {
  while (engineRunning) {
    if (hasTasks()) {
      const task = getNextTask();
      if (task) {
        await processTask(task);
      }
    }
    await sleep(500);
  }
}

async function processTask(task: IATask) {
  console.log("[ENGINE] Processando task:", task.id);
  setIAStatus("busy");

  await sleep(2000);

  console.log("[ENGINE] Task finalizada:", task.id);
  setIAStatus("online");
}

export function stopEngine() {
  engineRunning = false;
  setIAStatus("offline");
}

/**
 * 🔥 TESTE OFICIAL (server-safe)
 */
export function enqueueTestTask() {
  addTask({
    id: `task-${Date.now()}`,
    type: "text",
    payload: { prompt: "teste interno" },
    createdAt: Date.now(),
  });
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
