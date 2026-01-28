export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0b0f19] text-gray-200">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0e1325] border-r border-white/5 p-6">
        <h1 className="text-xl font-bold text-white mb-8">
          MRMoviecom IA
        </h1>

        <nav className="space-y-3 text-sm">
          <a className="block text-indigo-400">Dashboard</a>
          <a className="block text-gray-400 hover:text-white">IA</a>
          <a className="block text-gray-400 hover:text-white">Projetos</a>
          <a className="block text-gray-400 hover:text-white">Histórico</a>
          <a className="block text-gray-400 hover:text-white">Créditos</a>
          <a className="block text-gray-400 hover:text-white">Admin</a>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
