'use server';

import { redirect } from 'next/navigation';
import { supabaseServer } from '@/lib/supabaseServer';

async function ensureCredits(userId: string) {
  const supabase = supabaseServer();

  const { data } = await supabase
    .from('user_credits')
    .select('user_id')
    .eq('user_id', userId)
    .single();

  if (!data) {
    await supabase.from('user_credits').insert({
      user_id: userId,
      balance: 100,
    });
  }
}

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = supabaseServer();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    throw new Error('Credenciais inválidas');
  }

  await ensureCredits(data.user.id);

  redirect('/dashboard');
}
