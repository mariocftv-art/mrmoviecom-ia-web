import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt: string = body.prompt || "";

    let fase = "Aguardando";
    let acao = "nenhuma";
    let mensagem = "";
    let resultado: any = {};

    // === PASSO 4: GERAR ESTRUTURA ===
    if (
      prompt.toLowerCase().includes("confirmar") ||
      prompt.toLowerCase().includes("gerar estrutura")
    ) {
      fase = "Estrutura Criada";
      acao = "criar_pastas";

      const basePath = process.cwd();

      const pastas = [
        "app/(auth)",
        "app/dashboard",
        "app/generator",
        "app/editor",
        "app/api/ai",
        "app/api/projects",
        "lib/ia",
        "lib/supabase",
      ];

      pastas.forEach((pasta) => {
        const fullPath = path.join(basePath, pasta);
        if (!fs.existsSync(fullPath)) {
          fs.mkdirSync(fullPath, { recursive: true });
        }
      });

      resultado = {
        pastasCriadas: pastas,
      };

      mensagem =
        "Estrutura base do SaaS criada com sucesso. Pronto para gerar código.";
    }

    return NextResponse.json({
      status: "ok",
      fase,
      acao,
      resultado,
      mensagem,
      proximoPasso:
        "Deseja que a IA gere o código funcional inicial do SaaS?",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "erro",
        fase: "Falha",
        mensagem: "Erro ao criar estrutura do projeto.",
      },
      { status: 500 }
    );
  }
}
