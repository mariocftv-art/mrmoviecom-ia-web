"use client";

import { useEffect, useState } from "react";

/**
 * PROMPT INTERNO — B9.B.4 | Revisão da Letra
 * NÃO EXIBIR AO USUÁRIO
 */
const REVIEW_PROMPT = `
Você é um assistente interno de revisão musical.

Objetivo:
Exibir a letra completa para leitura final e aprovação.

Regras:
1. Não alterar o texto do usuário.
2. Não sugerir melhorias.
3. Não criar versos.
4. Apenas validar se todos os blocos estão preenchidos.
5. Preparar a letra para aprovação final (B10).

Formato esperado:
- Status: PRONTA ou INCOMPLETA
- Observações, se houver.
`;

export default function GuidedReviewStep() {
  const [finalLyrics, setFinalLyrics] = useState("");

  useEffect(() => {
    const structureData = localStorage.getItem("guided-lyrics-structure");
    const writingData = localStorage.getItem("guided-lyrics-writing");

    if (!structureData || !writingData) {
      window.location.href = "/musica/lyrics/guided";
      return;
    }

    const structureParsed = JSON.parse(structureData);
    const writingParsed = JSON.parse(writingData);

    const mergedLyrics = structureParsed.structure
      .map((block: string, index: number) => {
        const text = writingParsed.lyrics[index] || "";
        return `${block}\n${text}`;
      })
      .join("\n\n");

    setFinalLyrics(mergedLyrics);
  }, []);

  const handleApprove = () => {
    if (!finalLyrics.trim()) {
      alert("A letra está vazia.");
      return;
    }

    // SALVA LETRA FINAL
    localStorage.setItem(
      "guided-lyrics-final",
      JSON.stringify({
        lyrics: finalLyrics,
        step: 4,
        approvedAt: new Date().toISOString(),
      })
    );

    // DEBUG / PROMPT
    console.log("PROMPT B9.B.4:");
    console.log(REVIEW_PROMPT);
    console.log("LETRA FINAL:", finalLyrics);

    alert("Letra aprovada com sucesso.");

    // 👉 AVANÇA PARA B10
    window.location.href = "/musica/lyrics/approval";
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Modo guiado — Revisão da letra</h1>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f5f5f5",
          padding: "16px",
          marginTop: "24px",
        }}
      >
        {finalLyrics}
      </pre>

      <button
        style={{ marginTop: "24px" }}
        onClick={handleApprove}
      >
        Aprovar letra
      </button>
    </div>
  );
}
