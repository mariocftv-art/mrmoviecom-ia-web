'use client'

import { useState } from 'react'
import { createBrowserSupabase } from '@/lib/supabase/browserClient'
import { getCreditsOrCreate } from '@/lib/supabase/credits'

export default function CriarMusicaPage() {
  const [loading, setLoading] = useState(false)

  async function executarMusica() {
    setLoading(true)

    const supabase = createBrowserSupabase()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      alert('Usuário não autenticado')
      setLoading(false)
      return
    }

    const credits = await getCreditsOrCreate(supabase, user.id)

    if (!credits || credits.remaining <= 0) {
      alert('Sem créditos para gerar música')
      setLoading(false)
      return
    }

    await supabase
      .from('user_credits')
      .update({
        used: credits.used + 1,
        remaining: credits.remaining - 1,
      })
      .eq('user_id', user.id)

    alert('🎵 Música gerada com sucesso!')
    setLoading(false)
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Criar Música</h1>

      <button onClick={executarMusica} disabled={loading}>
        {loading ? 'Gerando...' : 'Executar música'}
      </button>
    </div>
  )
}
