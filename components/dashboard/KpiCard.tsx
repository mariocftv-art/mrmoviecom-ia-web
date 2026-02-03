'use client'

import { ReactNode } from 'react'

interface KpiCardProps {
  title: string
  value: string
  icon: ReactNode
  glow?: boolean
}

export default function KpiCard({
  title,
  value,
  icon,
  glow = false,
}: KpiCardProps) {
  return (
    <div
      className={`
        relative rounded-xl border border-cyan-500/20
        bg-black/50 backdrop-blur-xl p-6
        transition-all
        ${glow ? 'shadow-[0_0_25px_rgba(34,211,238,0.6)]' : ''}
      `}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
          {title}
        </span>
        <div className="text-cyan-400">{icon}</div>
      </div>

      <div className="mt-4 text-3xl font-extrabold font-mono text-cyan-300">
        {value}
      </div>

      <div className="absolute inset-0 rounded-xl pointer-events-none border border-cyan-400/10" />
    </div>
  )
}
