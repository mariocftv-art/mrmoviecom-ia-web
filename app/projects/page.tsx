'use client';

import PlatformNav from '@/components/PlatformNav';

export default function ProjectsPage() {
  return (
    <div style={{ padding: 24 }}>
      <PlatformNav />

      <h1>Projetos</h1>

      <p>Lista de projetos criados na plataforma.</p>

      <ul style={{ marginTop: 16 }}>
        <li>Projeto Vídeo Viral</li>
        <li>Projeto Música IA</li>
        <li>Projeto App Simples</li>
      </ul>
    </div>
  );
}
