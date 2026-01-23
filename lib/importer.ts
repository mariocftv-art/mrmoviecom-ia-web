import { ExternalProject, ImportResult } from "./types"
import { ContextManager } from "@/lib/projectContext"
import { Orchestrator } from "@/lib/orchestrator"

export class ProjectImporter {
  async import(project: ExternalProject): Promise<ImportResult> {
    // 1) Criar contexto do projeto importado
    const context = new ContextManager(project.projectId, project.name)
    context.addEvent(`Project imported from ${project.source}`)

    // 2) Detectar fase baseada no progresso
    let detectedPhase = "init"

    if (project.progressPercent >= 0 && project.progressPercent < 30) {
      detectedPhase = "planning"
    } else if (project.progressPercent >= 30 && project.progressPercent < 70) {
      detectedPhase = "execution"
    } else if (project.progressPercent >= 70) {
      detectedPhase = "finalization"
    }

    context.setCurrentPhase(detectedPhase)

    // 3) Continuar execução (simples, controlada)
    const orchestrator = new Orchestrator()
    await orchestrator.run({
      projectId: project.projectId,
      projectName: project.name,
      userInput: "Resume imported project"
    })

    // 4) Auditoria final
    context.addEvent("Imported project execution resumed inside MRMoviecom")

    return {
      detectedPhase,
      resumed: true
    }
  }
}
