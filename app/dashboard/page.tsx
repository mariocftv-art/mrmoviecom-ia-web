'use client';

import Sidebar from '@/components/Sidebar';

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <main style={{ flex: 1, padding: 24 }}>
        <h1>MRMoviecom IA – Dashboard</h1>
        <p>Plataforma carregada com sucesso.</p>
      </main>
    </div>
  );
}
