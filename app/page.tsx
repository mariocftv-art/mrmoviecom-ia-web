"use client"

import { useState } from "react"
import { runAdminAction } from "./actions"

export default function AdminPage() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  async function handleRun() {
    setLoading(true)
    setResult(null)

    const res = await runAdminAction(input)
    setResult(res)

    setLoading(false)
  }

  return (
    <div style={{ padding: 24, maxWidth: 800 }}>
      <h1>Painel Admin — MRMoviecom IA</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Descreva o que deseja executar"
        rows={6}
        style={{ width: "100%", marginTop: 12 }}
      />

      <button
        onClick={handleRun}
        disabled={loading}
        style={{ marginTop: 12 }}
      >
        {loading ? "Executando..." : "Executar"}
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Status: {result.status}</h3>
          <p>Fase atual: {result.phase}</p>

          <pre style={{ background: "#111", color: "#0f0", padding: 12 }}>
            {JSON.stringify(result.output, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
