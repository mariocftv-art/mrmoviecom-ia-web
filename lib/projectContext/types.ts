export interface ProjectEvent {
  message: string
  timestamp: string
}

export interface ProjectContext {
  projectId: string
  projectName: string
  currentPhase: string
  history: ProjectEvent[]
  finalDecision?: string
}
