"use client";

export default function TemplateSelectorPage() {
  const handleSelect = (template: string) => {
    localStorage.setItem("ui-template", template);
    alert(`Template ${template.toUpperCase()} selecionado`);
    window.location.reload();
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      <h1>Escolha o template visual</h1>
      <p>Isso muda apenas o visual. A lógica continua igual.</p>

      <div className="box">
        <button onClick={() => handleSelect("a")}>
          Template A — Clean / Profissional
        </button>
      </div>

      <div className="box">
        <button onClick={() => handleSelect("b")}>
          Template B — Futurista / Neon
        </button>
      </div>

      <div className="box">
        <button onClick={() => handleSelect("c")}>
          Template C — Emocional / Música & Amor
        </button>
      </div>

      <div className="box">
        <button onClick={() => handleSelect("d")}>
          Template D — Cinema / Vídeo IA
        </button>
      </div>

      <div className="box">
        <button onClick={() => handleSelect("e")}>
          Template E — Karaokê / Performance
        </button>
      </div>
    </div>
  );
}
