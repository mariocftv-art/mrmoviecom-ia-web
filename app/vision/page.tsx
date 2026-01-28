export default function VisionPage() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <section>
        <h1 className="text-4xl font-bold text-white">
          Vision
        </h1>
        <p className="text-gray-400 mt-2">
          Visão geral estratégica da MRMoviecom IA Platform
        </p>
      </section>

      {/* MÉTRICAS */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="Status da Plataforma" value="Ativa" />
        <MetricCard title="Projetos" value="0" />
        <MetricCard title="IAs Ativas" value="0" />
        <MetricCard title="Execuções" value="0" />
      </section>

      {/* VISÃO ESTRATÉGICA */}
      <section className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <h2 className="text-xl font-semibold text-white mb-3">
          Visão Estratégica
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Este painel apresenta a leitura macro da plataforma.
          Aqui você acompanha o estado geral, crescimento, uso da IA
          e a saúde do ecossistema MRMoviecom.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-400">
          <li>✔ Monitoramento geral</li>
          <li>✔ Indicadores de crescimento</li>
          <li>✔ Saúde da IA</li>
          <li>✔ Base para decisões estratégicas</li>
        </ul>
      </section>

      {/* BLOCO FUTURO */}
      <section className="rounded-2xl border border-dashed border-white/10 p-6 text-gray-500 text-sm">
        Próximo nível: gráficos, timelines, alertas inteligentes e previsões.
      </section>
    </div>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <p className="text-sm text-gray-400">
        {title}
      </p>
      <p className="text-3xl font-bold text-white mt-2">
        {value}
      </p>
    </div>
  );
}
