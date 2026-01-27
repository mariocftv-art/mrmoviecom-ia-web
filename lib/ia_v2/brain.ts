import { iaV2 } from "./index";

export async function runIAV2Loop(goal: string, cycles = 1) {
  let result = "";

  for (let i = 0; i < cycles; i++) {
    console.log(`[IA V2] Ciclo ${i + 1} iniciado`);
    result = await iaV2.run(goal);
    console.log(`[IA V2] Resultado:`, result);
  }

  return result;
}
