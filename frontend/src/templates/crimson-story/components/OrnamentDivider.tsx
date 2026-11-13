interface OrnamentDividerProps {
  className?: string;
  colorClassName?: string;
}

/** Garis tipis dengan belah ketupat di tengah, pemisah antarbagian seperti di buku. */
export function OrnamentDivider({ className = "", colorClassName = "text-antique" }: OrnamentDividerProps) {
  return (
    <svg viewBox="0 0 240 16" aria-hidden="true" className={`mx-auto h-4 w-60 ${colorClassName} ${className}`}>
      <path d="M8 8h92M140 8h92" stroke="currentColor" strokeWidth={1} />
      <circle cx="104" cy="8" r="1.6" fill="currentColor" />
      <circle cx="136" cy="8" r="1.6" fill="currentColor" />
      <path d="M120 1.5l6.5 6.5-6.5 6.5-6.5-6.5z" fill="none" stroke="currentColor" strokeWidth={1.2} />
      <path d="M120 5l3 3-3 3-3-3z" fill="currentColor" />
    </svg>
  );
}
