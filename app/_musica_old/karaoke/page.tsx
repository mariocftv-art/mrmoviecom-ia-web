'use client';

import { useEffect, useRef, useState } from 'react';

const AUDIO_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

const RAW_LYRICS = `Primeira linha da canção
Segunda linha da canção
Terceira linha da canção
Quarta linha da canção
Quinta linha da canção`;

type LineTime = { i: number; t: number };

export default function KaraokeFineTunePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [lyrics, setLyrics] = useState<string[]>([]);
  const [times, setTimes] = useState<LineTime[]>([]);
  const [active, setActive] = useState(0);
  const [duration, setDuration] = useState(0);

  // prepara letra
  useEffect(() => {
    const arr = RAW_LYRICS.split('\n').filter(Boolean);
    setLyrics(arr);
  }, []);

  // cria tempos iniciais proporcionais
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onCanPlay = () => {
      const d = audio.duration || 0;
      setDuration(d);
      if (!d || lyrics.length === 0) return;

      const step = d / lyrics.length;
      setTimes(lyrics.map((_, i) => ({ i, t: i * step })));
    };

    audio.addEventListener('canplay', onCanPlay);
    return () => audio.removeEventListener('canplay', onCanPlay);
  }, [lyrics]);

  // acompanha o áudio e ativa a linha correta
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || times.length === 0) return;

    const onTime = () => {
      const ct = audio.currentTime;
      for (let i = times.length - 1; i >= 0; i--) {
        if (ct >= times[i].t) {
          setActive(times[i].i);
          break;
        }
      }
    };

    audio.addEventListener('timeupdate', onTime);
    return () => audio.removeEventListener('timeupdate', onTime);
  }, [times]);

  // altera tempo manualmente
  function updateTime(index: number, value: number) {
    setTimes((prev) =>
      prev.map((lt) => (lt.i === index ? { ...lt, t: value } : lt))
    );
  }

  return (
    <div style={{ minHeight:'100vh', background:'#020617', color:'#fff', padding:32 }}>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>
        <h1>🎚️ Karaokê — Ajuste Fino</h1>

        <audio
          ref={audioRef}
          src={AUDIO_URL}
          controls
          style={{ width:'100%', marginTop:16 }}
        />

        <div
          style={{
            marginTop:24,
            background:'#0b0b0f',
            borderRadius:16,
            padding:24,
            border:'1px solid #22d3ee'
          }}
        >
          {lyrics.map((line, i) => (
            <div key={i} style={{ marginBottom:14 }}>
              <p
                style={{
                  fontSize: i === active ? 20 : 16,
                  color: i === active ? '#22d3ee' : '#94a3b8',
                  marginBottom:6
                }}
              >
                {line}
              </p>

              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={times.find(t=>t.i===i)?.t ?? 0}
                onChange={(e)=>updateTime(i, Number(e.target.value))}
                style={{ width:'100%' }}
              />
            </div>
          ))}
        </div>

        <p style={{ opacity:.6, marginTop:12 }}>
          Ajuste os sliders para alinhar cada linha exatamente no tempo desejado.
        </p>
      </div>
    </div>
  );
}
