export function allowAutonomy(goal: string): boolean {
  const blocked = ["hack", "fraude", "crime", "ilegal"];
  return !blocked.some(word => goal.toLowerCase().includes(word));
}
