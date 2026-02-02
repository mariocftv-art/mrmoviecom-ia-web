import { NextResponse } from "next/server";
import { getQueueSnapshot } from "@/lib/ai/taskQueue";

export const runtime = "nodejs";

export async function GET() {
  const snapshot = getQueueSnapshot();
  return NextResponse.json(snapshot);
}
