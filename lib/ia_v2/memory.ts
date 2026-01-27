export class Memory {
  private data: Map<string, string> = new Map();

  store(key: string, value: string) {
    this.data.set(key.toLowerCase(), value);
  }

  recall(key: string): string | null {
    return this.data.get(key.toLowerCase()) ?? null;
  }

  dump() {
    return Array.from(this.data.entries());
  }
}
