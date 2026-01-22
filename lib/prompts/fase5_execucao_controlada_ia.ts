import fs from 'fs'
import path from 'path'

export function getFase5ExecucaoControladaIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_5_EXECUCAO_CONTROLADA_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
