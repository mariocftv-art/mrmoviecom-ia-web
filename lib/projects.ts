import { supabase } from './supabase'

export type Project = {
  id: string
  user_id: string | null
  name: string
  progress: number
  status: string
  is_locked: boolean
  created_at: string
}

/**
 * ADMIN — lista TODOS os projetos
 * (não usa user_id, evita erro TEMP_USER_ID)
 */
export async function listAllProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Erro ao listar projetos:', error)
    throw error
  }

  return data ?? []
}
