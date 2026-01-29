"use client";

import { useEffect, useState } from "react";

export default function AIConsole() {
  const [open, setOpen] = useState<boolean>(true);

  // 🔹 Carrega estado salvo
  useEffect(() => {
    const saved = localStorage.getItem("ai_console_open");
    if (saved !== null) {
      setOpen(saved === "true");
    }
  }, []);

  // 🔹 Salva estado
  useEffect(() => {
    localStorage.setItem("ai_console_open", String(open));
  }, [open]);

  return (
    <div
      className={`relative h-full transition-all duration-300 ${
        open ? "w-[360px]" : "w-[48px]"
      }`}
    >
      {/* BOTÃO TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-4 -left-4 z-20 h-8 w-8 rounded-full bg-black border border-white/10 text-xs text-white hover:bg-white/10"
        title={open ? "Fechar IA" : "Abrir IA"}
      >
        {open ? "→" : "←"}
      </button>

      {/* CONTEÚDO */}
      {open && (
        <div className="h-full glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-2">AI Console</h3>

          <div className="bg-black/40 rounded-xl p-4 text-sm text-zinc-300">
            <p className="text-zinc-400">IA pronta para interação.</p>
            <p className="mt-2 italic text-zinc-500">
              (em breve: chat em tempo real)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
