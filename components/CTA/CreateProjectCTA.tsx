"use client";

import React from "react";

export default function CreateProjectCTA() {
  return (
    <section className="glass p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 gradient-text">
          Crie um novo projeto com IA
        </h2>
        <p className="text-zinc-300 max-w-xl">
          Inicie um novo projeto, conecte agentes inteligentes e acompanhe tudo
          em tempo real dentro da MRMoviecom IA Platform.
        </p>
      </div>

      <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 text-black hover:scale-105 transition-transform">
        + Create New Project
      </button>
    </section>
  );
}
