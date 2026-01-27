"use client";

import { useState } from "react";

export default function AdminPage() {
  const [comando, setComando] = useState("");
  const [status, setStatus] = useState("");

  async function handleExecutar() {
    const res = await fetch("/api/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comando }),
    });

    const data = await res.json();
    setStatus(JSON.stringify(data, null, 2));
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Painel Admin — MRMoviecom IA</h1>

      <textarea
        value={comando}
        onChange={(e) => setComando(e.target.value)}
        placeholder="Descreva o que deseja executar"
        style={{ width: "100%", minHeight: 120 }}
      />

      <br />
      <br />

      <button onClick={handleExecutar}>Executar</button>

      <h2>Status:</h2>
      <pre>{status}</pre>
    </div>
  );
}
