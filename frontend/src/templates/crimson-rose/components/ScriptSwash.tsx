interface ScriptSwashProps {
  className?: string;
  colorClassName?: string;
}

/** Garis lengkung di bawah teks huruf sambung. */
export function ScriptSwash({ className = "", colorClassName = "text-maroon" }: ScriptSwashProps) {
  return (
    <svg viewBox="0 0 200 14" aria-hidden="true" className={`mx-auto ${colorClassName} ${className}`}>
      <path d="M4 11C60 1 140 1 196 6" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
    </svg>
  );
}
