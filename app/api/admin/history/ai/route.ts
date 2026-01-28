import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Resposta simulada da IA (por enquanto)
  const response = {
    status: "ok",
    fase: "VISÃO",
    mensagem: `
Entendi sua intenção.

Você quer criar uma plataforma SaaS com IA capaz de analisar,
replicar e finalizar projetos digitais de forma inteligente.

Isso é um projeto de ALTO NÍVEL, com potencial de mercado real.

Próximo passo:
Definir quais tipos de projetos essa IA vai copiar primeiro
(sites, apps, SaaS, automações ou todos).
    `.trim(),
  };

  return NextResponse.json(response);
}
