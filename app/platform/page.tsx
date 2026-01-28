export default function PlatformPage() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <section className="space-y-2">
        <h1 className="text-4xl font-bold text-white">
          MRMoviecom IA Platform
        </h1>
        <p className="text-gray-400">
          Central de controle da sua plataforma de Inteligência Artificial
        </p>
      </section>

      {/* STATUS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard
          title="Status da Plataforma"
          value="Ativa"
          color="from-emerald-500 to-green-400"
        />
        <StatusCard
          title="Projetos"
          value="0"
          color="from-indigo-500 to-cyan-400"
        />
        <StatusCard
          title="Minhas IAs"
          value="0"
          color="from-purple-500 to-pink-400"
        />
      </section>

      {/* AÇÕES PRINCIPAIS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActionCard
          title="Criar Projeto"
          description="Inicie um novo projeto com IA guiada"
          href="/platform/projetos"
        />
        <ActionCard
          title="Gerenciar Minhas IAs"
          description="Visualize e controle suas IAs criadas"
          href="/platform/minhas-ias"
        />
      </section>

      {/* VISÃO GERAL */}
      <section className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <h2 className="text-xl font-semibold text-white mb-2">
          Bem-vindo 👋
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Esta é a área central da MRMoviecom IA Platform.  
          A partir daqui você poderá criar projetos, gerenciar suas IAs,
          acessar templates e evoluir para módulos futuros.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-400">
          <li>✔ Criar novos projetos</li>
          <li>✔ Gerenciar Minhas IAs</li>
          <li>✔ Acessar templates</li>
          <li>✔ Evoluir para módulos futuros</li>
        </ul>
      </section>
    </div>
  );
}

/* ================= COMPONENTES ================= */

function StatusCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6">
      <div
        className={`absolute inset-0 opacity-20 bg-gradient-to-br ${color}`}
      />
      <div className="relative">
        <p className="text-sm text-gray-400">
          {title}
        </p>
        <p className="text-3xl font-bold text-white mt-2">
          {value}
        </p>
      </div>
    </div>
  );
}

function ActionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition block"
    >
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mt-2">
        {description}
      </p>
    </a>
  );
}
