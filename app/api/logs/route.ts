import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

function supabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(req: Request) {
  try {
    const supabase = supabaseClient();
    const { prompt, user_id } = await req.json();

    if (!prompt || !user_id) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    // 🔎 Créditos
    const { data: credit } = await supabase
      .from("user_credits")
      .select("credits")
      .eq("user_id", user_id)
      .single();

    if (!credit || credit.credits <= 0) {
      return NextResponse.json({ error: "Sem créditos" }, { status: 402 });
    }

    // 🤖 IA (placeholder real)
    const aiResult = `IA executou: ${prompt}`;

    // 💾 Histórico
    await supabase.from("ai_history").insert({
      user_id,
      prompt,
      response: aiResult,
    });

    // 📉 Debitar crédito
    await supabase
      .from("user_credits")
      .update({ credits: credit.credits - 1 })
      .eq("user_id", user_id);

    // 🧾 Log
    await supabase.from("ai_logs").insert({
      type: "EXEC",
      message: `Usuário ${user_id} executou IA`,
    });

    return NextResponse.json({ result: aiResult });

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
