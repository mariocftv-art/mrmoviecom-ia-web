"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MusicaHome() {
  const [draft, setDraft] = useState<null | {
    title: string;
    lyrics: string;
    updatedAt: string;
  }>(null);

  useEffect(() => {
    const saved = localStorage.getItem("simple-lyric-draft");
    if (saved) {
      setDraft(JSON.parse(saved));
    }
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>Música IA</h1>

      {!draft && (
        <p>Nenhuma letra em rascunho no momento.</p>
      )}

      {draft && (
        <div
          style={{
            marginTop: "24px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h3>Rascunho salvo</h3>

          <p>
            <strong>Título:</strong>{" "}
            {draft.title || "Sem título"}
          </p>

          <p>
            <strong>Última edição:</strong>{" "}
            {new Date(draft.updatedAt).toLocaleString()}
          </p>

          {/* LINK DIRETO (NÃO FALHA) */}
          <Link href="/musica/lyrics/simple-editor">
            <button style={{ marginTop: "12px" }}>
              Continuar editando
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
