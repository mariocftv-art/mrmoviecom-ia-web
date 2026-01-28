"use client";

export default function DashboardAdvancedPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 600 }}>
        Dashboard Avançado – MRMoviecom
      </h1>

      <p style={{ marginTop: 12, color: "#666" }}>
        Modo estrutural (mock). Runtime e integrações serão ativadas no PC
        definitivo.
      </p>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        <div style={card}>Core: 100%</div>
        <div style={card}>IA V2: Stable</div>
        <div style={card}>Backend: Local</div>
        <div style={card}>Dashboard: Mock</div>
      </div>

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 20 }}>Console IA</h2>
        <div style={consoleBox}>
          <p><strong>SYSTEM:</strong> IA pronta para execução.</p>
          <p><strong>ASSISTANT:</strong> Aguardando comandos…</p>
        </div>
      </div>
    </div>
  );
}

const card: React.CSSProperties = {
  padding: 16,
  borderRadius: 8,
  border: "1px solid #ddd",
  background: "#fafafa",
  textAlign: "center",
  fontWeight: 500,
};

const consoleBox: React.CSSProperties = {
  marginTop: 12,
  padding: 16,
  borderRadius: 8,
  background: "#111",
  color: "#0f0",
  fontFamily: "monospace",
};
