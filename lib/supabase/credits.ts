import { supabaseServer } from './supabaseServer'

export async function getCredits() {
  const supabase = await supabaseServer()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Usuário não autenticado')
  }

  const { data, error } = await supabase
    .from('user_credits')
    .select('total, used, remaining')
    .eq('user_id', user.id)
    .single()

  if (error || !data) {
    throw new Error('Erro ao buscar créditos')
  }

  return data
}

export async function canUseCredits(cost: number) {
  const credits = await getCredits()
  return credits.remaining >= cost
}

export async function consumeCredits(cost: number, reason = 'uso') {
  const supabase = await supabaseServer()
  const credits = await getCredits()

  if (credits.remaining < cost) {
    throw new Error('Créditos insuficientes')
  }

  const { error } = await supabase
    .from('user_credits')
    .update({
      used: credits.used + cost,
      remaining: credits.remaining - cost,
    })
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)

  if (error) {
    throw new Error('Erro ao consumir créditos')
  }

  return true
}
