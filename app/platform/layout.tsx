// app/platform/layout.tsx
import React from "react";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-black text-white flex">
      {/* SIDEBAR */}
      <aside className="w-64 min-h-screen p-6 border-r border-white/10 bg-gradient-to-b from-black via-zinc-900 to-black">
        <h1 className="text-2xl font-bold mb-8 gradient-text">
          MRMoviecom IA
        </h1>

        <nav className="space-y-3 text-sm">
          <a className="block opacity-80 hover:opacity-100">📊 Dashboard</a>
          <a className="block opacity-80 hover:opacity-100">📁 Projects</a>
          <a className="block opacity-80 hover:opacity-100">🧩 Templates</a>
          <a className="block opacity-80 hover:opacity-100">📈 Analytics</a>
          <a className="block opacity-80 hover:opacity-100">⚙️ Settings</a>
          <a className="block opacity-80 hover:opacity-100">🧾 Logs</a>
        </nav>

        <button className="mt-10 w-full py-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold">
          Upgrade
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
        {children}
      </main>
    </div>
  );
}
