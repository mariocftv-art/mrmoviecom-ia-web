'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type MinhaIA = {
  id: string;
  ia_id: string;
  creditos: number;
  status: string;
  ias: {
    nome: string;
    descricao: string;
  }[];
};

export default function MinhasIAs() {
  const [ias, setIAs] = useState<MinhaIA[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    setLoading(true);

    const { data, error } = await supabase
      .from('user_ias')
      .select(`
        id,
        ia_id,
        creditos,
        status,
        ias:ias (
          nome,
          descricao
        )
      `);

    if (!error && data) {
      setIAs(data as unknown as MinhaIA[]);
    }

    setLoading(false);
  }

  async function usarIA(iaId: string) {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      alert('Usuário não autenticado');
      return;
    }

    const { data } = await supabase.rpc('usar_ia', {
      p_user_id: userData.user.id,
      p_ia_id: iaId
    });

    if (data?.ok) {
      alert('IA executada com sucesso!');
    } else {
      alert(data?.erro || 'Erro ao executar IA');
    }

    carregar();
  }

  if (loading) {
    return <p style={{ padding: 24 }}>Carregando...</p>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Minhas IAs</h1>

      {ias.map((ia) => (
        <div
          key={ia.id}
          style={{
            border: '1px solid #333',
            padding: 16,
            marginBottom: 12,
            borderRadius: 8
          }}
        >
          <h3>{ia.ias[0]?.nome}</h3>
          <p>{ia.ias[0]?.descricao}</p>
          <p>Status: {ia.status}</p>
          <p>Créditos: {ia.creditos}</p>

          <button
            disabled={ia.status !== 'ativa'}
            onClick={() => usarIA(ia.ia_id)}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              border: 'none',
              cursor: ia.status === 'ativa' ? 'pointer' : 'not-allowed',
              backgroundColor: ia.status === 'ativa' ? '#2563eb' : '#444',
              color: '#fff'
            }}
          >
            {ia.status === 'ativa' ? 'Usar IA' : 'IA Bloqueada'}
          </button>
        </div>
      ))}
    </div>
  );
}
