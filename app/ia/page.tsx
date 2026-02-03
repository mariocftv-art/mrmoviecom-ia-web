"use client";

import { useState } from "react";

type Message = {
  role: "user" | "system";
  content: string;
};

export default function IACentralPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        "Command, use o contexto do Vision e execute: Definir arquitetura base da MRMoviecom · Registrar módulos principais · Preparar roadmap técnico inicial",
    },
  ]);
  const [loading, setLoading] = useState(false);

  function addMessage(role: Message["role"], content: string) {
    setMessages((prev) => [...prev, { role, content }]);
  }

  async function handleSend() {
    if (!input.trim() || loading) return;

    const command = input.trim();
    setInput("");
    setLoading(true);

    // mostra o que o usuário digitou
    addMessage("user", command);

    try {
      const res = await fetch("/api/command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: command,
        }),
      });

      const data = await res.json();

      // MOSTRA A RESPOSTA REAL DO COMMAND
      if (data?.output) {
        addMessage("system", data.output);
      } else {
        addMessage(
          "system",
          "⚠️ Command executado, mas não retornou output."
        );
      }
    } catch (err) {
      addMessage(
        "system",
        "❌ Erro ao executar o Command. Verifique o backend."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>IA Central</h1>

      <div style={{ marginTop: 16, marginBottom: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <strong>{msg.role === "user" ? "🧠 Você" : "⚙️ Command"}:</strong>
            <pre style={{ whiteSpace: "pre-wrap", marginTop: 4 }}>
              {msg.content}
            </pre>
          </div>
        ))}
      </div>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite um comando..."
          style={{ width: 300, marginRight: 8 }}
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? "Executando..." : "Enviar"}
        </button>
      </div>
    </main>
  );
}
