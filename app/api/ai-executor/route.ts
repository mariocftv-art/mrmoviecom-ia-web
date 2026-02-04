import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { visionSummary } = body;

    if (!visionSummary) {
      return NextResponse.json(
        { error: "visionSummary ausente" },
        { status: 400 }
      );
    }

    const systemPrompt = `
Você é uma IA ARQUITETA DE FRONTEND.
Você NÃO executa código.
Você APENAS gera planos técnicos estruturados em JSON.

REGRAS:
- NUNCA escreva texto fora do JSON
- NUNCA execute código
- Cada ação deve ser clara, pequena e segura
- Foco em layout Next.js + React + Tailwind

FORMATO DE RESPOSTA OBRIGATÓRIO:
{
  "actions": [
    {
      "type": "edit_file",
      "file": "app/ia/page.tsx",
      "description": "o que deve ser feito",
      "details": "como fazer a alteração"
    }
  ]
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Plano da IA Vision:\n${visionSummary}`,
        },
      ],
      temperature: 0.2,
    });

    const content = completion.choices[0].message.content;

    let parsed;
    try {
      parsed = JSON.parse(content || "{}");
    } catch {
      return NextResponse.json(
        { error: "Resposta da OpenAI não é JSON válido", raw: content },
        { status: 500 }
      );
    }

    return NextResponse.json({
      source: "openai-executor",
      plan: parsed,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Erro desconhecido" },
      { status: 500 }
    );
  }
}
