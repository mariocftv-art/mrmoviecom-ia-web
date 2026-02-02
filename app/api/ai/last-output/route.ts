import { NextResponse } from "next/server";
import { getCurrentTask, getLastOutput } from "@/lib/ai/engine";

export async function GET() {
  return NextResponse.json({
    ok: true,
    processing: !!getCurrentTask(),
    currentTask: getCurrentTask(),
    lastOutput: getLastOutput(),
  });
}
