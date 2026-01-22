'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Musica = {
  id: string;
  etapa: string;
  letra: string | null;
};

export default function MinhasMusicas() {
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarMusicas();
  }, []);

  async function carregarMusicas() {
    setLoading(true);

    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('user_musicas')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error(error);
      setMusicas([]);
    } else {
      setMusicas(data || []);
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 32, background: '#0b0b0f', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ fontSize: 28, marginBottom: 24 }}>🎶 Minhas Músicas</h1>

      {loading && <p>Carregando músicas...</p>}

      {!loading && musicas.length === 0 && (
        <p style={{ opacity: 0.6 }}>Você ainda não criou nenhuma música 🎵</p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20
        }}
      >
        {musicas.map((m) => (
          <div
            key={m.id}
            style={{
              background: 'linear-gradient(135deg, #1f1f2e, #141421)',
              padding: 20,
              borderRadius: 16,
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: 12,
                fontSize: 12,
                marginBottom: 10,
                background:
                  m.etapa === 'executada'
                    ? '#2ecc71'
                    : m.etapa === 'aprovada'
                    ? '#3498db'
                    : '#f1c40f',
                color: '#000'
              }}
            >
              {m.etapa.toUpperCase()}
            </span>

            <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 16 }}>
              {m.letra ? '🎼 Letra disponível' : '🎵 Música criada'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
