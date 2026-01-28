import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Variáveis de ambiente do Supabase não configuradas");
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

export async function POST(req: Request) {
  try {
    const supabase = getSupabase();

    const body = await req.json();
    const { prompt, user_id } = body;

    if (!prompt || !user_id) {
      return NextResponse.json(
        { error: "prompt e user_id são obrigatórios" },
        { status: 400 }
      );
    }

    const { data: user, error } = await supabase
      .from("users")
      .select("id, credits")
      .eq("id", user_id)
      .single();

    if (error || !user) {
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

    const aiResponse = {
      result: "IA ativa em produção (Edge safe)."
    };

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
