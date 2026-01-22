import fs from 'fs'
import path from 'path'

export function getFase6MonitoramentoFeedbackIAPrompt() {
  const filePath = path.join(
    process.cwd(),
    'prompts',
    'FASE_6_MONITORAMENTO_E_FEEDBACK_IA.md'
  )

  return fs.readFileSync(filePath, 'utf8')
}
