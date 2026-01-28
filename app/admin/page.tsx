"use client";

import { useState } from "react";

export default function AdminPage() {
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [fase, setFase] = useState<string | null>(null);

  async function executarIA() {
    setStatus("processando");
    setFase("Analisando solicitação");

    try {
      const res = await fetch("/api/admin/history/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      setStatus(data.status ?? "ok");
      setFase(data.fase ?? "Concluído");
    } catch (err) {
      setStatus("erro");
      setFase("Falha ao executar IA");
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Painel Admin — MRMoviecom IA</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Descreva o que deseja executar"
        style={{ width: "100%", height: 120 }}
      />

      <br />
      <br />

      <button onClick={executarIA}>Executar</button>

      <br />
      <br />

      {status && <p>Status: {status}</p>}
      {fase && <p>Fase atual: {fase}</p>}
    </div>
  );
}
