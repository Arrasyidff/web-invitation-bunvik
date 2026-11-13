import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { WEDDING_EVENTS } from "@/templates/crimson-rose/content";
import ribbonBanner from "@/templates/crimson-rose/assets/ribbon-banner-1.webp";
import iconCalendar from "@/templates/crimson-rose/assets/icon-calendar.webp";
import iconClock from "@/templates/crimson-rose/assets/icon-clock.webp";
import iconMapPin from "@/templates/crimson-rose/assets/icon-map-pin.webp";
import dividerDiamond from "@/templates/crimson-rose/assets/divider-diamond.webp";

interface EventCardProps {
  weddingEvent: (typeof WEDDING_EVENTS)[number];
  revealDelay?: number;
}

export function EventCard({ weddingEvent, revealDelay = 0 }: EventCardProps) {
  return (
    <ScrollReveal
      direction="bottom"
      delay={revealDelay}
      className="relative rounded-3xl border border-maroon/25 bg-white/70 px-5 pb-8 pt-12 text-center shadow-[0_10px_30px_rgba(110,21,28,0.08)]"
    >
      <div className="absolute inset-x-0 -top-8 mx-auto w-80">
        <Image src={ribbonBanner} alt="" aria-hidden="true" className="h-auto w-full" />
        <h3 className="absolute inset-0 flex items-center justify-center pb-2 font-(family-name:--font-crimson-script) text-[1.625rem] text-maroon">
          {weddingEvent.title}
        </h3>
      </div>

      <div className="flex flex-col items-center gap-2 text-[1.125rem] text-foreground">
        <p className="flex items-center gap-2">
          <Image src={iconCalendar} alt="" aria-hidden="true" className="h-5 w-5" />
          {weddingEvent.dateLabel}
        </p>
        <p className="flex items-center gap-2">
          <Image src={iconClock} alt="" aria-hidden="true" className="h-5 w-5" />
          {weddingEvent.timeLabel}
        </p>
      </div>

      <Image src={dividerDiamond} alt="" aria-hidden="true" className="mx-auto my-5 h-auto w-4/5" />

      <p className="text-[1.0625rem] font-semibold uppercase tracking-[0.15em]! text-maroon">
        {weddingEvent.venueName}
      </p>
      <p className="mt-2 text-[1rem] leading-relaxed! text-foreground/80">{weddingEvent.address}</p>

      <a
        href={weddingEvent.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-maroon px-5 py-2 text-[0.9375rem] uppercase tracking-[0.15em] text-maroon transition-colors hover:bg-petal/60"
      >
        <Image src={iconMapPin} alt="" aria-hidden="true" className="h-4.5 w-auto" />
        Lihat Lokasi
      </a>
    </ScrollReveal>
  );
}
