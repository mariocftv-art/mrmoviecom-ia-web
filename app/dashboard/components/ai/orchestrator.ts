import { Vision } from "./vision"
import { Command } from "./command"

let running = false

export async function Orchestrator(context?: any) {
  if (running) {
  console.log("⏸️ Orchestrator já em execução")
  return { skipped: true }
}

  running = true
  console.log("🧠 ORCHESTRATOR AUTO-CICLO INICIADO")

  // 1️⃣ Snapshot do frontend (Vision Fase 3)
  try {
    await fetch("http://localhost:3000/api/vision/snapshot", {
      method: "POST"
    })
    console.log("📸 Snapshot do layout capturado")
  } catch (err) {
    console.log("⚠️ Falha ao capturar snapshot", err)
  }

  // 2️⃣ Análise (Vision)
  const visionResult = Vision()

  // 3️⃣ Execução (Command)
 const commandResult = Command({
  actions: visionResult.actions,
  mode: "APPLY" // 🔴 troque para APPLY quando validar
})

  running = false

  return {
    vision: visionResult,
    command: commandResult
  }
}
