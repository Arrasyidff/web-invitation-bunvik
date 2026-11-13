interface CoverGuestCardProps {
  guestName?: string;
}

/** Label nama tamu seperti ex-libris di halaman depan buku. */
export function CoverGuestCard({ guestName }: CoverGuestCardProps) {
  return (
    <div className="mt-8 w-full max-w-72 border-y border-ivory/25 px-4 py-4">
      <p className="text-[0.75rem] uppercase tracking-[0.3em]! text-ivory/60">Kepada Yth.</p>
      <p className="mt-1.5 font-(family-name:--font-story-display) text-[1.375rem] italic leading-snug! text-ivory">
        {guestName ?? "Bapak/Ibu/Saudara/i"}
      </p>
      <p className="mt-1.5 text-[0.8125rem] text-ivory/60">di tempat</p>
    </div>
  );
}
