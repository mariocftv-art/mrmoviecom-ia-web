import { NextResponse } from "next/server";
import { enqueueTask } from "@/lib/ai/taskQueue";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json(
        { ok: false, error: "Prompt vazio" },
        { status: 400 }
      );
    }

    const taskId = `task-${Date.now()}`;

    enqueueTask({
      id: taskId,
      type: "text",
      payload: { prompt },
      createdAt: Date.now(),
    });

    return NextResponse.json({
      ok: true,
      taskId,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Erro interno" },
      { status: 500 }
    );
  }
}
