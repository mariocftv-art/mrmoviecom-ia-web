'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/browserClient'

export function useCredits() {
  const [credits, setCredits] = useState<number>(0)

  async function loadCredits() {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) {
      console.log('USUÁRIO NÃO LOGADO')
      setCredits(0)
      return
    }

    const { data, error } = await supabase
      .from('user_credits')
      .select('credits')
      .eq('user_id', user.id)
      .single()

    if (error) {
      console.error('ERRO AO BUSCAR CRÉDITOS', error)
      setCredits(0)
      return
    }

    console.log('CRÉDITOS LIDOS DO BANCO:', data.credits)
    setCredits(data.credits ?? 0)
  }

  useEffect(() => {
    loadCredits()
  }, [])

  return {
    credits,
    refreshCredits: loadCredits
  }
}
