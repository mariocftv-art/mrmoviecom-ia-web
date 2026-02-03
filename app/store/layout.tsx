export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="mb-10 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-cyan-400">
            MRMoviecom IA Platform
          </h1>

          <span className="text-sm opacity-60">
            Loja IA · DEV MODE
          </span>
        </header>

        {children}
      </div>
    </section>
  );
}
