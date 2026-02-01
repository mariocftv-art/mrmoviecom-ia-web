'use client';

import PlatformNav from '../sidebar/PlatformNav';

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        background: '#020617',
        color: '#fff',
        padding: 16,
      }}
    >
      <h2 style={{ marginBottom: 24 }}>MRMoviecom</h2>
      <PlatformNav />
    </aside>
  );
}
