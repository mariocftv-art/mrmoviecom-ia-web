import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body data-theme="a">
        {children}
      </body>
    </html>
  );
}
