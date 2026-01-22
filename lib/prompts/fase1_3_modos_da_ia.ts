import fs from 'fs'
import path from 'path'

export function getFase13ModosDaIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_1_3_MODOS_DA_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
