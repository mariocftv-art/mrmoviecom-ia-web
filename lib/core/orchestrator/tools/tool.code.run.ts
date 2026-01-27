// lib/core/orchestrator/tools/tool.code.run.ts

export interface CodeRunResult {
  ok: boolean;
  stdout?: string;
  stderr?: string;
}

const BLOCKED_KEYWORDS = ["process", "fs", "child_process", "require"];

export function safeRunCode(code: string): CodeRunResult {
  for (const word of BLOCKED_KEYWORDS) {
    if (code.includes(word)) {
      return {
        ok: false,
        stderr: `Código bloqueado: uso de '${word}'`,
      };
    }
  }

  // Execução simulada
  return {
    ok: true,
    stdout: "Código executado em sandbox (simulado)",
  };
}
