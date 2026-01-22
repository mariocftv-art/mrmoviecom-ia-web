import fs from 'fs'
import path from 'path'

export function getFase8EstadoFinalIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_8_ESTADO_FINAL_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
