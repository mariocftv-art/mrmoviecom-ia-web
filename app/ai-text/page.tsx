// app/ai-text/page.tsx
"use client";

import { useState } from "react";

export default function AITextPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function sendPrompt() {
    setLoading(true);
    setError(null);
    setTaskId(null);

    try {
      const res = await fetch("/api/ai/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao enviar");
      }

      setTaskId(data.taskId);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 720 }}>
      <h1>IA de Texto</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={6}
        style={{ width: "100%", marginBottom: 12 }}
        placeholder="Digite seu prompt..."
      />

      <button onClick={sendPrompt} disabled={loading || !prompt}>
        {loading ? "Enviando..." : "Enviar para IA"}
      </button>

      {taskId && (
        <p style={{ marginTop: 12 }}>
          Task enviada: <b>{taskId}</b>
        </p>
      )}

      {error && (
        <p style={{ marginTop: 12, color: "red" }}>{error}</p>
      )}
    </div>
  );
}
