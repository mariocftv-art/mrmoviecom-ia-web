'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // server only
)

type UseCreditsInput = {
  baseCost: number
  variableCost?: number
  module: string
  action: string
}

export async function useCredits({
  baseCost,
  variableCost = 0,
  module,
  action,
}: UseCreditsInput) {
  const totalCost = baseCost + variableCost

  // ⚠️ aqui depois você pode validar user_id via auth.getUser()
  const userId = 'FIXAR_DEPOIS_COM_AUTH'

  const { data, error } = await supabase
    .from('user_credits')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error || !data) throw new Error('Créditos não encontrados')

  if (data.remaining < totalCost) {
    throw new Error('Créditos insuficientes')
  }

  const newUsed = data.used + totalCost
  const newRemaining = data.total - newUsed

  await supabase
    .from('user_credits')
    .update({
      used: newUsed,
      remaining: newRemaining,
    })
    .eq('user_id', userId)

  await supabase.from('credit_usage_logs').insert({
    user_id: userId,
    module,
    action,
    cost: totalCost,
  })

  return {
    success: true,
    charged: totalCost,
    remaining: newRemaining,
  }
}
