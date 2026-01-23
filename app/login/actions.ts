'use server'

import { redirect } from 'next/navigation'
import { supabaseServer } from '@/lib/supabaseServer'
import { ensureCredits } from '@/lib/credits'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await supabaseServer()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error || !data.user) {
    throw new Error('Credenciais inválidas')
  }

  await ensureCredits(data.user.id)

  redirect('/dashboard')
}
