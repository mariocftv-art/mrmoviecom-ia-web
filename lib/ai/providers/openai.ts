import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runOpenAI(prompt: string) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
Você é uma IA de backend.
Você DEVE responder SOMENTE em JSON válido.
Formato obrigatório:

{
  "success": true,
  "actions": [
    {
      "type": "create_file",
      "path": "caminho/do/arquivo",
      "content": "conteúdo completo"
    }
  ]
}

Proibido:
- Texto fora do JSON
- Markdown
- Comentários
- Explicações
`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0,
  });

  return {
    output: response.choices[0].message.content ?? "",
  };
}
