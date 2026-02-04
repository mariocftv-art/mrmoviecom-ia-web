import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { command } = await req.json();

    if (!command || !command.trim()) {
      return NextResponse.json({
        response: "Nenhum comando recebido.",
      });
    }

    // 🧠 ORQUESTRADOR (decisão simples por enquanto)
    const lower = command.toLowerCase();

    // 👉 Se for algo visual / layout → Vision
    if (
      lower.includes("layout") ||
      lower.includes("imagem") ||
      lower.includes("design") ||
      lower.includes("visual")
    ) {
      // chama IA Vision
      const visionRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/vision`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ command }),
        }
      );

      const visionData = await visionRes.json();

      return NextResponse.json({
        response: `🧠 IA Central decidiu usar IA Vision.\n\n${visionData.response}`,
      });
    }

    // 👉 Caso contrário: resposta padrão da Central
    return NextResponse.json({
      response:
        "🧠 IA Central recebeu o comando, mas ainda não há IA especializada configurada para este tipo de ação.",
    });
  } catch (error) {
    return NextResponse.json(
      { response: "Erro interno na IA Central." },
      { status: 500 }
    );
  }
}
