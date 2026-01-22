'use client'

import { supabase } from '@/lib/supabase/browserClient'
import { useEffect, useState } from 'react'

type CreditCost = {
  id: string
  action: string
  cost: number
  active: boolean
}

export default function AdminCreditCosts() {
  const [data, setData] = useState<CreditCost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from('credit_costs')
        .select('*')
        .order('action')

      console.log('ADMIN CREDIT COSTS =>', data, error)

      setData(data || [])
      setLoading(false)
    }

    load()
  }, [])

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <h1>Admin — Custos de Créditos</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Créditos</th>
            <th>Ativo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.action}</td>
              <td>{item.cost}</td>
              <td>{item.active ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
