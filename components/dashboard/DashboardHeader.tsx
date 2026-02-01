type DashboardHeaderProps = {
  title: string
  subtitle?: string
}

export default function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  return (
    <div
      style={{
        marginBottom: 24,
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: 12,
      }}
    >
      <h1
        style={{
          fontSize: 22,
          fontWeight: 700,
          margin: 0,
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            marginTop: 4,
            fontSize: 14,
            opacity: 0.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
