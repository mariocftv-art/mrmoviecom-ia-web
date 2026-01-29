export async function runLocalAI(prompt: string) {
  const baseUrl = process.env.LOCAL_AI_URL || "http://localhost:11434";

  const res = await fetch(`${baseUrl}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: process.env.LOCAL_AI_MODEL || "llama3",
      prompt,
      stream: false,
    }),
  });

  if (!res.ok) {
    throw new Error("Falha ao executar IA local");
  }

  const data = await res.json();

  return {
    output: data.response || "",
    tokens: data.eval_count ?? 0,
  };
}
