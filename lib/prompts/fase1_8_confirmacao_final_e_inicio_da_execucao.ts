import fs from 'fs'
import path from 'path'

export function getFase18ConfirmacaoFinalEInicioDaExecucaoPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_1_8_CONFIRMACAO_FINAL_E_INICIO_DA_EXECUCAO.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
