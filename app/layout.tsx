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
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
