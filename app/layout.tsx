export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-bg-main text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
