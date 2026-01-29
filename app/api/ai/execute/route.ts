import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai/engine";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = await runAI(prompt);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Erro interno" },
      { status: 500 }
    );
  }
}
