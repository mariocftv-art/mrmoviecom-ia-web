"use client"

import { useState } from "react"

export default function CreateVideoPage() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  async function handleRun() {
    setLoading(true)
    setResult(null)

    const res = await fetch("/admin/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    })

    const data = await res.json()
    setResult(data)

    setLoading(false)
  }

  return (
    <div style={{ maxWidth: 720 }}>
      {/* Título */}
      <h1>Criar Vídeo com IA</h1>
      <p style={{ opacity: 0.7 }}>
        Descreva o vídeo que você deseja criar
      </p>

      {/* Input */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ex: Vídeo institucional para imobiliária, 30 segundos"
        rows={6}
        style={{
          width: "100%",
          marginTop: 16,
          padding: 12,
          borderRadius: 8,
        }}
      />

      {/* Botão */}
      <button
        onClick={handleRun}
        disabled={loading}
        style={{
          marginTop: 16,
          padding: "10px 18px",
          borderRadius: 8,
          background: "#4f46e5",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Executando..." : "Executar"}
      </button>

      {/* STATUS VISUAL */}
      {result && (
        <div
          style={{
            marginTop: 32,
            padding: 20,
            borderRadius: 12,
            background: "#111",
            border: "1px solid #222",
          }}
        >
          {/* Status */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background:
                  result.execution?.status === "ok" ? "#22c55e" : "#ef4444",
              }}
            />
            <strong>
              Status: {result.execution?.status?.toUpperCase()}
            </strong>
          </div>

          {/* Fase */}
          <p style={{ opacity: 0.8 }}>
            <strong>Fase atual:</strong>{" "}
            {result.context?.currentPhase ?? "—"}
          </p>

          {/* Resumo */}
          <div style={{ marginTop: 12 }}>
            <strong>Resumo do pedido:</strong>
            <div
              style={{
                marginTop: 8,
                padding: 12,
                borderRadius: 8,
                background: "#181818",
                fontSize: 14,
                opacity: 0.9,
              }}
            >
              {input}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
