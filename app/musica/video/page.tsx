'use client';

import { useEffect, useRef, useState } from 'react';

const SCENES = [
  { id: 'praia', name: 'Praia', bg: 'linear-gradient(180deg,#0ea5e9,#020617)' },
  { id: 'parque', name: 'Parque', bg: 'linear-gradient(180deg,#22c55e,#020617)' },
  { id: 'urbano', name: 'Urbano', bg: 'linear-gradient(180deg,#a855f7,#020617)' },
  { id: 'estudio', name: 'Estúdio', bg: 'linear-gradient(180deg,#64748b,#020617)' },
];

const RAW_LYRICS = `Primeira linha da canção
Segunda linha da canção
Terceira linha da canção
Quarta linha da canção`;

export default function VideoIAPage() {
  const [scene, setScene] = useState(SCENES[0]);
  const [lyrics, setLyrics] = useState<string[]>([]);
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setLyrics(RAW_LYRICS.split('\n').filter(Boolean));
  }, []);

  // anima a letra (base: troca a cada 2s)
  useEffect(() => {
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % lyrics.length);
    }, 2000);
    return () => {
      timerRef.current && window.clearInterval(timerRef.current);
    };
  }, [lyrics]);

  return (
    <div style={{ minHeight:'100vh', background:'#020617', color:'#fff', padding:32 }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <h1>🎬 Vídeo IA</h1>

        {/* CONTROLES */}
        <div style={{ display:'flex', gap:12, margin:'16px 0' }}>
          {SCENES.map(s => (
            <button
              key={s.id}
              onClick={() => setScene(s)}
              style={{
                padding:'8px 12px',
                borderRadius:10,
                border:'1px solid #334155',
                background: scene.id===s.id ? '#2563eb' : '#0b0b0f',
                color:'#fff'
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* PREVIEW DO VÍDEO */}
        <div
          style={{
            height:420,
            borderRadius:18,
            background: scene.bg,
            position:'relative',
            overflow:'hidden',
            border:'1px solid #334155'
          }}
        >
          {/* Overlay escuro */}
          <div style={{
            position:'absolute', inset:0,
            background:'rgba(0,0,0,.35)'
          }} />

          {/* Letra animada */}
          <div style={{
            position:'absolute', bottom:40, left:0, right:0,
            textAlign:'center', padding:'0 24px'
          }}>
            {lyrics.map((line, i) => (
              <div
                key={i}
                style={{
                  opacity: i===active ? 1 : .2,
                  transform: i===active ? 'scale(1.05)' : 'scale(1)',
                  transition:'all .35s',
                  fontSize: i===active ? 28 : 20,
                  fontWeight:700
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        <p style={{ opacity:.6, marginTop:12 }}>
          Preview com letra animada. Próximo passo: sincronizar com karaokê/voz.
        </p>
      </div>
    </div>
  );
}
