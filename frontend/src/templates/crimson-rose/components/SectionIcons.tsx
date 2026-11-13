interface SectionIconProps {
  className?: string;
}

/** Siluet masjid (kubah + dua menara) untuk judul Ayat Suci. */
export function MosqueIcon({ className = "" }: SectionIconProps) {
  return (
    <svg viewBox="0 0 96 48" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M48 2v4" stroke="currentColor" strokeWidth={1.6} />
      <path d="M48 6c-2.2 3.6-11 7-13 15h26c-2-8-10.8-11.4-13-15z" />
      <rect x="33" y="21" width="30" height="21" />
      <path d="M44 42V33a4 4 0 018 0v9z" fill="#fcf5f0" />
      <path d="M14 12l2.5-6 2.5 6z" />
      <rect x="14" y="12" width="5" height="30" />
      <rect x="12.5" y="18" width="8" height="2" />
      <path d="M77 12l2.5-6 2.5 6z" />
      <rect x="77" y="12" width="5" height="30" />
      <rect x="75.5" y="18" width="8" height="2" />
      <path d="M19 30h14v12H19zM63 30h14v12H63z" />
      <path d="M24 42v-6a2 2 0 014 0v6zM68 42v-6a2 2 0 014 0v6z" fill="#fcf5f0" />
      <rect x="6" y="42" width="84" height="3" rx="1" />
    </svg>
  );
}

/** Kitab terbuka untuk judul Pembukaan. */
export function OpenBookIcon({ className = "" }: SectionIconProps) {
  return (
    <svg viewBox="0 0 64 40" aria-hidden="true" className={className}>
      <path d="M32 9C24 3 12 3 4 6v26c8-3 20-3 28 3 8-6 20-6 28-3V6c-8-3-20-3-28 3z" fill="currentColor" />
      <path
        d="M32 12C25 7 15 7 8 9.5v19c7-2 17-2 24 3 7-5 17-5 24-3v-19C49 7 39 7 32 12z"
        fill="#fcf5f0"
      />
      <path d="M32 12v19.5" stroke="currentColor" strokeWidth={1.4} />
      <g stroke="currentColor" strokeWidth={0.9} opacity={0.7}>
        <path d="M12 14c5-1.5 11-1 16 1.5M12 19c5-1.5 11-1 16 1.5M12 24c5-1.5 11-1 16 1.5" fill="none" />
        <path d="M52 14c-5-1.5-11-1-16 1.5M52 19c-5-1.5-11-1-16 1.5M52 24c-5-1.5-11-1-16 1.5" fill="none" />
      </g>
    </svg>
  );
}
