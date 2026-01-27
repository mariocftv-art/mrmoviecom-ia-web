'use client';

import PlatformNav from '@/components/PlatformNav';

export default function MinhasIASPage() {
  return (
    <div style={{ padding: 24 }}>
      <PlatformNav />

      <h1>Minhas IAs</h1>

      <p>IAs ativas na MRMoviecom IA Platform.</p>

      <ul style={{ marginTop: 16 }}>
        <li>IA Vídeo — ativa</li>
        <li>IA Música — ativa</li>
        <li>IA Roteiro — ativa</li>
      </ul>
    </div>
  );
}
