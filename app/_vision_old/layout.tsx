import Link from "next/link";

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0b0f19] text-gray-200">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0e1325] border-r border-white/10 px-6 py-8">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-white">
            MRMoviecom <span className="text-indigo-400">IA</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Vision • Visão Geral
          </p>
        </div>

        <nav className="space-y-2 text-sm">
          <NavItem href="/vision" label="Vision" />
          <NavItem href="/platform" label="Platform" />
          <NavItem href="/command" label="Command" />
          <NavItem href="/admin" label="Admin" />
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 px-10 py-8">
        {children}
      </main>
    </div>
  );
}

function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition"
    >
      {label}
    </Link>
  );
}
