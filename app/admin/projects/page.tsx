import { listAllProjects } from '@/lib/projects'
import { unlockProject } from './actions'

export default async function AdminProjectsPage() {
  const projects = await listAllProjects()
  const lockedProjects = projects.filter(p => p.is_locked)

  return (
    <div style={{ padding: 24 }}>
      <h1>Administração • Projetos</h1>

      {lockedProjects.length === 0 ? (
        <p>Nenhum projeto travado.</p>
      ) : (
        <div style={{ marginTop: 16 }}>
          {lockedProjects.map(project => (
            <div
              key={project.id}
              style={{
                border: '1px solid #ccc',
                padding: 16,
                marginBottom: 12,
                borderRadius: 6,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <strong>{project.name}</strong>
                <p>Progresso: {project.progress}%</p>
                <p style={{ color: 'red', fontWeight: 'bold' }}>
                  🔒 Projeto travado
                </p>
              </div>

              <form action={unlockProject}>
                <input type="hidden" name="projectId" value={project.id} />
                <button
                  type="submit"
                  style={{
                    padding: '8px 14px',
                    backgroundColor: 'green',
                    color: 'white',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                  }}
                >
                  Desbloquear
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
