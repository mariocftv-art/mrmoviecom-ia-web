// lib/ai/types.ts

export type AIAction = {
  type: "create_file";
  path: string;
  content: string;
};

export type AIResult = {
  success: boolean;
  message?: string;
  actions: AIAction[];
  error?: string;
};
