interface LineIconProps {
  className?: string;
}

const ICON_STROKE_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function RingsIcon({ className = "" }: LineIconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} {...ICON_STROKE_PROPS}>
      <circle cx="12" cy="19" r="7" />
      <circle cx="20" cy="19" r="7" />
      <path d="M10 8l2-3 2 3-2 2z" />
    </svg>
  );
}

export function CalendarHeartIcon({ className = "" }: LineIconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} {...ICON_STROKE_PROPS}>
      <rect x="5" y="7" width="22" height="20" rx="2" />
      <path d="M5 13h22M11 4v5M21 4v5" />
      <path d="M16 23.5l-3.4-3.3a2.1 2.1 0 013-3l.4.4.4-.4a2.1 2.1 0 013 3z" />
    </svg>
  );
}

export function EnvelopeIcon({ className = "" }: LineIconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} {...ICON_STROKE_PROPS}>
      <rect x="4" y="8" width="24" height="17" rx="1.5" />
      <path d="M4.5 9l11.5 9 11.5-9" />
    </svg>
  );
}

export function ChatHeartIcon({ className = "" }: LineIconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} {...ICON_STROKE_PROPS}>
      <path d="M6 7h20a2 2 0 012 2v12a2 2 0 01-2 2H13l-6 5v-5H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
      <path d="M16 19l-3-2.9a1.9 1.9 0 012.7-2.7l.3.3.3-.3a1.9 1.9 0 012.7 2.7z" />
    </svg>
  );
}
