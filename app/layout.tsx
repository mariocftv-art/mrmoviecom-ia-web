import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ flex: 1, padding: 24 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
