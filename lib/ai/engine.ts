// lib/ai/engine.ts
import { setIAStatus } from "./aiStatus";
import { addTask, getNextTask, hasTasks, IATask } from "./taskQueue";
import { generateText } from "./providers/textProvider";

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

  if (task.type === "text") {
    const prompt = task.payload?.prompt ?? "";
    const result = await generateText(prompt);
    console.log("[ENGINE] RESULTADO IA:", result);
  }

  setIAStatus("online");
}

export function stopEngine() {
  engineRunning = false;
  setIAStatus("offline");
}

/**
 * 🔥 TESTE CONTROLADO
 */
export function enqueueTestTask() {
  addTask({
    id: `task-${Date.now()}`,
    type: "text",
    payload: {
      prompt: "Explique em uma frase o que é inteligência artificial.",
    },
    createdAt: Date.now(),
  });
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
