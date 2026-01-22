import { listProjectsByUser } from '@/lib/projects'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function ProjectsPage() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return <p>Você precisa estar logado.</p>
  }

  const projects = await listProjectsByUser(user.id)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Meus Projetos</h1>

      {projects.length === 0 ? (
        <p>Nenhum projeto encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="border rounded p-4">
              <strong>{project.name}</strong>
              <p>Progresso: {project.progress}%</p>

              {project.is_locked && (
                <span className="text-red-600 font-semibold">
                  Projeto travado
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
