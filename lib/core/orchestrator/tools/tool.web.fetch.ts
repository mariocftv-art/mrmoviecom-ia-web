// lib/core/orchestrator/tools/tool.web.fetch.ts

export interface WebFetchResult {
  ok: boolean;
  status?: number;
  data?: string;
  error?: string;
}

export async function safeWebFetch(
  url: string
): Promise<WebFetchResult> {
  try {
    if (!url.startsWith("https://")) {
      return { ok: false, error: "URL não permitida" };
    }

    // Stub seguro (sem request real ainda)
    return {
      ok: true,
      status: 200,
      data: `Conteúdo simulado de ${url}`,
    };
  } catch (e: any) {
    return { ok: false, error: e?.message };
  }
}
