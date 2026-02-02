import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const snapshot = await req.json();

  console.log("🧠 IA recebeu snapshot do layout:", snapshot);

  return NextResponse.json({
    ok: true,
    message: "Layout snapshot recebido",
  });
}
