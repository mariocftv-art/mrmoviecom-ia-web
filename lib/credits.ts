import { supabaseServer } from './supabase/supabaseServer'

export async function getCredits() {
  const supabase = supabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Usuário não autenticado')
  }

  const { data, error } = await supabase
    .from('user_credits')
    .select('total, used, remaining')
    .eq('user_id', user.id)
    .single()

  if (error) {
    throw new Error('Erro ao buscar créditos')
  }

  return data
}

export async function canUseCredits(cost: number) {
  const credits = await getCredits()
  return credits.remaining >= cost
}

export async function consumeCredits(cost: number, reason: string) {
  const supabase = supabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Usuário não autenticado')
  }

  const { error } = await supabase.rpc('consume_credits', {
    p_user_id: user.id,
    p_cost: cost,
    p_reason: reason,
  })

  if (error) {
    throw new Error('Erro ao consumir créditos')
  }

  return true
}
