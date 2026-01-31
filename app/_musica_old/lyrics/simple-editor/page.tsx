"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SimpleLyricEditor() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [saved, setSaved] = useState(false);

  // Carregar rascunho salvo
  useEffect(() => {
    const savedData = localStorage.getItem("simple-lyric-draft");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setTitle(parsed.title || "");
      setLyrics(parsed.lyrics || "");
    }
  }, []);

  // Salvar rascunho
  const saveDraft = () => {
    if (!lyrics.trim()) return;

    const data = {
      title,
      lyrics,
      status: "rascunho",
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem("simple-lyric-draft", JSON.stringify(data));
    setSaved(true);
  };

  const handleSave = () => {
    if (!lyrics.trim()) {
      alert("Escreva a letra antes de salvar.");
      return;
    }
    saveDraft();
  };

  const handleContinueLater = () => {
    saveDraft();
    router.push("/musica");
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto" }}>
      <h1>Editor simples de letra</h1>

      <input
        type="text"
        placeholder="Título da música (opcional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "16px",
          fontSize: "16px",
        }}
      />

      <textarea
        placeholder="Escreva sua letra aqui..."
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
        rows={15}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
        <button onClick={handleSave}>
          Salvar rascunho
        </button>

        <button onClick={handleContinueLater}>
          Continuar depois
        </button>
      </div>

      {saved && (
        <p style={{ marginTop: "8px", color: "green" }}>
          Rascunho salvo com sucesso.
        </p>
      )}
    </div>
  );
}
