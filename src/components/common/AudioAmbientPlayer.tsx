import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioAmbientPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorNodesRef = useRef<OscillatorNode[]>([]);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const startBackwaterAmbience = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Water Ripple Noise (Gentle Backwater Lapping)
      const bufferSize = ctx.sampleRate * 4;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02; // Pink-brown noise
        lastOut = output[i];
        output[i] *= 3.5;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;
      noiseSourceRef.current = whiteNoise;

      // Filter to simulate soft lake water
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      // Low frequency modulation for waves
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.2, ctx.currentTime); // 5-second gentle wave swell
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(180, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      const waterGain = ctx.createGain();
      waterGain.gain.setValueAtTime(0.35, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(waterGain);
      waterGain.connect(masterGain);

      lfo.start();
      whiteNoise.start();

      // 2. Warm ambient drone (Tanpura/Bansuri harmony frequencies in C Major Pentatonic: C3, G3, C4, E4)
      const frequencies = [130.81, 196.00, 261.63, 329.63];
      const oscillators: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);

        // Gentle subtle vibrato
        const vib = ctx.createOscillator();
        vib.frequency.setValueAtTime(0.15 + idx * 0.05, ctx.currentTime);
        const vibGain = ctx.createGain();
        vibGain.gain.setValueAtTime(1.5, ctx.currentTime);
        vib.connect(vibGain);
        vibGain.connect(osc.frequency);

        vib.start();
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscillators.push(osc);
      });

      oscillatorNodesRef.current = oscillators;
      setIsPlaying(true);
    } catch (e) {
      console.warn("AudioContext init error:", e);
    }
  };

  const stopBackwaterAmbience = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      try {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
        setTimeout(() => {
          ctx.close();
          audioCtxRef.current = null;
        }, 1100);
      } catch (err) {
        console.warn("Audio close err:", err);
      }
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopBackwaterAmbience();
    } else {
      startBackwaterAmbience();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-40">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute ambient backwater sounds" : "Play ambient backwater sounds"}
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-[#4A5D4E] text-[#FAF7F2] border border-[#C5A059]/40 ring-2 ring-[#C5A059]/30'
            : 'bg-[#FAF7F2]/90 backdrop-blur-md text-[#4A5D4E] border border-[#4A5D4E]/20 hover:border-[#C5A059]/60 hover:bg-[#FAF7F2]'
        }`}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#C5A059] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#4A5D4E]/70 group-hover:text-[#4A5D4E]" />
          )}
        </span>

        <span className="hidden sm:inline font-sans text-[11px] tracking-wide">
          {isPlaying ? "Backwater Ambience" : "Soundtrack"}
        </span>

        {isPlaying && (
          <span className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-[#C5A059] h-2.5 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-0.5 bg-[#C5A059] h-3.5 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 bg-[#C5A059] h-2 animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        )}
      </button>
    </div>
  );
};
