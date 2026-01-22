import fs from 'fs'
import path from 'path'

export function getFase2RevisaoContextoIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_2_REVISAO_CONTEXTO_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
