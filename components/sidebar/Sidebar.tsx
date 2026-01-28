"use client";

import React from "react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-black via-zinc-900 to-black border-r border-white/10 px-6 py-6 flex flex-col justify-between">
      
      {/* LOGO / TITLE */}
      <div>
        <h1 className="text-2xl font-bold mb-10 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          MRMoviecom IA
        </h1>

        {/* NAV */}
        <nav className="space-y-3 text-sm">
          <a className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
            📊 Dashboard
          </a>
          <a className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
            📁 Projects
          </a>
          <a className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
            🧩 Templates
          </a>
          <a className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
            📈 Analytics
          </a>
          <a className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
            ⚙️ Settings
          </a>
          <a className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
            🧾 Logs
          </a>
        </nav>
      </div>

      {/* FOOTER / CTA */}
      <button className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:opacity-90 transition">
        Upgrade
      </button>
    </aside>
  );
}
