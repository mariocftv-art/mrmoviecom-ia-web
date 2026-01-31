'use client';

import Link from 'next/link';

const templates = [
  {
    id: 'video-viral',
    title: 'Vídeo Viral',
    desc: 'Template para criação de vídeos curtos e virais.'
  },
  {
    id: 'musica-ia',
    title: 'Música com IA',
    desc: 'Fluxo completo para gerar música com IA.'
  },
  {
    id: 'app-simples',
    title: 'App Simples',
    desc: 'Base para criação rápida de aplicações.'
  }
];

export default function TemplatesPage() {
  return (
    <main style={{ padding: 32, maxWidth: 1200, margin: '0 auto' }}>
      <h1>Templates MRMoviecom</h1>
      <p>Escolha um template para iniciar.</p>

      <section style={{ marginTop: 24, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {templates.map(t => (
          <Link key={t.id} href={`/create?template=${t.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              border: '1px solid var(--border, #ddd)',
              borderRadius: 12,
              padding: 20
            }}>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
