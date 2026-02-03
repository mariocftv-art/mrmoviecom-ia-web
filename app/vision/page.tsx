'use client';

import { useState } from 'react';

export default function VisionPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  async function analisar() {
    if (!input) return;

    setLoading(true);
    setOutput('Analisando com Vision...\n');

    try {
      const res = await fetch('/api/vision', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

      const text = await res.text();
      setOutput(text);
    } catch (err) {
      setOutput('Erro ao analisar. Verifique a API do Vision.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Vision</h1>

      <p className="text-zinc-400">
        Módulo de análise e planejamento. Nenhuma ação é executada aqui.
      </p>

      <textarea
        className="w-full h-32 bg-zinc-900 p-3 rounded"
        placeholder="Descreva o que a IA deve analisar…"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button
        onClick={analisar}
        disabled={loading}
        className="bg-cyan-600 px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Analisando…' : 'Analisar'}
      </button>

      {output && (
        <pre className="bg-zinc-950 p-4 rounded whitespace-pre-wrap border border-zinc-800">
          {output}
        </pre>
      )}
    </div>
  );
}
