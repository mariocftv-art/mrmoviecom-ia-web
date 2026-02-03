import { listMemory } from './memory';

export type CommandResult = {
  status: 'ok' | 'blocked';
  message: string;
};

export function runCommand(action: string): CommandResult {
  const memory = listMemory();

  // 🔒 Lista branca de comandos permitidos
  switch (action) {
    case 'listar_memoria':
      return {
        status: 'ok',
        message: JSON.stringify(memory, null, 2),
      };

    case 'status_sistema':
      return {
        status: 'ok',
        message: 'Sistema operacional. Nenhuma falha detectada.',
      };

    default:
      return {
        status: 'blocked',
        message: `Ação bloqueada: "${action}". Command não executa isso.`,
      };
  }
}
