import { NextResponse } from "next/server";
import { getRegistry } from "@/lib/orchestrator/registry";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    total: getRegistry().length,
    registros: getRegistry(),
  });
}
