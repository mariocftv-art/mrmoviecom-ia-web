import { runOpenAI } from "./providers/openai";
import { runLocalAI } from "./providers/local";

export type AIResult = {
  success: boolean;
  output: string;
  tokens: number;
  provider: "openai" | "local";
  error?: string;
};

export async function runAI(prompt: string): Promise<AIResult> {
  try {
    if (!prompt || !prompt.trim()) {
      throw new Error("Prompt vazio");
    }

    const provider =
      process.env.AI_PROVIDER === "local" ? "local" : "openai";

    const result =
      provider === "local"
        ? await runLocalAI(prompt)
        : await runOpenAI(prompt);

    return {
      success: true,
      output: result.output,
      tokens: result.tokens,
      provider,
    };
  } catch (err: any) {
    return {
      success: false,
      output: "",
      tokens: 0,
      provider: "openai",
      error: err?.message || "Erro na execução da IA",
    };
  }
}
