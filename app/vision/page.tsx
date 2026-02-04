"use client";

import { useState } from "react";

export default function VisionPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function handleAnalyze() {
    if (!input.trim()) {
      alert("Digite algo para a IA Vision analisar");
      return;
    }

    // MOCK DE ANÁLISE (seguro)
    setResult(
      `🔍 Análise Vision\n\nInterpretei o pedido:\n"${input}"\n\nNenhuma ação executada. Apenas análise visual e estrutural.`
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px",
        color: "#ffffff",
      }}
    >
      {/* TÍTULO */}
      <h1
        style={{
          fontSize: "52px",
          fontWeight: 900,
          letterSpacing: "3px",
          color: "#00f0ff",
          textShadow: "0 0 25px rgba(0,240,255,0.7)",
          marginBottom: "16px",
        }}
      >
        IA VISION
      </h1>

      {/* DESCRIÇÃO */}
      <p
        style={{
          maxWidth: "760px",
          fontSize: "16px",
          lineHeight: "1.6",
          color: "rgba(255,255,255,0.85)",
          marginBottom: "28px",
        }}
      >
        Analisa layouts, imagens, fluxos e estruturas.  
        Nenhuma ação é executada — apenas planejamento inteligente.
      </p>

      {/* INPUT + BOTÃO */}
      <div style={{ display: "flex", gap: "14px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Descreva o que a IA Vision deve analisar..."
          style={{
            width: "520px",
            height: "52px",
            padding: "0 18px",
            fontSize: "16px",
            borderRadius: "12px",
            border: "1px solid rgba(0,240,255,0.45)",
            background: "rgba(0,0,0,0.55)",
            color: "#ffffff",
            outline: "none",
            boxShadow: "0 0 25px rgba(0,240,255,0.18)",
          }}
        />

        <button
          onClick={handleAnalyze}
          style={{
            height: "52px",
            padding: "0 28px",
            fontSize: "15px",
            fontWeight: 700,
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(135deg, #00f0ff, #0077ff)",
            color: "#000",
            boxShadow: "0 0 25px rgba(0,240,255,0.45)",
          }}
        >
          Analisar
        </button>
      </div>

      {/* RESULTADO */}
      {result && (
        <pre
          style={{
            marginTop: "32px",
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(0,0,0,0.65)",
            border: "1px solid rgba(0,240,255,0.35)",
            whiteSpace: "pre-wrap",
          }}
        >
          {result}
        </pre>
      )}
    </main>
  );
}
