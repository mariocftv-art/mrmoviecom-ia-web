import fs from "fs"
import path from "path"

type EditOptions = {
  filePath: string
  search: string
  replace: string
  mode?: "DRY_RUN" | "APPLY"
}

export function editFile({ filePath, search, replace, mode = "DRY_RUN" }: EditOptions) {
  const abs = path.join(process.cwd(), filePath)

  if (!fs.existsSync(abs)) {
    return { ok: false, error: "Arquivo não encontrado" }
  }

  const original = fs.readFileSync(abs, "utf-8")
  if (!original.includes(search)) {
    return { ok: false, error: "Padrão não encontrado" }
  }

  const updated = original.replace(search, replace)

  if (mode === "APPLY") {
    fs.copyFileSync(abs, abs + ".bak")
    fs.writeFileSync(abs, updated)
  }

  return {
    ok: true,
    mode,
    file: filePath,
    changed: search !== replace
  }
}
