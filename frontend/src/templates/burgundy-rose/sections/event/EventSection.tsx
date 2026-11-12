import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CircleIconLink } from "@/templates/burgundy-rose/components/CircleIconLink";
import { ClipboardCheckIcon, MapPinIcon } from "@/templates/burgundy-rose/components/LineIcons";
import { MAPS_URL } from "@/lib/constants";
import type { EventType } from "@/lib/types";
import { EventBigDate } from "./EventBigDate";
import { EventCountdown } from "./EventCountdown";
import { EventVenueArch } from "./EventVenueArch";

interface EventSectionProps {
  eventType: EventType;
}

export function EventSection({ eventType }: EventSectionProps) {
  return (
    <section id="event">
      <ScrollReveal direction="bottom" className="px-6 pb-24 text-center">
        <EventBigDate eventType={eventType} />
        <EventCountdown eventType={eventType} />
        <div className="mt-8 flex justify-center gap-6">
          <CircleIconLink href={MAPS_URL} isExternal label="Lokasi Acara" icon={<MapPinIcon className="h-7 w-7" />} />
          <CircleIconLink href="#rsvp" label="Konfirmasi Kehadiran" icon={<ClipboardCheckIcon className="h-7 w-7" />} />
        </div>
      </ScrollReveal>
      <EventVenueArch eventType={eventType} />
    </section>
  );
}
