'use client'

type Module = {
  key: string
  name: string
}

export default function Sidebar({ modules }: { modules: Module[] }) {
  const hasModule = (key: string) =>
    modules.some((m) => m.key === key)

  return (
    <aside
      style={{
        width: 240,
        background: '#111',
        color: '#fff',
        padding: 16,
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>📊 Dashboard</li>

        {hasModule('ai_store') && (
          <li>🧠 IA Store</li>
        )}

        {hasModule('analytics') && (
          <li>📈 Analytics</li>
        )}

        {hasModule('automation') && (
          <li>⚙️ Automations</li>
        )}
      </ul>
    </aside>
  )
}
