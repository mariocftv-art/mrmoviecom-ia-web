import { editFile } from "./fileEditor"
import fs from "fs"
import path from "path"

export type CommandInput = {
  actions: string[]
}

export function Command(input: CommandInput) {
  console.log("⚙️ COMMAND — AUTO-FIX MODE (DRY_RUN)")

  const results = []

  // 🔧 AUTO-FIX 01 — transformar container em GRID
  const fixLayout = editFile({
    filePath: "app/dashboard/page.tsx",
    search: `<div className="dashboard-container">`,
    replace: `<div className="dashboard-container grid grid-cols-12 gap-4">`,
    mode: "APPLY" // 🔴 trocar para APPLY depois
  })

  results.push(fixLayout)

  // 📝 LOG
  const logDir = path.join(process.cwd(), "logs")
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir)

  fs.appendFileSync(
    path.join(logDir, "auto-fix.log"),
    `\n[${new Date().toISOString()}]\n${JSON.stringify(results, null, 2)}`
  )

  return {
    status: "dry-run",
    results
  }
}
