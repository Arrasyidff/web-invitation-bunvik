import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import type { WeddingEvent } from "@/templates/crimson-story/content";

interface EventCardProps {
  weddingEvent: WeddingEvent;
  revealDelay?: number;
}

/** Kartu acara bergaya halaman buku: satu kalimat naratif, lalu info praktis yang mudah dipindai. */
export function EventCard({ weddingEvent, revealDelay = 0 }: EventCardProps) {
  return (
    <ScrollReveal
      direction="bottom"
      delay={revealDelay}
      className="relative rounded-3xl border border-maroon/15 bg-white px-6 pb-8 pt-9 text-center shadow-[0_14px_32px_rgba(59,42,39,0.08)]"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[1.25rem] border border-antique/25" />

      <h3 className="font-(family-name:--font-story-script) text-[2.5rem] leading-none! text-maroon">
        {weddingEvent.title}
      </h3>
      <p className="mt-3 text-[1rem] text-ink/70">{weddingEvent.narrative}</p>

      <dl className="mt-6 grid grid-cols-2 divide-x divide-antique/30 border-y border-antique/30 py-4">
        <div>
          <dt className="text-[0.75rem] uppercase tracking-[0.25em] text-antique">Tanggal</dt>
          <dd className="mt-1 text-[0.9375rem] leading-snug text-ink">{weddingEvent.dateLabel}</dd>
        </div>
        <div>
          <dt className="text-[0.75rem] uppercase tracking-[0.25em] text-antique">Waktu</dt>
          <dd className="mt-1 text-[0.9375rem] leading-snug text-ink">{weddingEvent.timeLabel}</dd>
        </div>
      </dl>

      <p className="mt-6 text-[0.875rem] font-semibold uppercase tracking-[0.2em]! text-maroon">
        {weddingEvent.venueName}
      </p>
      <p className="mt-2 text-[0.9375rem] leading-normal! text-ink/75">{weddingEvent.address}</p>

      <OrnamentDivider className="my-6 w-40" />

      <a
        href={weddingEvent.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-2.5 text-[0.8125rem] uppercase tracking-[0.2em] text-ivory shadow-md transition-transform active:scale-95"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4.5 w-4.5">
          <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
        Lihat Lokasi
      </a>
    </ScrollReveal>
  );
}
