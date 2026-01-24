'use client'

import { useState } from 'react'
import { useCredits } from '@/lib/supabase/useCredits'

export default function UseCreditsButton() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleTest() {
    setLoading(true)
    setMessage(null)

    try {
      const result = await useCredits({
        baseCost: 10,
        variableCost: 5,
        module: 'dashboard_test',
        action: 'test_credit_usage',
      })

      setMessage(
        `Créditos usados: ${result.charged} | Restante: ${result.remaining}`
      )
    } catch (err: any) {
      setMessage(err.message || 'Erro ao consumir créditos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={handleTest} disabled={loading}>
        {loading ? 'Processando...' : 'Testar consumo de créditos'}
      </button>

      {message && <p>{message}</p>}
    </div>
  )
}
