import fs from 'fs'
import path from 'path'

export function getFase14RegistroLegalEHistoricoPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_1_4_REGISTRO_LEGAL_E_HISTORICO.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
