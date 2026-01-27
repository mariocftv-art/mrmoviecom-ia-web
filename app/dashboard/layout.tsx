export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body data-theme="b">{children}</body>
    </html>
  );
}
