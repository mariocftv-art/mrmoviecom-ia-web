import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const userPrompt = body?.prompt || "";

    return NextResponse.json({
      status: "ok",
      fase: "Análise inicial",
      mensagem: `Recebi o pedido: "${userPrompt}". Próximo passo: estruturar a visão da plataforma SaaS com IA.`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "erro",
        fase: "Falha",
        mensagem: "Erro ao processar a solicitação da IA.",
      },
      { status: 500 }
    );
  }
}
