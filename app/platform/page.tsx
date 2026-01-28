// app/platform/page.tsx
"use client";

export default function PlatformPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* BACKGROUND VISUAL */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,140,0,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,215,0,0.08),transparent_70%)]" />

      {/* CONTENT */}
      <div className="relative z-10 space-y-10">
        {/* HEADER / HERO */}
        <section className="glass p-8 rounded-2xl">
          <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-zinc-300 mb-6">
            Manage projects and monitor agents in real-time
          </p>

          <div className="flex items-center gap-6">
            <span className="text-green-400 font-semibold">
              AI Status: ONLINE
            </span>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold shadow-lg hover:scale-105 transition">
              + Create New Project
            </button>
          </div>
        </section>

        {/* METRICS */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-2xl card-hover">
            <h3 className="text-sm text-zinc-400 mb-2">Projects</h3>
            <p className="text-4xl font-bold">3</p>
          </div>

          <div className="glass p-6 rounded-2xl card-hover">
            <h3 className="text-sm text-zinc-400 mb-2">Tokens</h3>
            <p className="text-4xl font-bold">5,200</p>
          </div>

          <div className="glass p-6 rounded-2xl card-hover">
            <h3 className="text-sm text-zinc-400 mb-2">Executions</h3>
            <p className="text-4xl font-bold">158</p>
          </div>

          <div className="glass p-6 rounded-2xl card-hover">
            <h3 className="text-sm text-zinc-400 mb-2">Last Activity</h3>
            <p className="text-base text-zinc-200">
              Train new model
            </p>
          </div>
        </section>

        {/* RECENT ACTIVITY */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Activity
          </h2>

          <ul className="space-y-4">
            <li className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <div>
                <p className="font-semibold">Evolved SaaS Dashboard</p>
                <p className="text-sm text-zinc-400">
                  AI generated a pricing page into dashboard
                </p>
              </div>
              <span className="text-sm text-zinc-400">1 min ago</span>
            </li>

            <li className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <div>
                <p className="font-semibold">Generated Pricing Page</p>
                <p className="text-sm text-zinc-400">
                  AI generated a pricing page for SaaS template
                </p>
              </div>
              <span className="text-sm text-zinc-400">1 hour ago</span>
            </li>

            <li className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <div>
                <p className="font-semibold">Created SaaS Landing Page</p>
                <p className="text-sm text-zinc-400">
                  Initial landing structure created
                </p>
              </div>
              <span className="text-sm text-zinc-400">2 hours ago</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
