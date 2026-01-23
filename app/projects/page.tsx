export default function ProjectsPage() {
  const projects = [
    {
      id: "p1",
      name: "Vídeo institucional imobiliária",
      status: "ok",
      phase: "closed",
    },
    {
      id: "p2",
      name: "Projeto importado do Lovable",
      status: "ok",
      phase: "execution",
    },
  ]

  return (
    <div style={{ maxWidth: 900 }}>
      <h1>Projetos</h1>
      <p style={{ opacity: 0.7 }}>
        Acompanhe e retome seus projetos
      </p>

      <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              padding: 16,
              borderRadius: 12,
              background: "#111",
              border: "1px solid #222",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{project.name}</strong>
              <div style={{ fontSize: 14, opacity: 0.7, marginTop: 4 }}>
                Fase: {project.phase}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background:
                    project.status === "ok" ? "#22c55e" : "#ef4444",
                }}
              />
              <span style={{ color: "#7c7cff", fontSize: 14 }}>
                Abrir →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
