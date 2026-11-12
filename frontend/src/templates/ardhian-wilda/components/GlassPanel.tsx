import type { ReactNode } from "react";

interface GlassPanelProps {
  children?: ReactNode;
  className?: string;
}

/** Panel kaca (glassmorphism) berbentuk potret dengan rasio 19:39. */
export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`relative aspect-19/39 w-full max-w-76 overflow-hidden rounded-[260px] border-2 border-white/60 bg-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-md ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/40 via-white/5 to-transparent" />      <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
        {children}
      </div>
    </div>
  );
}
