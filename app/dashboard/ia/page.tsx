"use client";

import { useState } from "react";

export default function IAPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Assistente IA
      </h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite o que deseja criar..."
        className="w-full h-40 rounded-xl bg-[#0e1325] border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none"
      />

      <button
        onClick={() => setLoading(true)}
        className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium"
      >
        {loading ? "Executando..." : "Executar IA"}
      </button>
    </div>
  );
}
