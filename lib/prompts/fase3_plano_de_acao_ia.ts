import fs from 'fs'
import path from 'path'

export function getFase3PlanoDeAcaoIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_3_PLANO_DE_ACAO_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
