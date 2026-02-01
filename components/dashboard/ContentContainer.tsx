'use client';

import { ReactNode } from 'react';

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section
      style={{
        flex: 1,
        padding: 32,
        background:
          'linear-gradient(180deg, var(--bg-soft), var(--bg-main))',
        borderRadius: 16,
        boxShadow: '0 0 0 1px var(--border-soft)',
      }}
    >
      {children}
    </section>
  );
}
