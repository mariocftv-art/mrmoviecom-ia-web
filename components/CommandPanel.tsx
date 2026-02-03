"use client";

import { useState } from "react";

export default function CommandPanel() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendCommand = async () => {
    if (!command.trim()) return;

    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/command", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: command,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setOutput(data.output);
      } else {
        setOutput("Erro: " + data.error);
      }
    } catch (err) {
      setOutput("Erro ao conectar com a IA Central.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>IA Central</h2>

      <textarea
        placeholder="Digite um comando para a IA Central..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button onClick={sendCommand} disabled={loading}>
        {loading ? "Executando..." : "Enviar"}
      </button>

      {output && (
        <pre
          style={{
            marginTop: 16,
            padding: 12,
            background: "#111",
            color: "#0f0",
            whiteSpace: "pre-wrap",
          }}
        >
          {output}
        </pre>
      )}
    </div>
  );
}
