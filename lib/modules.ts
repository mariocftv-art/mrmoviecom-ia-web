import { createClient } from '@/lib/supabase/server'

export type Module = {
  key: string
  name: string
}

export async function getUserModules(): Promise<Module[]> {
  // 1. Cria o client (COM await)
  const supabase = await createClient()

  // 2. Busca o usuário logado
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    console.error('Usuário não autenticado')
    return []
  }

  // 3. Busca os módulos do usuário
  const { data, error } = await supabase
    .from('user_modules')
    .select(`
      modules (
        key,
        name
      )
    `)
    .eq('user_id', user.id)

  if (error || !data) {
    console.error('Erro ao buscar módulos:', error)
    return []
  }

  // 4. Retorna apenas módulos válidos
  return data
    .map((row: any) => row.modules)
    .filter(Boolean)
}
