"use client";

import { useState } from "react";
import type { AIResult } from "@/lib/ai/types";

export default function AIConsole() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);

  async function handleExecute() {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/ai/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data: AIResult = await res.json();
      setResult(data);
    } catch {
      setResult({
        success: false,
        actions: [],
        error: "Erro ao comunicar com a IA",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={6}
        style={{ width: "100%" }}
        placeholder="Digite o prompt da IA"
      />

      <button onClick={handleExecute} disabled={loading}>
        {loading ? "Executando..." : "Executar"}
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Resposta da IA</h3>

          <pre
            style={{
              background: "#111",
              padding: 12,
              borderRadius: 6,
              color: "#0f0",
              whiteSpace: "pre-wrap",
            }}
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
