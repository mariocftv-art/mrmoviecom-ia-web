export default function PlatformPage() {
  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-3xl font-bold mb-2">
        MRMoviecom IA Platform
      </h1>

      <p className="text-white/60 mb-8">
        Dashboard principal de controle da IA
      </p>

      {/* CARDS KPI – LAYOUT OFICIAL */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { title: "Usuários Totais", value: "2.5M+" },
          { title: "Receita Mensal", value: "US$ 680K" },
          { title: "Tarefas Ativas", value: "325" },
          { title: "Visualizações", value: "48.9K" },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.15)]"
          >
            <p className="text-sm text-white/60">
              {item.title}
            </p>
            <p className="text-3xl font-bold text-cyan-400 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* IA CENTRAL */}
      <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          IA Central
        </h2>

        <textarea
          placeholder="Digite o comando da IA..."
          className="w-full h-32 bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder-white/40"
        />

        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
            Executar
          </button>
        </div>
      </section>
    </main>
  );
}
