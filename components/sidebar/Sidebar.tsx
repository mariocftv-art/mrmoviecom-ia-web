"use client";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-black via-zinc-900 to-black border-r border-white/10 p-6 z-50">
      <h1 className="text-2xl font-bold mb-10 text-orange-500">
        MRMoviecom IA
      </h1>

      <nav className="space-y-4 text-sm">
        <a className="block opacity-80 hover:opacity-100">📊 Dashboard</a>
        <a className="block opacity-80 hover:opacity-100">📁 Projects</a>
        <a className="block opacity-80 hover:opacity-100">🧠 Templates</a>
        <a className="block opacity-80 hover:opacity-100">📈 Analytics</a>
        <a className="block opacity-80 hover:opacity-100">⚙️ Settings</a>
        <a className="block opacity-80 hover:opacity-100">🧾 Logs</a>
      </nav>

      <button className="mt-10 w-full py-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold">
        Upgrade
      </button>
    </aside>
  );
}
