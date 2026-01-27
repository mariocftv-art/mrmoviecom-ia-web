export type RegistryItem = {
  id: number;
  comando: string;
  fase: string;
  status: string;
  mensagem?: string;
  createdAt: string;
};

let registry: RegistryItem[] = [];
let autoId = 1;

export function addRegistryItem(data: Omit<RegistryItem, "id" | "createdAt">) {
  const item: RegistryItem = {
    id: autoId++,
    createdAt: new Date().toISOString(),
    ...data,
  };

  registry.unshift(item); // mais recente primeiro
  return item;
}

export function getRegistry() {
  return registry;
}
