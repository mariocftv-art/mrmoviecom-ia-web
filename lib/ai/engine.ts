// lib/ai/engine.ts
import { setIAStatus, IAStatusState } from "./aiStatus";

/**
 * Engine central da IA (mock controlado)
 * - Não usa React
 * - Não toca UI
 * - Apenas controla estado
 */

let engineRunning = false;

export function startEngine() {
  if (engineRunning) return;
  engineRunning = true;

  // IA inicia online
  setIAStatus("online");

  // Simulação de ciclo de trabalho
  setTimeout(() => {
    setIAStatus("busy");
  }, 3000);

  setTimeout(() => {
    setIAStatus("online");
  }, 7000);
}

export function stopEngine() {
  engineRunning = false;
  setIAStatus("offline");
}

export function forceStatus(state: IAStatusState) {
  setIAStatus(state);
}
