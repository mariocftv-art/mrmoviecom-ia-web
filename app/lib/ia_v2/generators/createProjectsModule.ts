import fs from "fs";
import path from "path";

export function createProjectsModule() {
  const basePath = path.join(process.cwd(), "app/projects");

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }

  const pageFile = path.join(basePath, "page.tsx");
  const layoutFile = path.join(basePath, "layout.tsx");

  if (!fs.existsSync(pageFile)) {
    fs.writeFileSync(
      pageFile,
      `
export default function ProjectsPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Módulo de Projetos</h1>
      <p>Gerado automaticamente pela MRMoviecom IA.</p>
    </div>
  );
}
`.trim()
    );
  }

  if (!fs.existsSync(layoutFile)) {
    fs.writeFileSync(
      layoutFile,
      `
export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
`.trim()
    );
  }

  return {
    created: [
      "app/projects/page.tsx",
      "app/projects/layout.tsx"
    ]
  };
}
