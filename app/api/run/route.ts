import { NextResponse } from "next/server";
import { runOrchestrator } from "@/lib/orchestrator/orchestrator";

export async function POST(req: Request) {
  const body = await req.json();
  const comando = body?.comando ?? "";

  const result = await runOrchestrator(comando);

  return NextResponse.json(result);
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    mensagem: "API /run ativa",
  });
}
