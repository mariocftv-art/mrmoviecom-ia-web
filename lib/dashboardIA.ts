import { supabase } from '@/lib/supabase'

export type Period = 'today' | '7days' | '30days'

function getStartDate(period: Period) {
  const now = new Date()

  if (period === 'today') {
    now.setHours(0, 0, 0, 0)
    return now.toISOString()
  }

  if (period === '7days') {
    now.setDate(now.getDate() - 7)
    return now.toISOString()
  }

  now.setDate(now.getDate() - 30)
  return now.toISOString()
}

export async function getDashboardIAMetrics(period: Period) {
  const startDate = getStartDate(period)

 const { data, error } = await supabase
  .from('dashboard_ia_metrics')
  .select('*')
  .maybeSingle()

  if (error) {
    console.error('Erro ao buscar métricas IA:', error)
    throw error
  }

  return (
    data ?? {
      total_conversas: 0,
      total_mensagens: 0,
      total_resultados: 0,
      ultima_conversa: null,
      ultimo_resultado: null,
    }
  )
}
