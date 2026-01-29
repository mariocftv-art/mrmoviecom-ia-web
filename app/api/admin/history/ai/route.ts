import { NextResponse } from "next/server";

type HistoryItem = {
  prompt: string;
  output: string;
  createdAt: string;
};

const memoryHistory: HistoryItem[] = [];

export async function POST(req: Request) {
  try {
    const { prompt, output } = await req.json();

    if (!prompt || !output) {
      return NextResponse.json(
        { success: false, error: "Dados inválidos" },
        { status: 400 }
      );
    }

    memoryHistory.unshift({
      prompt,
      output,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Erro ao salvar histórico" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    data: memoryHistory.slice(0, 20),
  });
}
