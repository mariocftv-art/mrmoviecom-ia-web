import fs from "fs"
import path from "path"

export type CommandInput = {
  actions: string[]
}

export function Command(input: CommandInput) {
  console.log("⚙️ COMMAND EXECUTOR REAL — FILE MODE")

  const logDir = path.join(process.cwd(), "logs")
  const logFile = path.join(logDir, "ia-actions.log")

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)
  }

  const timestamp = new Date().toISOString()

  const content =
    `\n[${timestamp}]\n` +
    input.actions.map((a, i) => `- Ação ${i + 1}: ${a}`).join("\n")

  fs.appendFileSync(logFile, content)

  console.log("📝 Ações registradas em logs/ia-actions.log")

  return {
    status: "executed",
    writtenFile: "logs/ia-actions.log",
    executedActions: input.actions
  }
}
