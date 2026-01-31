"use client";

import { useEffect, useState } from "react";

/**
 * PROMPT INTERNO — B12 | Voz IA
 * NÃO EXIBIR AO USUÁRIO
 */
const VOICE_IA_PROMPT = `
Você é um assistente interno de geração de voz por IA.

Objetivo:
Aplicar voz cantada ou narrada sobre uma música base gerada.

Entradas:
- Letra aprovada
- Música base gerada
- Tipo de voz selecionada

Regras:
1. Não alterar a letra.
2. Sincronizar voz com a música.
3. Permitir escolha de timbre e estilo.
4. Gerar áudio final.
5. Preparar para vídeo IA (B13).

Saída esperada:
- Arquivo de áudio com voz IA
- Status: VOZ GERADA
`;

export default function VoiceIAPage() {
  const [lyrics, setLyrics] = useState("");
  const [voice, setVoice] = useState("masculina");
  const [status, setStatus] = useState<"idle" | "generating" | "done">("idle");

  useEffect(() => {
    const music = localStorage.getItem("music-generated");

    if (!music) {
      window.location.href = "/musica/ia";
      return;
    }

    const parsed = JSON.parse(music);
    setLyrics(parsed.lyrics || "");
  }, []);

  const handleGenerateVoice = () => {
    setStatus("generating");

    setTimeout(() => {
      console.log("PROMPT B12:");
      console.log(VOICE_IA_PROMPT);
      console.log("Voz escolhida:", voice);
      console.log("Letra:", lyrics);

      localStorage.setItem(
        "voice-generated",
        JSON.stringify({
          lyrics,
          voice,
          generatedAt: new Date().toISOString(),
          step: 12,
        })
      );

      setStatus("done");
      alert("Voz IA gerada com sucesso.");
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Voz IA</h1>

      <p>Escolha o tipo de voz:</p>

      <select
        value={voice}
        onChange={(e) => setVoice(e.target.value)}
      >
        <option value="masculina">Masculina</option>
        <option value="feminina">Feminina</option>
        <option value="infantil">Infantil</option>
        <option value="coral">Coral</option>
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
          onClick={handleGenerateVoice}
        >
          Gerar voz IA
        </button>
      )}

      {status === "generating" && (
        <p style={{ marginTop: "24px" }}>
          🎤 Gerando voz IA...
        </p>
      )}

      {status === "done" && (
        <p style={{ marginTop: "24px", color: "green" }}>
          ✅ Voz pronta. Próximo passo: Vídeo IA.
        </p>
      )}
    </div>
  );
}
