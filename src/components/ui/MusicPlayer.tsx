"use client";

import { useState, useEffect, useRef } from "react";

interface MusicPlayerProps {
  src: string;
}

export function MusicPlayer({ src }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const wasPlayingBeforeHiddenRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.03;

    // Autoplay on mount — works because user already interacted (clicked cover)
    audio.play().then(() => setIsPlaying(true)).catch(() => {});

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        wasPlayingBeforeHiddenRef.current = !audio.paused;
        audio.pause();
        setIsPlaying(false);
      } else if (wasPlayingBeforeHiddenRef.current) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  function handleToggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop />

      <button
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 rounded-full shadow-lg shadow-black/30 focus:outline-none active:scale-95 transition-transform duration-150"
      >
        {/* Vinyl disc — spins when playing */}
        <div className={`w-full h-full ${isPlaying ? "animate-spin-disc" : "animate-spin-disc-paused"}`}>
          <svg viewBox="0 0 52 52" className="w-full h-full">
            <circle cx="26" cy="26" r="26" fill="#1c1917" />
            <circle cx="26" cy="26" r="22" fill="none" stroke="#3d3533" strokeWidth="1.5" />
            <circle cx="26" cy="26" r="18" fill="none" stroke="#3d3533" strokeWidth="1.5" />
            <circle cx="26" cy="26" r="14" fill="none" stroke="#3d3533" strokeWidth="1.5" />
            <circle cx="26" cy="26" r="10" fill="#9f3a47" />
            <circle cx="26" cy="26" r="8"  fill="#b84457" />
            <circle cx="26" cy="26" r="2.5" fill="#1c1917" />
          </svg>
        </div>

        {/* Play / pause icon — does NOT spin */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/90">
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/90 translate-x-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </button>
    </>
  );
}
