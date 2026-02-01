'use client';

import Link from 'next/link';

export default function PlatformNav() {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/vision">Visão</Link>
      <Link href="/command">Comando</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/settings">Configurações</Link>
    </nav>
  );
}
