import "./globals.css";

export const metadata = {
  title: "MRMoviecom IA Platform",
  description: "Plataforma central de IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
