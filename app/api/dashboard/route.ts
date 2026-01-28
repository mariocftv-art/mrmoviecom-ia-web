import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: credits } = await supabase
    .from("user_credits")
    .select("credits")
    .eq("user_key", "admin")
    .single();

  const { count: executions } = await supabase
    .from("ai_history")
    .select("*", { count: "exact", head: true });

  return NextResponse.json({
    credits: credits?.credits ?? 0,
    executions: executions ?? 0,
    projects: 1,
    status: "Online",
  });
}
