"use client";

import { useEffect, useRef } from "react";

interface SuccessToastProps {
  message: string;
  subMessage?: string;
  onClose: () => void;
}

export function SuccessToast({ message, subMessage, onClose }: SuccessToastProps) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const timer = setTimeout(() => onCloseRef.current(), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 px-6">
      <div className="mx-auto max-w-sm animate-toast-up rounded-2xl bg-white shadow-xl border border-green-100 px-5 py-4 flex items-start gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 mt-0.5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-green-600"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[1rem] font-semibold text-foreground leading-snug">{message}</p>
          {subMessage && (
            <p className="mt-0.5 text-[0.875rem] text-foreground/60 leading-snug">{subMessage}</p>
          )}
        </div>

        <button
          onClick={onClose}
          className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors mt-0.5"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
