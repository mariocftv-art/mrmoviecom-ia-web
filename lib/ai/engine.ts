import { runLocalAI } from "./providers/local";
import type { AIResult } from "./types";

/**
 * ENGINE PRINCIPAL DA IA
 * 🔒 OpenAI DESATIVADO
 * 🧠 Apenas IA Local
 */
export async function runAI(prompt: string): Promise<AIResult> {
  try {
    const result = await runLocalAI(prompt);

    // garantia de contrato
    if (
      typeof result !== "object" ||
      typeof result.success !== "boolean" ||
      !Array.isArray(result.actions)
    ) {
      return {
        success: false,
        actions: [],
        error: "IA local retornou fora do contrato",
      };
    }

    return result;
  } catch (err) {
    return {
      success: false,
      actions: [],
      error: "Falha ao executar IA local",
    };
  }
}
