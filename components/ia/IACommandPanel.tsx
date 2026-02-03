'use client';

import { useState } from 'react';

export default function IACommandPanel() {
  const [comando, setComando] = useState('');
  const [resposta, setResposta] = useState('');
  const [status, setStatus] = useState<'idle' | 'executando' | 'erro'>('idle');

  async function executarComando() {
    if (!comando) return;

    setStatus('executando');
    setResposta('');

    try {
      const res = await fetch('/api/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: comando }),
      });

      const data = await res.json();

      console.log('RESPOSTA DA IA:', data);

      if (data?.result) {
        setResposta(data.result);
        setStatus('idle');
      } else {
        setResposta('⚠️ A IA não retornou resposta.');
        setStatus('erro');
      }
    } catch (err) {
      console.error(err);
      setResposta('❌ Erro ao comunicar com a IA.');
      setStatus('erro');
    }
  }

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-bold">IA CENTRAL — COMMAND</h2>

      <div className="flex gap-2">
        <input
          value={comando}
          onChange={(e) => setComando(e.target.value)}
          placeholder="Digite um comando..."
          className="flex-1 border px-3 py-2"
        />

        <button
          onClick={executarComando}
          className="border px-4 py-2"
        >
          EXECUTAR
        </button>
      </div>

      {status === 'executando' && (
        <div className="text-sm">⏳ Executando IA...</div>
      )}

      {resposta && (
        <pre className="whitespace-pre-wrap border p-4 mt-4">
          {resposta}
        </pre>
      )}
    </div>
  );
}
