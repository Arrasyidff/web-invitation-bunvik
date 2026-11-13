interface PhotoFrameProps {
  /** "arch": bingkai lengkung untuk potret; "polaroid": foto cetak dengan caption. */
  shape: "arch" | "polaroid";
  /** Teks pengganti untuk pembaca layar, mis. "Foto Zakiya". */
  label: string;
  /** Tulisan tangan di bawah polaroid. */
  caption?: string;
  className?: string;
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.4} className="h-7 w-7">
      <path d="M4 8.5A1.5 1.5 0 015.5 7h2.2l1.5-2h5.6l1.5 2h2.2A1.5 1.5 0 0120 8.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 17.5z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  );
}

interface EmptyPhotoAreaProps {
  roundedClassName: string;
}

/** Area kosong bertanda kamera; nanti diganti foto asli tanpa mengubah layout. */
function EmptyPhotoArea({ roundedClassName }: EmptyPhotoAreaProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-antique/50 bg-[radial-gradient(circle_at_50%_35%,#fbf3ec,#efdccd)] text-antique/80 ${roundedClassName}`}
    >
      <CameraIcon />
      <span className="text-[0.75rem] uppercase tracking-[0.3em]!">Foto</span>
    </div>
  );
}

/** Bingkai foto kosong (placeholder) sampai foto mempelai tersedia. */
export function PhotoFrame({ shape, label, caption, className = "" }: PhotoFrameProps) {
  if (shape === "arch") {
    return (
      <div role="img" aria-label={`${label} (belum tersedia)`} className={`rounded-t-full border border-antique/60 p-2 ${className}`}>
        <div className="aspect-3/4 w-full">
          <EmptyPhotoArea roundedClassName="rounded-t-full" />
        </div>
      </div>
    );
  }

  return (
    <figure
      role="img"
      aria-label={`${label} (belum tersedia)`}
      className={`bg-white p-2.5 pb-3 shadow-[0_12px_28px_rgba(59,42,39,0.18)] ${className}`}
    >
      <div className="aspect-4/3 w-full">
        <EmptyPhotoArea roundedClassName="rounded-sm" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-(family-name:--font-story-script) text-[1.375rem] leading-none text-ink/75">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
