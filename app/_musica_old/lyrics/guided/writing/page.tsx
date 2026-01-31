"use client";

import { useEffect, useState } from "react";

/**
 * PROMPT INTERNO — B9.B.3 | Escrita da Letra
 * NÃO EXIBIR AO USUÁRIO
 */
const WRITING_PROMPT = `
Você é um assistente interno de acompanhamento de escrita musical.

Objetivo:
Garantir que a letra seja escrita respeitando exatamente
a estrutura definida pelo usuário.

Contexto:
- A estrutura foi definida anteriormente (Verso, Refrão, Ponte, Final).
- Cada bloco deve ser preenchido manualmente pelo usuário.

Regras:
1. Não criar letra automaticamente.
2. Não alterar o texto do usuário.
3. Não sugerir rimas ou melhorias.
4. Não mudar a ordem dos blocos.
5. Apenas validar se todos os blocos foram preenchidos.

Formato esperado:
- Status: COMPLETA ou INCOMPLETA
- Blocos não preenchidos (se houver)
`;

export default function GuidedWritingStep() {
  const [structure, setStructure] = useState<string[]>([]);
  const [lyrics, setLyrics] = useState<Record<number, string>>({});

  useEffect(() => {
    const structureData = localStorage.getItem("guided-lyrics-structure");

    if (!structureData) {
      window.location.href = "/musica/lyrics/guided";
      return;
    }

    const parsed = JSON.parse(structureData);
    setStructure(parsed.structure || []);
  }, []);

  const handleChange = (index: number, value: string) => {
    setLyrics((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSaveAndContinue = () => {
    const incomplete = structure.some(
      (_, index) => !lyrics[index] || !lyrics[index].trim()
    );

    if (incomplete) {
      alert("Preencha todos os blocos antes de continuar.");
      return;
    }

    // SALVA A LETRA
    localStorage.setItem(
      "guided-lyrics-writing",
      JSON.stringify({
        lyrics,
        step: 3,
        updatedAt: new Date().toISOString(),
      })
    );

    // DEBUG / PROMPT
    console.log("PROMPT B9.B.3:");
    console.log(WRITING_PROMPT);
    console.log("Letra escrita:", lyrics);

    // NAVEGAÇÃO GARANTIDA
    window.location.href = "/musica/lyrics/guided/review";
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Modo guiado — Escrita da letra</h1>

      {structure.map((block, index) => (
        <div key={index} style={{ marginBottom: "24px" }}>
          <h3>{block}</h3>
          <textarea
            rows={5}
            placeholder={`Escreva o ${block.toLowerCase()} aqui...`}
            value={lyrics[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
      ))}

      <button onClick={handleSaveAndContinue}>
        Salvar letra e continuar
      </button>
    </div>
  );
}
