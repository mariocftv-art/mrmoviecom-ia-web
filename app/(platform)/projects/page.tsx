'use client';

import PlatformNav from '@/components/sidebar/PlatformNav';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PlatformNav />

      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-white/70">
          Área de projetos da plataforma MRMoviecom IA.
        </p>
      </main>
    </div>
  );
}
