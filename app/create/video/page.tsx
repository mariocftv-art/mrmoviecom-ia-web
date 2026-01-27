'use client';

import PlatformNav from '@/components/PlatformNav';

export default function CreatePage() {
  return (
    <div style={{ padding: 24 }}>
      <PlatformNav />

      <h1>Criar Projeto</h1>

      <p>Inicie um novo projeto com IA.</p>

      <form style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12 }}>
          <label>Nome do Projeto</label><br />
          <input
            placeholder="Ex: Vídeo viral TikTok"
            style={{ padding: 8, width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Objetivo</label><br />
          <textarea
            placeholder="Descreva o que a IA deve fazer"
            style={{ padding: 8, width: '100%', height: 100 }}
          />
        </div>

        <button
          type="button"
          style={{
            padding: '10px 16px',
            background: '#4f46e5',
            color: '#fff',
            border: 'none',
            borderRadius: 6
          }}
        >
          Criar
        </button>
      </form>
    </div>
  );
}
