import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, user_id } = body;

    if (!prompt || !user_id) {
      return NextResponse.json(
        { error: "prompt e user_id são obrigatórios" },
        { status: 400 }
      );
    }

    // 🔐 Validação de usuário
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("id, credits")
      .eq("id", user_id)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    if (user.credits <= 0) {
      return NextResponse.json(
        { error: "Créditos insuficientes" },
        { status: 402 }
      );
    }

    // 🤖 Chamada da IA (placeholder seguro)
    const aiResponse = {
      result: "IA ativa e respondendo corretamente."
    };

    // 💳 Debitar crédito
    await supabase
      .from("users")
      .update({ credits: user.credits - 1 })
      .eq("id", user_id);

    return NextResponse.json({
      success: true,
      data: aiResponse
    });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message ?? "Erro interno" },
      { status: 500 }
    );
  }
}
