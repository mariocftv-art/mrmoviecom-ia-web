import fs from 'fs'
import path from 'path'

export function getFase16FluxoDeAutorizacaoDoUsuarioPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_1_6_FLUXO_DE_AUTORIZACAO_DO_USUARIO.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
