import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_SHORT, AKAD_TIME, RECEPTION_TIME } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EventCountdown } from "./EventCountdown";
import { EventVenue } from "./EventVenue";

type EventType = "akad" | "resepsi";

interface EventSectionProps {
  eventType?: EventType;
}

export function EventSection({ eventType = "resepsi" }: EventSectionProps) {
  const isAkad = eventType === "akad";
  const eventTitle = isAkad ? "Akad" : "Resepsi";
  const eventTime = isAkad ? AKAD_TIME : RECEPTION_TIME;

  return (
    <section id="event" className="relative w-full px-6.5 mt-15">
      <ScrollReveal direction="bottom">
        <div className="rounded-[12px] px-5 py-15 text-white text-center" style={{ background: 'linear-gradient(142deg, #3B9CDA 0%, #2F83B9 100%)' }}>
          <h2 className="text-[5rem]" style={{ fontFamily: 'var(--font-pinyon)', lineHeight: '0.8' }}>
            Save The Date
          </h2>

          <p className="mt-7.5 text-[1.375rem] uppercase font-medium">
            For The Wedding Of
          </p>
          <h3 className="mt-0.5 text-[2rem] font-bold uppercase">
            {GROOM_NAME} &amp; {BRIDE_NAME}
          </h3>
          <p className="mt-0.5 text-[1.375rem] font-medium">{WEDDING_DATE_SHORT}</p>

          <div className="mx-auto mt-7.5 w-3/4 border-t border-white/30" />

          <h4 className="mt-7.5 text-[2.438rem] uppercase font-medium">{eventTitle}</h4>
          <p className="mt-0.5 text-[1.25rem] font-medium">{eventTime}</p>

          <EventCountdown eventType={eventType} />

          <EventVenue />
        </div>
      </ScrollReveal>
    </section>
  );
}
