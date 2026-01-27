'use client';

import PlatformNav from '@/components/PlatformNav';

export default function PlatformPage() {
  return (
    <div style={{ padding: 24 }}>
      <PlatformNav />

      <h1>MRMoviecom IA Platform</h1>

      <p>Status: <strong>Plataforma ativa</strong></p>

      <section style={{ marginTop: 24 }}>
        <h2>Bem-vindo</h2>
        <p>
          Esta é a área central da MRMoviecom IA Platform.
          A partir daqui você pode criar projetos, gerenciar suas IAs
          e acessar os recursos disponíveis.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <ul>
          <li>✔ Criar novos projetos</li>
          <li>✔ Gerenciar Minhas IAs</li>
          <li>✔ Acessar templates</li>
          <li>✔ Evoluir para módulos futuros</li>
        </ul>
      </section>
    </div>
  );
}
