// lib/ai/providers/textProvider.ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

/**
 * Gera texto usando OpenAI (SDK novo)
 */
export async function generateText(prompt: string): Promise<string> {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  // Forma OFICIAL e segura no SDK novo
  return response.output_text?.trim() || "";
}
