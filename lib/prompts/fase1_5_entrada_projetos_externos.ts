import fs from 'fs'
import path from 'path'

export function getFase15EntradaProjetosExternosPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_1_5_ENTRADA_PROJETOS_EXTERNOS.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
