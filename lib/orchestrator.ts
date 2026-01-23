import { ExecutionEngine } from "@/lib/executionEngine"
import { ContextManager } from "@/lib/projectContext"
import { ExecutionPlan } from "@/lib/executionEngine"

interface OrchestratorInput {
  projectId: string
  projectName: string
  userInput: string
}

export class Orchestrator {
  async run(input: OrchestratorInput) {
    // 1) Criar contexto do projeto
    const context = new ContextManager(input.projectId, input.projectName)
    context.setCurrentPhase("created")

    // 2) Criar plano de execução (fluxo completo)
    const plan: ExecutionPlan = {
      id: "full-flow-plan",
      name: "Full Flow Execution",
      phases: [
        {
          id: 1,
          name: "Interpret user input",
          execute: async () => {
            context.setCurrentPhase("interpreting")
            return { interpreted: input.userInput }
          }
        },
        {
          id: 2,
          name: "Process decision",
          execute: async () => {
            context.setCurrentPhase("processing")
            return { decision: "approved" }
          }
        },
        {
          id: 3,
          name: "Finalize project",
          execute: async () => {
            context.setCurrentPhase("finalizing")
            context.setFinalDecision("Project completed successfully")
            return { finished: true }
          }
        }
      ]
    }

    // 3) Executar plano
    const engine = new ExecutionEngine(plan)
    const result = await engine.run()

    // 4) Encerrar corretamente
    context.setCurrentPhase("closed")

    return {
      execution: result,
      context: context.getContext()
    }
  }
}
