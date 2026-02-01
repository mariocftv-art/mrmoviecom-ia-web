'use client';

export default function Topbar() {
  return (
    <header
      style={{
        height: 56,
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >
      <strong>Dashboard — MRMoviecom IA Platform</strong>

      <div style={{ fontSize: 14, opacity: 0.7 }}>
        Admin
      </div>
    </header>
  );
}
