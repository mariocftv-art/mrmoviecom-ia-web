"use client";

import { useState } from "react";

export default function AdminPage() {
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState("");
  const [fase, setFase] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function executarIA() {
    setStatus("Processando...");
    setFase("");
    setMensagem("");

    try {
      const res = await fetch("/api/admin/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      setStatus(data.status);
      setFase(data.fase);
      setMensagem(data.mensagem);
    } catch (error) {
      setStatus("erro");
      setMensagem("Erro ao executar a IA");
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        Painel Admin — MRMoviecom IA
      </h1>

      <textarea
        className="w-full h-40 p-4 border rounded bg-black text-green-400 font-mono"
        placeholder="Descreva o que deseja executar..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={executarIA}
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
      >
        Executar
      </button>

      <div className="mt-6">
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Fase atual:</strong> {fase}
        </p>
        <p className="mt-2 text-gray-300">{mensagem}</p>
      </div>
    </div>
  );
}
