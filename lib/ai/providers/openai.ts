import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runOpenAI(prompt: string) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY não configurada");
  }

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Você é uma IA técnica e objetiva." },
      { role: "user", content: prompt },
    ],
  });

  return {
    output: response.choices[0]?.message?.content || "",
    tokens: response.usage?.total_tokens ?? 0,
  };
}
