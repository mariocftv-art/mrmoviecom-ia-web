'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function CreateProjectPage() {
  const params = useSearchParams();
  const template = params.get('template') ?? 'custom';

  return (
    <main style={{ padding: 32, maxWidth: 900, margin: '0 auto' }}>
      <h1>Criar Projeto</h1>
      <p>Template selecionado: <b>{template}</b></p>

      <section style={{ marginTop: 24 }}>
        <label style={{ display: 'block', marginBottom: 12 }}>
          Nome do projeto
          <input
            placeholder="Ex: Vídeo viral para TikTok"
            style={input}
          />
        </label>

        <label style={{ display: 'block', marginBottom: 12 }}>
          Objetivo
          <textarea
            placeholder="Descreva o que a IA deve fazer"
            style={{ ...input, height: 120 }}
          />
        </label>

        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <button style={btnPrimary}>Criar Projeto</button>
          <Link href="/platform">
            <button style={btnSecondary}>Cancelar</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const input = {
  width: '100%',
  padding: 12,
  marginTop: 6,
  borderRadius: 8,
  border: '1px solid #ccc'
};

const btnPrimary = {
  padding: '10px 16px',
  borderRadius: 8,
  border: 'none',
  background: '#4f46e5',
  color: '#fff',
  cursor: 'pointer'
};

const btnSecondary = {
  padding: '10px 16px',
  borderRadius: 8,
  border: '1px solid #ccc',
  background: '#fff',
  cursor: 'pointer'
};
