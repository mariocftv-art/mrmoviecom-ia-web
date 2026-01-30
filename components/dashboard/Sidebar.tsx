export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
      <h2 className="text-xl font-bold mb-6 text-white">
        MRMoviecom IA
      </h2>

      <nav className="space-y-3 text-sm text-zinc-300">
        <div className="text-green-400">● IA Local Ativa</div>
        <div>Dashboard</div>
        <div>Execuções</div>
        <div>Arquivos</div>
      </nav>
    </aside>
  );
}
