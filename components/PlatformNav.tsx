'use client';
import Link from 'next/link';

export default function PlatformNav() {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
      <Link href="/platform">Home</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/minhas-ias">Minhas IAs</Link>
      <Link href="/create">Criar</Link>
    </nav>
  );
}
