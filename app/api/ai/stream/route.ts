import { NextResponse } from "next/server";

let listeners: ((data: string) => void)[] = [];

export function pushStream(data: string) {
  listeners.forEach((fn) => fn(data));
}

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const send = (data: string) => {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };

      listeners.push(send);

      controller.enqueue(encoder.encode("data: IA conectada\n\n"));

      return () => {
        listeners = listeners.filter((l) => l !== send);
      };
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
