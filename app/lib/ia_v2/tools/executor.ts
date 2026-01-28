import { gerarCodigoBaseSaas } from "./gerarCodigoBaseSaas";

export async function executarTool(toolName: string) {
  if (toolName === "GERAR_CODIGO_BASE_SAAS") {
    const resultado = await gerarCodigoBaseSaas();
    return {
      tool: toolName,
      status: "executado",
      resultado,
    };
  }

  return {
    tool: toolName,
    status: "desconhecido",
    mensagem: "Tool não reconhecida.",
  };
}
