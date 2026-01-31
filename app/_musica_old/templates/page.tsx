"use client";

export default function TemplatesPage() {
  function setTheme(theme: string) {
    document.body.setAttribute("data-theme", theme);
    alert(`Template ${theme.toUpperCase()} selecionado`);
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Escolha o template visual</h1>
      <p>Isso muda apenas o visual. A lógica continua igual.</p>

      <div className="box">
        <button onClick={() => setTheme("a")}>
          Template A — Clean / Profissional
        </button>
      </div>

      <div className="box">
        <button onClick={() => setTheme("b")}>
          Template B — Futurista / Neon
        </button>
      </div>

      <div className="box">
        <button onClick={() => setTheme("c")}>
          Template C — Emocional / Música & Amor
        </button>
      </div>

      <div className="box">
        <button onClick={() => setTheme("d")}>
          Template D — Cinema / Vídeo IA
        </button>
      </div>

      <div className="box">
        <button onClick={() => setTheme("e")}>
          Template E — Karaokê / Performance
        </button>
      </div>
    </div>
  );
}
