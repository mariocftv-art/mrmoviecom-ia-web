"use client";

import { useEffect, useState } from "react";

/**
 * PROMPT INTERNO — B10 | Aprovação Final da Letra
 * NÃO EXIBIR AO USUÁRIO
 */
const APPROVAL_PROMPT = `
Você é um assistente interno de validação final de letra musical.

Objetivo:
Confirmar que a letra foi aprovada definitivamente
e liberada para geração de música por IA.

Regras:
1. Não alterar o texto da letra.
2. Não sugerir melhorias.
3. Marcar a letra como FINAL.
4. Bloquear edição.
5. Liberar para o módulo B11 — Música IA.

Saída esperada:
- Status: APROVADA
- Próximo passo: GERAÇÃO DE MÚSICA IA
`;

export default function LyricsApprovalPage() {
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    const finalData = localStorage.getItem("guided-lyrics-final");

    if (!finalData) {
      window.location.href = "/musica/lyrics/guided";
      return;
    }

    const parsed = JSON.parse(finalData);
    setLyrics(parsed.lyrics || "");
  }, []);

  const handleConfirm = () => {
    // SALVA ESTADO FINAL
    localStorage.setItem(
      "lyrics-approved",
      JSON.stringify({
        lyrics,
        approved: true,
        step: 10,
        approvedAt: new Date().toISOString(),
      })
    );

    // DEBUG / PROMPT
    console.log("PROMPT B10:");
    console.log(APPROVAL_PROMPT);
    console.log("LETRA FINAL APROVADA:", lyrics);

    alert("Letra aprovada definitivamente. Indo para Música IA.");

    // 👉 AVANÇA PARA B11
    window.location.href = "/musica/ia";
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Aprovação final da letra</h1>

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

      <button
        style={{ marginTop: "24px" }}
        onClick={handleConfirm}
      >
        Confirmar aprovação
      </button>
    </div>
  );
}
