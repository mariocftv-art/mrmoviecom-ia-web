import { ProjectContext, ProjectEvent } from "./types"

export class ContextManager {
  private context: ProjectContext

  constructor(projectId: string, projectName: string) {
    this.context = {
      projectId,
      projectName,
      currentPhase: "init",
      history: []
    }

    this.addEvent("Project context initialized")
  }

  private createEvent(message: string): ProjectEvent {
    return {
      message,
      timestamp: new Date().toISOString()
    }
  }

  addEvent(message: string) {
    this.context.history.push(this.createEvent(message))
  }

  setCurrentPhase(phase: string) {
    this.context.currentPhase = phase
    this.addEvent(`Current phase set to: ${phase}`)
  }

  setFinalDecision(decision: string) {
    this.context.finalDecision = decision
    this.addEvent(`Final decision registered`)
  }

  getContext(): ProjectContext {
    return this.context
  }
}
