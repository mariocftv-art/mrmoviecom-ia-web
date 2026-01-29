import "./globals.css";

export const metadata = {
  title: "MRMoviecom IA",
  description: "Plataforma IA futurista",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
