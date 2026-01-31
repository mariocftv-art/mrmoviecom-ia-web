"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GuidedIdeaStep() {
  const router = useRouter();

  const [theme, setTheme] = useState("");
  const [mood, setMood] = useState("");
  const [style, setStyle] = useState("");

  const handleNext = () => {
    if (!theme || !mood || !style) {
      alert("Preencha todos os campos para continuar.");
      return;
    }

    const ideaData = {
      theme,
      mood,
      style,
      step: 1,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "guided-lyrics-idea",
      JSON.stringify(ideaData)
    );

    // Avança para o próximo passo
    router.push("/musica/lyrics/guided/structure");
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto" }}>
      <h1>Modo guiado — Ideia da música</h1>

      <p>Vamos começar com o básico.</p>

      <div style={{ marginTop: "24px" }}>
        <label>Tema da música</label>
        <input
          type="text"
          placeholder="Ex: amor, superação, fé..."
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
        />

        <label>Clima emocional</label>
        <input
          type="text"
          placeholder="Ex: feliz, triste, motivador..."
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
        />

        <label>Estilo musical</label>
        <input
          type="text"
          placeholder="Ex: gospel, sertanejo, rap..."
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "24px" }}
        />

        <button onClick={handleNext}>
          Salvar ideia e continuar
        </button>
      </div>
    </div>
  );
}
