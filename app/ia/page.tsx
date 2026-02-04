"use client";

import { useState } from "react";

export default function IAPage() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  function handleSubmit() {
    if (!command.trim()) return;
    setResponse("IA Central decidiu usar IA Vision.");
  }

  return (
    <main style={{ minHeight: "100vh", padding: "60px", color: "#fff" }}>
      {/* TÍTULO */}
      <h1
        style={{
          fontSize: "52px",
          fontWeight: 900,
          color: "#00f0ff",
          textShadow: "0 0 25px rgba(0,240,255,.7)",
          marginBottom: 12,
        }}
      >
        IA CENTRAL
      </h1>

      <p style={{ opacity: 0.85, marginBottom: 28 }}>
        Execute ações usando o contexto da Vision. A IA Central decide,
        orquestra e responde.
      </p>

      {/* INPUT */}
      <div style={{ display: "flex", gap: 14, marginBottom: 32 }}>
        <input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="analisar layout da MRMoviecom"
          style={{
            width: 460,
            height: 52,
            padding: "0 18px",
            borderRadius: 12,
            background: "rgba(0,0,0,.55)",
            border: "1px solid rgba(0,240,255,.4)",
            color: "#fff",
          }}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>

      {/* RESPOSTA */}
      {response && (
        <div
          style={{
            maxWidth: 520,
            marginBottom: 40,
            padding: 20,
            borderRadius: 14,
            background: "rgba(0,0,0,.6)",
            border: "1px solid rgba(0,240,255,.3)",
          }}
        >
          <strong>Resposta:</strong>
          <p style={{ marginTop: 8 }}>{response}</p>
        </div>
      )}

      {/* ================= GRID CENTRAL ================= */}
      <section>
        <h2
          style={{
            fontSize: 28,
            marginBottom: 20,
            color: "#00f0ff",
          }}
        >
          Módulos IA
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              title: "IA Vision",
              desc: "Analisa layouts, imagens e estruturas",
            },
            {
              title: "Orquestrador",
              desc: "Decide qual IA executar",
            },
            {
              title: "Loja IA",
              desc: "Módulos inteligentes sob demanda",
            },
            {
              title: "Automações",
              desc: "Execução automática de ações",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: 24,
                borderRadius: 18,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,.35))",
                border: "1px solid rgba(0,240,255,.25)",
                boxShadow: "0 0 20px rgba(0,240,255,.15)",
              }}
            >
              <h3
                style={{
                  color: "#00f0ff",
                  marginBottom: 10,
                  fontSize: 20,
                }}
              >
                {item.title}
              </h3>
              <p style={{ opacity: 0.85 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
