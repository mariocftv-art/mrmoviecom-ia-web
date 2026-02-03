'use client';

import { useEffect, useState } from 'react';

type ThemeOption = {
  key: string;
  name: string;
  previewColor: string;
};

const THEMES: ThemeOption[] = [
  { key: 'dark_pro', name: 'Dark Pro', previewColor: '#7c3aed' },
  { key: 'neon', name: 'Neon', previewColor: '#22d3ee' },
  { key: 'cinema', name: 'Cinema', previewColor: '#ef4444' },
  { key: 'clean_dark', name: 'Clean Dark', previewColor: '#64748b' },
];

type Props = {
  module: string;
  currentTheme: string;
  onApply: (themeKey: string) => void;
};

export default function ThemeSettings({
  module,
  currentTheme,
  onApply,
}: Props) {
  const [selectedTheme, setSelectedTheme] = useState<string>(currentTheme);

  useEffect(() => {
    setSelectedTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div
      style={{
        background: '#0b0b0f',
        padding: 20,
        borderRadius: 14,
        color: '#fff',
        border: '1px solid #222',
      }}
    >
      <h3 style={{ marginBottom: 4 }}>Aparência</h3>
      <p style={{ opacity: 0.6, marginBottom: 16 }}>{module}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
        }}
      >
        {THEMES.map((theme) => (
          <button
            key={theme.key}
            onClick={() => setSelectedTheme(theme.key)}
            style={{
              padding: 12,
              borderRadius: 10,
              background: '#111',
              border:
                selectedTheme === theme.key
                  ? `2px solid ${theme.previewColor}`
                  : '1px solid #222',
              color: '#fff',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                height: 26,
                borderRadius: 6,
                background: theme.previewColor,
                marginBottom: 6,
              }}
            />
            {theme.name}
          </button>
        ))}
      </div>

      <button
        onClick={() => onApply(selectedTheme)}
        style={{
          marginTop: 16,
          width: '100%',
          padding: '10px 14px',
          borderRadius: 10,
          border: 'none',
          background: '#2563eb',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Aplicar Tema
      </button>
    </div>
  );
}
