export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard Layout OK</h1>
      {children}
    </div>
  )
}
