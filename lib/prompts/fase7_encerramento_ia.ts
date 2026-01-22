import fs from 'fs'
import path from 'path'

export function getFase7EncerramentoIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_7_ENCERRAMENTO_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
