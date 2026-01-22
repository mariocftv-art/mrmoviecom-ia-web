"use client";

import { useEffect, useState } from "react";

/**
 * PROMPT INTERNO — B14 | Exportação Final
 * NÃO EXIBIR AO USUÁRIO
 */
const EXPORT_PROMPT = `
Você é um sistema de exportação de mídia musical.

Entradas:
- Letra aprovada
- Música IA gerada
- Voz IA aplicada
- Vídeo IA gerado

Objetivos:
1. Exportar MP3 (áudio final)
2. Exportar MP4 (clipe oficial)
3. Preparar versões para:
   - YouTube (16:9)
   - TikTok / Reels (9:16)
4. Marcar projeto como FINALIZADO

Saída esperada:
- Status: EXPORTAÇÃO CONCLUÍDA
`;

export default function ExportacaoPage() {
  const [lyrics, setLyrics] = useState("");
  const [status, setStatus] = useState<"idle" | "exporting" | "done">("idle");

  useEffect(() => {
    const video = localStorage.getItem("video-generated");

    if (!video) {
      window.location.href = "/musica/video-ia";
      return;
    }

    const parsed = JSON.parse(video);
    setLyrics(parsed.lyrics || "");
  }, []);

  const handleExport = () => {
    setStatus("exporting");

    setTimeout(() => {
      console.log("PROMPT B14:");
      console.log(EXPORT_PROMPT);
      console.log("Letra:", lyrics);

      localStorage.setItem(
        "export-final",
        JSON.stringify({
          lyrics,
          exportedAt: new Date().toISOString(),
          step: 14,
          formats: ["mp3", "mp4", "shorts"],
        })
      );

      setStatus("done");
      alert("Exportação concluída com sucesso.");
    }, 2000);
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Exportação final</h1>

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
          onClick={handleExport}
        >
          Exportar música
        </button>
      )}

      {status === "exporting" && (
        <p style={{ marginTop: "24px" }}>
          📦 Exportando arquivos...
        </p>
      )}

      {status === "done" && (
        <p style={{ marginTop: "24px", color: "green" }}>
          ✅ Projeto finalizado. Música pronta para publicação.
        </p>
      )}
    </div>
  );
}
