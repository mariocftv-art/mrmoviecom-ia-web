import fs from "fs/promises";
import path from "path";

export async function gerarCodigoBaseSaas() {
  const basePath = process.cwd();

  const arquivos = [
    {
      caminho: "app/(public)/page.tsx",
      conteudo: `
export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>SaaS IA – MRMoviecom</h1>
      <p>Projeto inicial gerado pela IA.</p>
    </main>
  );
}
      `.trim(),
    },
    {
      caminho: "app/(public)/layout.tsx",
      conteudo: `
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
      `.trim(),
    },
  ];

  const criados: string[] = [];

  for (const arquivo of arquivos) {
    const fullPath = path.join(basePath, arquivo.caminho);

    try {
      await fs.access(fullPath);
      // já existe → não mexe
    } catch {
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.writeFile(fullPath, arquivo.conteudo, "utf-8");
      criados.push(arquivo.caminho);
    }
  }

  return {
    status: "ok",
    criados,
    mensagem: "Arquivos base do SaaS criados com sucesso.",
  };
}
