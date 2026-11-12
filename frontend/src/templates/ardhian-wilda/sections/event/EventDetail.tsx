import {
  AKAD_TIME,
  RECEPTION_TIME,
  WEDDING_DATE_FULL,
  VENUE_NAME,
  VENUE_ADDRESS,
  MAPS_URL,
  MAPS_EMBED_URL,
} from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RingsIcon } from "@/templates/ardhian-wilda/components/LineIcons";
import type { EventType } from "@/lib/types";

interface EventDetailProps {
  eventType: EventType;
}

export function EventDetail({ eventType }: EventDetailProps) {
  const isAkad = eventType === "akad";
  const eventTitle = isAkad ? "Akad Nikah" : "Resepsi";
  const eventTime = isAkad ? AKAD_TIME : RECEPTION_TIME;

  return (
    <ScrollReveal direction="bottom" className="px-8 pb-12 pt-6 text-center">
      <RingsIcon className="mx-auto h-9 w-9 text-wine" />
      <p className="mt-3 text-[1.125rem] font-semibold text-foreground">{eventTime}</p>
      <h3 className="mt-1 text-[1.125rem] uppercase tracking-[0.25em] text-wine">{eventTitle}</h3>
      <p className="mt-1 text-[1rem] text-foreground/80">{WEDDING_DATE_FULL}</p>

      <p className="mt-5 text-[1.0625rem] font-semibold uppercase tracking-wide text-foreground">
        {VENUE_NAME}
      </p>
      <p className="mt-1 text-[0.9375rem] italic leading-snug text-foreground/70">{VENUE_ADDRESS}</p>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-full bg-wine px-5 py-1.5 text-[0.9375rem] text-cream underline underline-offset-2"
      >
        Lihat Lokasi
      </a>

      <div className="mt-6 h-64 w-full overflow-hidden rounded-lg border border-wine/20 shadow-sm">
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Lokasi ${VENUE_NAME}`}
        />
      </div>
    </ScrollReveal>
  );
}
