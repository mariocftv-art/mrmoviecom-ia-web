export default function DashboardPage() {
  return (
    <div className="max-w-5xl">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-8">
        Dashboard — MRMoviecom IA Platform
      </h1>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* CARD: Criar Vídeo IA */}
        <div className="rounded-lg border border-cyan-400/40 bg-black/60 p-6
                        shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Criar Vídeo IA
          </h2>
          <p className="text-sm text-gray-300">
            Geração de vídeos com prompts inteligentes e automação por IA.
          </p>
        </div>

        {/* CARD: Criar Música IA */}
        <div className="rounded-lg border border-purple-400/40 bg-black/60 p-6
                        shadow-[0_0_30px_rgba(168,85,247,0.25)]">
          <h2 className="text-xl font-semibold text-purple-400 mb-2">
            Criar Música IA
          </h2>
          <p className="text-sm text-gray-300">
            Trilhas sonoras, músicas e vozes geradas por inteligência artificial.
          </p>
        </div>

        {/* CARD: Analytics */}
        <div className="rounded-lg border border-green-400/40 bg-black/60 p-6
                        shadow-[0_0_30px_rgba(34,197,94,0.25)]">
          <h2 className="text-xl font-semibold text-green-400 mb-2">
            Analytics
          </h2>
          <p className="text-sm text-gray-300">
            Monitoramento de uso, créditos e performance do sistema.
          </p>
        </div>

        {/* CARD: Status da Plataforma */}
        <div className="rounded-lg border border-yellow-400/40 bg-black/60 p-6
                        shadow-[0_0_30px_rgba(234,179,8,0.25)]">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Status da Plataforma
          </h2>
          <p className="text-sm text-gray-300">
            Sistema online e operando normalmente.
          </p>
        </div>

      </div>
    </div>
  );
}
