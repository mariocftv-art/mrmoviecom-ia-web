import { addMemory, listMemory } from '@/lib/memory';

export async function POST(req: Request) {
  const { type, content } = await req.json();

  const record = addMemory({ type, content });

  return Response.json(record);
}

export async function GET() {
  const data = listMemory();
  return Response.json(data);
}
