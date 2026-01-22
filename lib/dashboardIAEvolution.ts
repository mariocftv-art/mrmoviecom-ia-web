import { supabase } from './supabase'
import type { Period } from './dashboardIA'

function getStartDate(period: Period) {
  const now = new Date()

  if (period === 'today') {
    return new Date(now.setHours(0, 0, 0, 0)).toISOString()
  }

  if (period === '7days') {
    now.setDate(now.getDate() - 6)
    return now.toISOString()
  }

  now.setDate(now.getDate() - 29)
  return now.toISOString()
}

export async function getDashboardIAEvolution(period: Period) {
  const startDate = getStartDate(period)

  const { data, error } = await supabase
    .from('dashboard_ia_evolution')
    .select('day, total')
    .gte('day', startDate)
    .order('day', { ascending: true })

  if (error) {
    console.error('Erro evolução IA:', error)
    return []
  }

  return data ?? []
}
