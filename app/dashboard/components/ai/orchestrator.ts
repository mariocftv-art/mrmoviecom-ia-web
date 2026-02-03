import { Vision } from "./vision"
import { Command } from "./command"

let running = false

export function Orchestrator(context?: any) {
  if (running) {
    console.log("⏸️ Orchestrator já em execução")
    return
  }

  running = true
  console.log("🧠 ORCHESTRATOR AUTO-CICLO INICIADO")

  const visionResult = Vision(context)
  const commandResult = Command({
    actions: visionResult.actions
  })

  running = false

  return {
    vision: visionResult,
    command: commandResult
  }
}
