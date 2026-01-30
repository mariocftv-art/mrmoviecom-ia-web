import type { AIResult } from "../types";

/**
 * IA LOCAL – SIMULA RACIOCÍNIO DA IA
 * PASSO 5.2: múltiplos arquivos
 */
export async function runLocalAI(prompt: string): Promise<AIResult> {
  // gatilho simples de teste
  if (!prompt || prompt.length < 3) {
    return {
      success: false,
      actions: [],
      error: "Prompt vazio ou inválido",
    };
  }

  return {
    success: true,
    message: "PASSO 5.2 executado com sucesso",
    actions: [
      {
        type: "create_file",
        path: "app/ia-teste/README.md",
        content: "# IA Teste\n\nArquivos criados automaticamente pela IA.",
      },
      {
        type: "create_file",
        path: "app/ia-teste/config.ts",
        content: `export const IA_CONFIG = {
  version: "5.2",
  mode: "local",
};`,
      },
      {
        type: "create_file",
        path: "app/ia-teste/service.ts",
        content: `export function run() {
  console.log("IA ativa");
}`,
      },
    ],
  };
}
