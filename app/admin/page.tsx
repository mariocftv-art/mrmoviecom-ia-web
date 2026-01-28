"use client";

import { useState } from "react";

export default function AdminPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function executarIA() {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          user_id: "admin", // depois ligamos ao auth real
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResult(data.error || "Erro ao executar IA");
      } else {
        setResult(JSON.stringify(data.data, null, 2));
      }
    } catch (err: any) {
      setResult("Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Painel Admin — MRMoviecom IA</h1>

      <textarea
        placeholder="Descreva o que deseja executar"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          height: 120,
          marginTop: 16,
          padding: 12,
          background: "#111",
          color: "#fff",
          border: "1px solid #333",
        }}
      />

      <button
        onClick={executarIA}
        disabled={loading}
        style={{
          marginTop: 12,
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        {loading ? "Executando..." : "Executar"}
      </button>

      {result && (
        <pre
          style={{
            marginTop: 16,
            padding: 12,
            background: "#000",
            color: "#0f0",
            overflow: "auto",
          }}
        >
          {result}
        </pre>
      )}
    </div>
  );
}
