import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();

      // resposta simulada segura
      const reply =
        message.toLowerCase().includes('bora')
          ? 'IA Central ativa. Próximo passo lógico: escolher módulo.'
          : `Recebido: ${message}`;

      for (const char of reply) {
        controller.enqueue(encoder.encode(char));
        await new Promise(r => setTimeout(r, 15));
      }

      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
