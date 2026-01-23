export function checkServerEnv() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('SUPABASE_URL não configurada')
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SERVICE_ROLE_KEY não configurada')
  }
}
