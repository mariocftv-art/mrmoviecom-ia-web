export async function createProjectsModule() {
  return {
    created: [
      "app/projects/page.tsx",
      "app/projects/layout.tsx",
      "app/projects/components/ProjectCard.tsx",
    ],
    message: "Módulo Projects gerado com sucesso",
  };
}
