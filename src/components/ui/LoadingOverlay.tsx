"use client";

import { useEffect, useState } from "react";
import { GROOM_NAME, BRIDE_NAME } from "@/lib/constants";

interface LoadingOverlayProps {
  isLoading: boolean;
}

export function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setIsMounted(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <p className="font-display text-[6rem] leading-none text-foreground animate-fade-in">
          {GROOM_NAME[0]} & {BRIDE_NAME[0]}
        </p>
        <p className="font-sans text-sm tracking-[0.3em] text-foreground/50 uppercase animate-fade-in [animation-delay:0.3s]">
          Memuat undangan...
        </p>
        <div className="flex gap-2 animate-fade-in [animation-delay:0.5s]">
          <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-loading-dot [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-loading-dot [animation-delay:200ms]" />
          <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-loading-dot [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}
