import {
  getFase12PrimeiraTelaPrompt,
} from '@/lib/prompts/fase1_2_primeira_tela'

import {
  getFase13ModosDaIAPrompt,
} from '@/lib/prompts/fase1_3_modos_da_ia'

import {
  getFase14RegistroLegalEHistoricoPrompt,
} from '@/lib/prompts/fase1_4_registro_legal_e_historico'

import {
  getFase15EntradaProjetosExternosPrompt,
} from '@/lib/prompts/fase1_5_entrada_projetos_externos'

import {
  getFase16FluxoDeAutorizacaoDoUsuarioPrompt,
} from '@/lib/prompts/fase1_6_fluxo_de_autorizacao_do_usuario'

import {
  getFase17SelecaoDeEscopoDaIAPrompt,
} from '@/lib/prompts/fase1_7_selecao_de_escopo_da_ia'

import {
  getFase18ConfirmacaoFinalEInicioDaExecucaoPrompt,
} from '@/lib/prompts/fase1_8_confirmacao_final_e_inicio_da_execucao'

import {
  getFase2RevisaoContextoIAPrompt,
} from '@/lib/prompts/fase2_revisao_contexto_ia'

import {
  getFase3PlanoDeAcaoIAPrompt,
} from '@/lib/prompts/fase3_plano_de_acao_ia'

import {
  getFase4ConfirmacaoPlanoIAPrompt,
} from '@/lib/prompts/fase4_confirmacao_plano_ia'

import {
  getFase5ExecucaoControladaIAPrompt,
} from '@/lib/prompts/fase5_execucao_controlada_ia'

import {
  getFase6MonitoramentoFeedbackIAPrompt,
} from '@/lib/prompts/fase6_monitoramento_e_feedback_ia'

import {
  getFase7EncerramentoIAPrompt,
} from '@/lib/prompts/fase7_encerramento_ia'

import {
  getFase8EstadoFinalIAPrompt,
} from '@/lib/prompts/fase8_estado_final_ia'


export function buildExecutionContext(): string {
  return `
====================================
MRMoviecomIA Platform
CONTEXTO COMPLETO DO MOTOR
====================================

${getFase12PrimeiraTelaPrompt()}

${getFase13ModosDaIAPrompt()}

${getFase14RegistroLegalEHistoricoPrompt()}

${getFase15EntradaProjetosExternosPrompt()}

${getFase16FluxoDeAutorizacaoDoUsuarioPrompt()}

${getFase17SelecaoDeEscopoDaIAPrompt()}

${getFase18ConfirmacaoFinalEInicioDaExecucaoPrompt()}

====================================
FASE 2 — REVISÃO DE CONTEXTO
====================================

${getFase2RevisaoContextoIAPrompt()}

====================================
FASE 3 — PLANO DE AÇÃO
====================================

${getFase3PlanoDeAcaoIAPrompt()}

====================================
FASE 4 — CONFIRMAÇÃO DO PLANO
====================================

${getFase4ConfirmacaoPlanoIAPrompt()}

====================================
FASE 5 — EXECUÇÃO CONTROLADA
====================================

${getFase5ExecucaoControladaIAPrompt()}

====================================
FASE 6 — MONITORAMENTO E FEEDBACK
====================================

${getFase6MonitoramentoFeedbackIAPrompt()}

====================================
FASE 7 — ENCERRAMENTO
====================================

${getFase7EncerramentoIAPrompt()}

====================================
FASE 8 — ESTADO FINAL
====================================

${getFase8EstadoFinalIAPrompt()}

====================================
REGRAS FINAIS DO MOTOR
====================================
- Nunca executar ações técnicas automaticamente
- Sempre retornar plano, status ou explicação
- Sempre exigir confirmação explícita do usuário
- Nunca extrapolar escopo autorizado
- Nunca ocultar informações
- Tudo deve ser auditável, reversível e transparente
`;
}
