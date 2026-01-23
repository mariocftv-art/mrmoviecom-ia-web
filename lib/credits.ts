'use server';

import { supabaseServer } from '@/lib/supabaseServer';

export async function getCredits() {
  const supabase = supabaseServer();
  const { data: user } = await supabase.auth.getUser();

  if (!user || !user.user) {
    return 0;
  }

  const { data, error } = await supabase
    .from('user_credits')
    .select('balance')
    .eq('user_id', user.user.id)
    .single();

  if (error || !data) {
    return 0;
  }

  return data.balance;
}

export async function consumeCredits(amount: number) {
  const supabase = supabaseServer();
  const { data: user } = await supabase.auth.getUser();

  if (!user || !user.user) {
    throw new Error('Usuário não autenticado');
  }

  const { data, error } = await supabase
    .from('user_credits')
    .select('balance')
    .eq('user_id', user.user.id)
    .single();

  if (error || !data) {
    throw new Error('Créditos não encontrados');
  }

  if (data.balance < amount) {
    throw new Error('Créditos insuficientes');
  }

  const newBalance = data.balance - amount;

  await supabase
    .from('user_credits')
    .update({ balance: newBalance })
    .eq('user_id', user.user.id);

  return newBalance;
}
