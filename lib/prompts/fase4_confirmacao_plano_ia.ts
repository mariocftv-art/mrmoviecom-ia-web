import fs from 'fs'
import path from 'path'

export function getFase4ConfirmacaoPlanoIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_4_CONFIRMACAO_PLANO_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
