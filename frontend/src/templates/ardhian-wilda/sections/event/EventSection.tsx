import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloralDivider } from "@/templates/ardhian-wilda/components/FloralDivider";
import type { EventType } from "@/lib/types";
import { EventDateHeader } from "./EventDateHeader";
import { EventCountdown } from "./EventCountdown";
import { EventDetail } from "./EventDetail";

interface EventSectionProps {
  eventType: EventType;
}

export function EventSection({ eventType }: EventSectionProps) {
  return (
    <section id="event">
      <div className="bg-wine px-6 py-12 text-center text-cream">
        <ScrollReveal direction="bottom">
          <EventDateHeader />
          <p className="mt-8 text-[0.875rem] uppercase tracking-[0.3em] text-cream/80">Menuju Hari Bahagia</p>
          <EventCountdown eventType={eventType} />
        </ScrollReveal>
      </div>
      <FloralDivider className="-mt-2" />
      <EventDetail eventType={eventType} />
    </section>
  );
}
