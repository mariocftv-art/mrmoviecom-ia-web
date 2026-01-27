type LogInput = {
  fase: string;
  comando: string;
  status: string;
  mensagem?: string;
};

const logs: LogInput[] = [];

export async function logOrchestrator(log: LogInput) {
  logs.push({
    ...log,
    mensagem: log.mensagem ?? "",
  });
}

export function getLogs() {
  return logs;
}
