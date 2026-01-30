import { NextResponse } from "next/server";
import { runAI } from "@/lib/ai/engine";
import { executeActions } from "@/lib/ai/executors/fileExecutor";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await runAI(prompt);

  if (!result.success) {
    return NextResponse.json(result, { status: 400 });
  }

  if (result.actions?.length) {
    await executeActions(result.actions);
  }

  return NextResponse.json(result);
}
