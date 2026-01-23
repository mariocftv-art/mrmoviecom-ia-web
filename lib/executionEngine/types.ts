export type ExecutionStatus = "ok" | "error"

export interface Phase {
  id: number
  name: string
  execute: () => Promise<any>
}

export interface ExecutionPlan {
  id: string
  name: string
  phases: Phase[]
}

export interface ExecutionResult {
  status: ExecutionStatus
  phase: number
  output: any
  logs: string[]
}
