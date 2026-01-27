// lib/core/orchestrator/orchestrator.ts

import { routeGoal, GoalDecision } from "./goal_router/goalRouter";
import { createPlan, PlanStep } from "./planner_htn/plannerHTN";
import { executeSafely } from "./executor/executor.safe";
import { validateExecution } from "./validator/validator";
import { shouldStop } from "./stopper/stopper";
import { observe } from "./observer/observer";

import { checkGovernance } from "./governance/governance.policy";
import {
  activateKillSwitch,
  isKillSwitchActive,
} from "./governance/killswitch.global";

import {
  createSession,
  writeSession,
} from "./memory/memory.session";
import { createTask, logTask } from "./memory/memory.task";
import { logEvent } from "./memory/memory.log";

export type OrchestratorState =
  | "idle"
  | "planning"
  | "executing"
  | "completed"
  | "halted";

export interface OrchestratorContext {
  goal: string;
  state: OrchestratorState;
  steps: PlanStep[];
  currentStep: number;
  confidence?: number;
  sessionId: string;
  taskId: string;
}

export class Orchestrator {
  private context: OrchestratorContext;

  constructor(goal: string) {
    const sessionId = `session_${Date.now()}`;
    const taskId = `task_${Date.now()}`;

    createSession(sessionId);
    createTask(taskId);

    this.context = {
      goal,
      state: "idle",
      steps: [],
      currentStep: 0,
      sessionId,
      taskId,
    };
  }

  public async start(): Promise<void> {
    if (isKillSwitchActive()) {
      console.error("[ORCHESTRATOR] Kill switch ativo");
      return;
    }

    this.context.state = "planning";
    logEvent("Orchestrator iniciado");

    const decision: GoalDecision = routeGoal(this.context.goal);
    this.context.confidence = decision.confidence;

    writeSession(this.context.sessionId, "decision", decision);
    logTask(this.context.taskId, "Goal roteado");

    const plan = createPlan(decision);
    this.context.steps = plan.steps;

    observe(this.context);

    const governance = checkGovernance(
      this.context.confidence,
      this.context.steps.filter(s => s.risk === "high").length
    );

    if (!governance.allowed) {
      activateKillSwitch(governance.reason);
      this.halt(governance.reason ?? "Governança bloqueou execução");
      return;
    }

    this.context.state = "executing";
    await this.executeSteps();
  }

  private async executeSteps(): Promise<void> {
    while (this.context.currentStep < this.context.steps.length) {
      if (isKillSwitchActive()) {
        this.halt("Kill switch acionado durante execução");
        return;
      }

      observe(this.context);

      const stopCheck = shouldStop(
        this.context.steps,
        this.context.currentStep
      );

      if (stopCheck.stop) {
        this.halt(stopCheck.reason ?? "Execução interrompida");
        return;
      }

      const step = this.context.steps[this.context.currentStep];
      logTask(this.context.taskId, `Executando passo ${step.id}`);
      logEvent(`Exec step ${step.id}`);

      const result = await executeSafely(step);

      if (!result.success) {
        activateKillSwitch(result.error);
        this.halt(result.error ?? "Falha execução");
        return;
      }

      this.context.currentStep++;
    }

    this.complete();
  }

  private complete(): void {
    const result = validateExecution(
      this.context.steps,
      this.context.confidence
    );

    if (!result.approved) {
      activateKillSwitch(result.reason);
      this.halt(result.reason ?? "Validação falhou");
      return;
    }

    this.context.state = "completed";
    logEvent("Execução concluída");
    observe(this.context);
    console.log("[ORCHESTRATOR] GOVERNANÇA OK — CORE FECHADO");
  }

  public halt(reason: string): void {
    this.context.state = "halted";
    logEvent(`HALT: ${reason}`);
    observe(this.context);
  }

  public getContext(): OrchestratorContext {
    return this.context;
  }
}
