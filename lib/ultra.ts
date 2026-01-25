import { createServerSupabase } from '@/lib/_supabase_disabled/server'

export async function isUltraEmail(email: string) {
  const supabase = await createServerSupabase()

  const { data, error } = await supabase
    .from('ultra_allowed_emails')
    .select('id, active')
    .eq('email', email)
    .eq('active', true)
    .single()

  if (error || !data) return false
  return true
}
