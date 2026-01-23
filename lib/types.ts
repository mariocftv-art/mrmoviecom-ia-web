export interface ExternalProject {
  source: "lovable" | "base44" | "other"
  projectId: string
  name: string
  progressPercent: number
  data?: any
}

export interface ImportResult {
  detectedPhase: string
  resumed: boolean
}
