"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Dashboard", href: "/dashboard", icon: "📊", color: "cyan" },
  { label: "Vídeos IA", href: "/dashboard/videos", icon: "🎬", color: "purple" },
  { label: "Música IA", href: "/dashboard/musica", icon: "🎵", color: "green" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "📈", color: "yellow" },
  { label: "Configurações", href: "/dashboard/config", icon: "⚙️", color: "red" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    // Removidas as classes 'fixed' e 'top-0' para se integrar ao layout principal
    <aside className="bg-black/80 backdrop-blur-xl border-r border-white/10 flex flex-col h-full">
      {/* LOGO */}
      <div className="px-6 py-6 text-xl font-bold tracking-wider text-cyan-400">
        MRMoviecom
        <div className="text-xs text-white/40 tracking-wide">
          IA Platform
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition
                ${active
                  ? "bg-white/5 border border-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"}
              `}
            >
              <span
                className={`
                  text-lg transition
                  group-hover:scale-110
                  ${active ? "text-" + item.color + "-400" : ""}
                `}
              >
                {item.icon}
              </span>

              <span className="font-medium tracking-wide">
                {item.label}
              </span>

              {active && (
                <span className="ml-auto h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-2 text-sm font-semibold text-black hover:brightness-110 transition">
          Upgrade Pro ⚡
        </button>
      </div>
    </aside>
  );
}