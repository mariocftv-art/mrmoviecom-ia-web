import { addMemory } from '@/lib/memory';

const PROMPT_VISION_LOCAL = (input: string) => `
ANÁLISE:
- Pedido recebido: "${input}"
- Status do sistema: estável

RISCOS:
- Nenhum risco crítico identificado

PLANO SUGERIDO:
- Validar visualmente o layout
- Priorizar ajustes de UX
- Encaminhar para Command após validação
`;

export async function POST(req: Request) {
  const { input } = await req.json();

  // 🔍 Análise local (sem OpenAI)
  const analysis = PROMPT_VISION_LOCAL(input);

  // 🧠 GRAVA NA MEMÓRIA AUTOMATICAMENTE
  addMemory({
    type: 'vision',
    content: analysis,
  });

  return new Response(analysis, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
