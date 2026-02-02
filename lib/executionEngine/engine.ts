import { ExecutionPlan, ExecutionResult } from "./types"
import { Logger } from "./logger"

export class ExecutionEngine {
  private plan: ExecutionPlan
  private logger: Logger

  constructor(plan: ExecutionPlan) {
    this.plan = plan
    this.logger = new Logger()
  }

  async run(): Promise<ExecutionResult> {
    this.logger.clear()
    this.logger.log("Execution started")

    if (!this.plan) {
      this.logger.error("ExecutionPlan not provided")
      return {
        status: "error",
        phase: -1,
        output: null,
        logs: this.logger.getLogs()
      }
    }

    if (!this.plan.phases || this.plan.phases.length === 0) {
      this.logger.error("ExecutionPlan has no phases")
      return {
        status: "error",
        phase: -1,
        output: null,
        logs: this.logger.getLogs()
      }
    }

    const outputs: any[] = []
    let lastPhaseId = -1

    for (const phase of this.plan.phases) {
      try {
        this.logger.log(`Starting phase ${phase.id}: ${phase.name}`)

        const output = await phase.execute()
        outputs.push(output)
        lastPhaseId = phase.id

        this.logger.log(`Finished phase ${phase.id}`)
      } catch (err) {
        this.logger.error(`Error in phase ${phase.id}`)

        return {
          status: "error",
          phase: phase.id,
          output: err,
          logs: this.logger.getLogs()
        }
      }
    }

    return {
      status: "ok",
      phase: lastPhaseId,
      output: outputs,
      logs: this.logger.getLogs()
    }
  }
}
import { pushStream } from "@/app/api/ai/stream/route";

export function streamThought(text: string) {
  pushStream(text);
}