"use client";

import Link from "next/link";

export default function LyricsHome() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto" }}>
      <h1>Letra da Música</h1>

      <p>Escolha como você quer criar sua letra:</p>

      <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
        <Link href="/musica/lyrics/simple-editor">
          <button>Modo simples</button>
        </Link>

        <Link href="/musica/lyrics/guided">
          <button>Modo guiado</button>
        </Link>
      </div>
    </div>
  );
}
