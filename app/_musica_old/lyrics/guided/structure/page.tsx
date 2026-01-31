"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * PROMPT INTERNO — B9.B.2 | Estrutura da Música
 * NÃO EXIBIR AO USUÁRIO
 */
const STRUCTURE_PROMPT = `
Você é um assistente interno de validação musical.

Objetivo:
Validar a estrutura de uma música criada em modo guiado.

Regras:
1. Deve conter pelo menos 1 Verso e 1 Refrão.
2. Ponte é opcional.
3. Não criar letra.
4. Não alterar estrutura.
`;

export default function GuidedStructureStep() {
  const [structure, setStructure] = useState<string[]>([]);

  useEffect(() => {
    const idea = localStorage.getItem("guided-lyrics-idea");
    if (!idea) {
      window.location.href = "/musica/lyrics/guided";
    }
  }, []);

  const addBlock = (block: string) => {
    setStructure((prev) => [...prev, block]);
  };

  const removeBlock = (index: number) => {
    setStructure((prev) => prev.filter((_, i) => i !== index));
  };

  const canContinue =
    structure.includes("Verso") && structure.includes("Refrão");

  const handleSave = () => {
    localStorage.setItem(
      "guided-lyrics-structure",
      JSON.stringify({
        structure,
        step: 2,
        updatedAt: new Date().toISOString(),
      })
    );

    console.log("PROMPT B9.B.2:");
    console.log(STRUCTURE_PROMPT);
    console.log("Estrutura:", structure);
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Modo guiado — Estrutura da música</h1>

      <p>Monte a ordem das partes da sua música.</p>

      <div style={{ marginTop: "24px", display: "flex", gap: "8px" }}>
        <button onClick={() => addBlock("Verso")}>+ Verso</button>
        <button onClick={() => addBlock("Refrão")}>+ Refrão</button>
        <button onClick={() => addBlock("Ponte")}>+ Ponte</button>
        <button onClick={() => addBlock("Final")}>+ Final</button>
      </div>

      <ul style={{ marginTop: "24px" }}>
        {structure.map((block, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {block}{" "}
            <button onClick={() => removeBlock(index)}>
              remover
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "24px" }}>
        <button onClick={handleSave} disabled={!canContinue}>
          Salvar estrutura
        </button>

        {canContinue && (
          <Link href="/musica/lyrics/guided/writing">
            <button style={{ marginLeft: "12px" }}>
              Continuar
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
