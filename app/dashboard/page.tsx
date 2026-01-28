"use client";

import {
  Layout,
  Folder,
  Brain,
  Layers,
  Settings,
  Activity,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col gap-6">
        <h1 className="text-xl font-bold tracking-wide">
          MRMoviecom <span className="text-orange-500">IA</span>
        </h1>

        <nav className="flex flex-col gap-4 text-sm">
          <span className="flex items-center gap-2 text-orange-400">
            <Layout size={16} /> Dashboard
          </span>

          <span className="flex items-center gap-2 text-zinc-400 hover:text-white cursor-pointer">
            <Folder size={16} /> Projects
          </span>

          <span className="flex items-center gap-2 text-zinc-400 hover:text-white cursor-pointer">
            <Brain size={16} /> IA
          </span>

          <span className="flex items-center gap-2 text-zinc-400 hover:text-white cursor-pointer">
            <Layers size={16} /> Templates
          </span>

          <span className="flex items-center gap-2 text-zinc-400 hover:text-white cursor-pointer">
            <Activity size={16} /> Logs
          </span>

          <span className="flex items-center gap-2 text-zinc-400 hover:text-white cursor-pointer">
            <Settings size={16} /> Settings
          </span>
        </nav>

        <button className="mt-auto bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold py-2 rounded-lg">
          Upgrade
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-zinc-400">
              Manage projects and monitor agents in real-time
            </p>
          </div>

          <span className="text-sm text-green-400">
            AI Status: ONLINE
          </span>
        </header>

        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg">
          + Create New Project
        </button>

        {/* CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p className="text-sm text-zinc-400">Projects</p>
            <h3 className="text-3xl font-bold">3</h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p className="text-sm text-zinc-400">Tokens</p>
            <h3 className="text-3xl font-bold">5.200</h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p className="text-sm text-zinc-400">Executions</p>
            <h3 className="text-3xl font-bold">158</h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p className="text-sm text-zinc-400">Last Activity</p>
            <h3 className="text-lg">Train new model</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
