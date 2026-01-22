"use client";

import { useEffect, useState } from "react";

/**
 * PROMPT INTERNO — B11 | Geração da Música IA
 * NÃO EXIBIR AO USUÁRIO
 */
const MUSIC_IA_PROMPT = `
Você é um assistente interno de geração musical por IA.

Objetivo:
Gerar uma música completa a partir de uma letra aprovada.

Entradas:
- Letra final aprovada
- Estilo musical
- Clima emocional
- Tema da música

Regras:
1. Não alterar a letra.
2. Usar a letra como base fixa.
3. Gerar melodia, ritmo e arranjo.
4. Preparar saída para voz IA e vídeo IA.
5. Retornar status de geração.

Saída esperada:
- Música base gerada
- Pronta para voz IA (B12)
`;

export default function MusicIAPage() {
  const [lyrics, setLyrics] = useState("");
  const [status, setStatus] = useState<"idle" | "generating" | "done">("idle");

  useEffect(() => {
    const approved = localStorage.getItem("lyrics-approved");

    if (!approved) {
      window.location.href = "/musica/lyrics/guided";
      return;
    }

    const parsed = JSON.parse(approved);
    setLyrics(parsed.lyrics || "");
  }, []);

  const handleGenerate = () => {
    setStatus("generating");

    // SIMULA geração (IA entra depois)
    setTimeout(() => {
      console.log("PROMPT B11:");
      console.log(MUSIC_IA_PROMPT);
      console.log("Letra usada:", lyrics);

      localStorage.setItem(
        "music-generated",
        JSON.stringify({
          lyrics,
          generatedAt: new Date().toISOString(),
          step: 11,
        })
      );

      setStatus("done");
      alert("Música base gerada com sucesso.");
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Geração da Música IA</h1>

      <p>Letra aprovada:</p>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f5f5f5",
          padding: "16px",
          marginTop: "16px",
        }}
      >
        {lyrics}
      </pre>

      {status === "idle" && (
        <button
          style={{ marginTop: "24px" }}
          onClick={handleGenerate}
        >
          Gerar música com IA
        </button>
      )}

      {status === "generating" && (
        <p style={{ marginTop: "24px" }}>
          🎶 Gerando música...
        </p>
      )}

      {status === "done" && (
        <p style={{ marginTop: "24px", color: "green" }}>
          ✅ Música pronta. Próximo passo: Voz IA.
        </p>
      )}
    </div>
  );
}
