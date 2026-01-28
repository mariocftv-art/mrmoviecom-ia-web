"use client";

import React from "react";

export default function AIConsole() {
  return (
    <div className="glass p-6 rounded-2xl">
      <h3 className="text-lg font-semibold mb-2">AI Console</h3>

      <div className="bg-black/40 rounded-xl p-4 text-sm text-zinc-300">
        <p className="text-zinc-400">
          IA pronta para interação.
        </p>
        <p className="mt-2 italic text-zinc-500">
          (em breve: chat em tempo real)
        </p>
      </div>
    </div>
  );
}
