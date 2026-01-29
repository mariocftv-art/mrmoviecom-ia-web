"use client";

import { useState } from "react";
import AIHistory from "@/components/AIHistory";

export default function AIConsole() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleExecute() {
    setLoading(true);
    setError(null);
    setOutput("");

    try {
      const res = await fetch("/api/ai/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Erro ao executar IA");
      }

      setOutput(data.output);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* CONSOLE DE EXECUÇÃO */}
      <div>
        <textarea
          className="w-full p-3 bg-black border border-white/20 rounded text-white"
          rows={5}
          placeholder="Descreva o que deseja executar"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          onClick={handleExecute}
          disabled={loading}
          className="mt-2 px-4 py-2 bg-white text-black rounded"
        >
          {loading ? "Executando..." : "Executar"}
        </button>

        {error && (
          <p className="text-red-500 mt-2">
            {error}
          </p>
        )}

        {output && (
          <pre className="mt-4 p-3 bg-black border border-green-500 text-green-400 whitespace-pre-wrap">
            {output}
          </pre>
        )}
      </div>

      {/* HISTÓRICO DE EXECUÇÕES */}
      <AIHistory />
    </div>
  );
}
