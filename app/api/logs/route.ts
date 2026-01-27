import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("orchestrator_logs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json(
      { status: "error", error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    status: "ok",
    total: data.length,
    logs: data,
  });
}
