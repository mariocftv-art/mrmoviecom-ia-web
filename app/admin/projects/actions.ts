'use server'

import { createClient } from '@supabase/supabase-js'

export async function unlockProject(formData: FormData) {
  const projectId = formData.get('projectId') as string

  if (!projectId) {
    console.log('❌ projectId não recebido')
    return
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error } = await supabase
    .from('projects')
    .update({
      is_locked: false,
      status: 'editing',
    })
    .eq('id', projectId)

  if (error) {
    console.error('❌ Erro ao desbloquear:', error)
    throw error
  }

  console.log('✅ Projeto desbloqueado:', projectId)
}
