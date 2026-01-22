'use client'

import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [credits, setCredits] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/credits')
      .then(res => res.json())
      .then(data => setCredits(data.credits))
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Créditos disponíveis: {credits ?? '...'}</p>
    </div>
  )
}
