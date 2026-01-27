// lib/core/orchestrator/governance/killswitch.global.ts

let KILL_SWITCH = false;

export function activateKillSwitch(reason?: string): void {
  KILL_SWITCH = true;
  console.error("[KILL SWITCH ATIVADO]", reason);
}

export function deactivateKillSwitch(): void {
  KILL_SWITCH = false;
}

export function isKillSwitchActive(): boolean {
  return KILL_SWITCH;
}
