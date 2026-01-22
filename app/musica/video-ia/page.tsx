"use client";

import { useEffect, useState } from "react";

/**
 * PROMPT INTERNO — B13 | Vídeo IA
 * NÃO EXIBIR AO USUÁRIO
 */
const VIDEO_IA_PROMPT = `
Você é um assistente interno de geração de vídeo por IA.

Objetivo:
Gerar um vídeo musical a partir de:
- Música base gerada
- Voz IA aplicada
- Letra aprovada

Entradas:
- Letra final
- Música + voz
- Estilo visual selecionado

Regras:
1. Não alterar a letra.
2. Sincronizar imagens com ritmo da música.
3. Gerar clipe visual coerente.
4. Preparar para exportação.
5. Retornar status do vídeo.

Saída esperada:
- Vídeo musical gerado
- Status: VÍDEO PRONTO
`;

export default function VideoIAPage() {
  const [lyrics, setLyrics] = useState("");
  const [style, setStyle] = useState("cinematografico");
  const [status, setStatus] = useState<"idle" | "generating" | "done">("idle");

  useEffect(() => {
    const voice = localStorage.getItem("voice-generated");

    if (!voice) {
      window.location.href = "/musica/voz-ia";
      return;
    }

    const parsed = JSON.parse(voice);
    setLyrics(parsed.lyrics || "");
  }, []);

  const handleGenerateVideo = () => {
    setStatus("generating");

    setTimeout(() => {
      console.log("PROMPT B13:");
      console.log(VIDEO_IA_PROMPT);
      console.log("Estilo visual:", style);
      console.log("Letra:", lyrics);

      localStorage.setItem(
        "video-generated",
        JSON.stringify({
          lyrics,
          style,
          generatedAt: new Date().toISOString(),
          step: 13,
        })
      );

      setStatus("done");
      alert("Vídeo IA gerado com sucesso.");
    }, 2000);
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Vídeo IA</h1>

      <p>Escolha o estilo visual:</p>

      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      >
        <option value="cinematografico">Cinematográfico</option>
        <option value="neon">Neon</option>
        <option value="minimalista">Minimalista</option>
        <option value="emocional">Emocional</option>
        <option value="lyric-video">Lyric Video</option>
      </select>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f5f5f5",
          padding: "16px",
          marginTop: "24px",
        }}
      >
        {lyrics}
      </pre>

      {status === "idle" && (
        <button
          style={{ marginTop: "24px" }}
          onClick={handleGenerateVideo}
        >
          Gerar vídeo IA
        </button>
      )}

      {status === "generating" && (
        <p style={{ marginTop: "24px" }}>
          🎬 Gerando vídeo IA...
        </p>
      )}

      {status === "done" && (
        <p style={{ marginTop: "24px", color: "green" }}>
          ✅ Vídeo pronto. Próximo passo: Exportação.
        </p>
      )}
    </div>
  );
}
