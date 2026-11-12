import { VENUE_NAME, VENUE_ADDRESS, MAPS_URL, MAPS_EMBED_URL } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloralGarland } from "@/templates/burgundy-rose/components/FloralArt";
import { CircleIconLink } from "@/templates/burgundy-rose/components/CircleIconLink";
import { MapPinIcon } from "@/templates/burgundy-rose/components/LineIcons";
import type { EventType } from "@/lib/types";

interface EventVenueArchProps {
  eventType: EventType;
}

/** Blok lengkung merah marun berisi nama acara, tempat, dan peta. */
export function EventVenueArch({ eventType }: EventVenueArchProps) {
  const eventTitle = eventType === "akad" ? "Akad Nikah" : "Resepsi";

  return (
    <div className="relative mx-5">
      <FloralGarland className="absolute inset-x-0 -top-20 z-10 -mx-5 w-[calc(100%+2.5rem)]" />

      <div className="rounded-t-full bg-burgundy px-6 pb-12 pt-28 text-center text-blush shadow-xl">
        <ScrollReveal direction="bottom">
          <h2 className="font-display text-[3.5rem] leading-none">{eventTitle}</h2>
          <p className="mt-6 text-[1.0625rem] font-semibold uppercase tracking-wide">{VENUE_NAME}</p>
          <p className="mt-1 text-[0.9375rem] leading-snug text-blush/80">{VENUE_ADDRESS}</p>

          <div className="mt-6 flex justify-center">
            <CircleIconLink
              href={MAPS_URL}
              isExternal
              isInverted
              label="Buka Peta"
              icon={<MapPinIcon className="h-7 w-7" />}
            />
          </div>

          <div className="mt-6 h-56 w-full overflow-hidden rounded-lg border border-blush/20">
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
      </div>

      <FloralGarland className="relative z-10 -mx-5 -mt-12 w-[calc(100%+2.5rem)]" />
    </div>
  );
}
