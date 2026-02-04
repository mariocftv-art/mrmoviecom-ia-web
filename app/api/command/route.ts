import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { command } = await req.json();

  const usarVision =
    command.toLowerCase().includes("layout") ||
    command.toLowerCase().includes("analisar");

  if (usarVision) {
    const visionRes = await fetch("http://localhost:3000/api/vision", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: command }),
    });

    const visionData = await visionRes.json();

    // 🔥 SIMULA EXECUÇÃO
    const execucao = visionData.analysis.acoes_sugeridas.map(
      (acao: string) => ({
        acao,
        status: "executada (mock)",
      })
    );

    return NextResponse.json({
      modo: "execucao_controlada",
      origem: "IA Central",
      resumo: visionData.analysis.resumo,
      execucao,
    });
  }

  return NextResponse.json({
    modo: "resposta_simples",
    mensagem: "Comando recebido",
  });
}
