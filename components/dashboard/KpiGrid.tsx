'use client'

import {
  Users,
  DollarSign,
  ListChecks,
  Eye
} from 'lucide-react'
import KpiCard from './KpiCard'

export default function KpiGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <KpiCard
        title="Usuários Totais"
        value="+2.5M"
        icon={<Users size={22} />}
        glow
      />
      <KpiCard
        title="Receita Mensal"
        value="$680K"
        icon={<DollarSign size={22} />}
      />
      <KpiCard
        title="Tarefas Ativas"
        value="325"
        icon={<ListChecks size={22} />}
      />
      <KpiCard
        title="Visualizações"
        value="48.9K"
        icon={<Eye size={22} />}
      />
    </section>
  )
}
