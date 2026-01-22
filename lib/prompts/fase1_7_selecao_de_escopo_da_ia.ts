import fs from 'fs'
import path from 'path'

export function getFase17SelecaoDeEscopoDaIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_1_7_SELECAO_DE_ESCOPO_DA_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
