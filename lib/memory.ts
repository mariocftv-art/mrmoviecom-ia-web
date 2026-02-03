export type MemoryType = "vision" | "decision" | "command";

type MemoryRecord = {
  id: string;
  createdAt: number;
  type: MemoryType;
  content: string;
};

const memory: MemoryRecord[] = [];

export function addMemory({
  type,
  content,
}: {
  type: MemoryType;
  content: string;
}) {
  const record: MemoryRecord = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    type,
    content,
  };

  memory.push(record);
  return record;
}

export function listMemory(type?: MemoryType) {
  if (!type) return memory;
  return memory.filter((m) => m.type === type);
}
