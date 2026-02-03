export type VisionResult = {
  summary: string;
  risks: string[];
  suggestion: string;
};

export function visionAnalyze(input: string): VisionResult {
  return {
    summary: `Análise do pedido: ${input}`,
    risks: [],
    suggestion: 'Encaminhar para Command após validação.',
  };
}
