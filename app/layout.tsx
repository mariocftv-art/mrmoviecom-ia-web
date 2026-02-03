import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "MRMoviecom IA Platform",
  description: "Plataforma de IA MRMoviecom",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(0,255,255,0.15), rgba(0,0,0,0.85)),
            url("/bg-ai-futurista.jpg")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}