"use client";

import { useState } from "react";

export default function IAPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  async function handleSend() {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/central", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.response || "Sem resposta.");
    } catch (err) {
      setResponse("Erro ao comunicar com a IA.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: "60px", color: "#fff" }}>
      <h1
        style={{
          fontSize: "52px",
          color: "#00f0ff",
          fontWeight: 900,
          textShadow: "0 0 25px rgba(0,240,255,.7)",
        }}
      >
        IA CENTRAL
      </h1>

      <p style={{ opacity: 0.85, maxWidth: 700 }}>
        Execute ações usando o contexto do Vision. A IA Central decide, orquestra
        e responde.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ex: analisar layout da MRMoviecom e sugerir melhorias"
          style={{
            width: 480,
            height: 52,
            padding: "0 18px",
            borderRadius: 12,
            background: "rgba(0,0,0,.6)",
            border: "1px solid rgba(0,240,255,.4)",
            color: "#fff",
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            width: 120,
            height: 52,
            borderRadius: 12,
            background: "#00f0ff",
            color: "#000",
            fontWeight: 700,
            boxShadow: "0 0 25px rgba(0,240,255,.6)",
            cursor: "pointer",
          }}
        >
          {loading ? "Pensando..." : "Enviar"}
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <div style={{ marginTop: 20, color: "#00f0ff" }}>
          ⏳ IA Central analisando...
        </div>
      )}

      {/* RESPOSTA */}
      {response && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            borderRadius: 16,
            background: "rgba(0,0,0,.55)",
            border: "1px solid rgba(0,240,255,.25)",
            maxWidth: 900,
          }}
        >
          <strong>Resposta da IA Central:</strong>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              marginTop: 10,
              opacity: 0.9,
            }}
          >
            {response}
          </pre>
        </div>
      )}
    </main>
  );
}
