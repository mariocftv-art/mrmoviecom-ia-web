import fs from 'fs'
import path from 'path'

export function getFase12PrimeiraTelaPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_1_2_PRIMEIRA_TELA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
