export default function ProjectsPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Projetos</h1>
      <p>Acompanhe e retome seus projetos</p>

      <div style={{ marginTop: 24 }}>
        <div
          style={{
            background: "#111",
            borderRadius: 12,
            padding: 20,
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Projeto de exemplo</span>
          <span style={{ color: "#22c55e" }}>Abrir →</span>
        </div>
      </div>
    </main>
  )
}
