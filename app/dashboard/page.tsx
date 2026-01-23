import { fetchCredits } from '@/lib/useCredits'

export default async function DashboardPage() {
  const credits = await fetchCredits()

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="bg-zinc-900 rounded-xl p-4 w-full max-w-sm">
        <p className="text-sm text-zinc-400">Créditos disponíveis</p>

        <p className="text-3xl font-bold text-green-400">
          {credits.remaining}
        </p>

        <div className="mt-3 h-2 w-full bg-zinc-800 rounded">
          <div
            className="h-2 bg-green-500 rounded"
            style={{
              width: `${(credits.remaining / credits.total) * 100}%`,
            }}
          />
        </div>

        <p className="text-xs text-zinc-500 mt-2">
          Usados: {credits.used} / Total: {credits.total}
        </p>
      </div>
    </div>
  )
}
