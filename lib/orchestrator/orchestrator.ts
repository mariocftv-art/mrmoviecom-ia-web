// lib/orchestrator/orchestrator.ts

import { faseB15 } from "./phases/B15";
import { faseB16 } from "./phases/B16";
import { faseB17 } from "./phases/B17";
import { faseB18 } from "./phases/B18";
import { faseB19 } from "./phases/B19";

export type OrchestratorResult = {
  status: string; // <- AQUI ESTÁ A CORREÇÃO
  faseAtual?: string;
  mensagem?: string;
  proximoPasso?: string;
  dados?: any;
};

export async function runOrchestrator(
  comando: string
): Promise<OrchestratorResult> {
  const upper = comando.toUpperCase();

  try {
    if (upper.includes("B15")) return await faseB15(comando);
    if (upper.includes("B16")) return await faseB16(comando);
    if (upper.includes("B17")) return await faseB17(comando);
    if (upper.includes("B18")) return await faseB18(comando);
    if (upper.includes("B19")) return await faseB19(comando);

    if (upper.includes("B20")) {
      return {
        status: "ok",
        faseAtual: "B20",
        mensagem:
          "IA ativa em modo Autonomia Guiada. Pronta para analisar e sugerir ações.",
        proximoPasso:
          "Descreva o que deseja analisar ou solicite próximos passos técnicos."
      };
    }

    return {
      status: "ok",
      faseAtual: "B20",
      mensagem: "IA ativa. Nenhuma fase explícita detectada no comando.",
      proximoPasso: "Use B15 a B20 ou faça uma pergunta técnica."
    };
  } catch (err: any) {
    return {
      status: "error",
      mensagem: err?.message || "Erro no Orquestrador Central"
    };
  }
}
