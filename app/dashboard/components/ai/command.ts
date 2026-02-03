import fs from "fs"
import path from "path"
import { editFile } from "./fileEditor"
import { patches } from "./patches"

export type CommandInput = {
  actions: string[]
  mode?: "DRY_RUN" | "APPLY"
}

export function Command(input: CommandInput) {
  const mode = input.mode ?? "DRY_RUN"
  console.log(`⚙️ COMMAND — MULTI-FIX MODE (${mode})`)

  const results = patches.map(patch => {
    const res = editFile({
      filePath: patch.filePath,
      search: patch.search,
      replace: patch.replace,
      mode
    })

    return {
      patchId: patch.id,
      ...res
    }
  })

  // LOG ÚNICO
  const logDir = path.join(process.cwd(), "logs")
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir)

  fs.appendFileSync(
    path.join(logDir, "auto-fix-multi.log"),
    `\n[${new Date().toISOString()}]\n${JSON.stringify({ mode, results }, null, 2)}`
  )

  return {
    status: mode === "APPLY" ? "applied" : "dry-run",
    results
  }
}
