import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_SHORT, AKAD_TIME } from "@/lib/constants";
import { EventCountdown } from "./EventCountdown";
import { EventVenue } from "./EventVenue";

export function EventSection() {
  return (
    <section id="event" className="relative w-full px-6.5 mt-7.5">
      <div className="rounded-[12px] px-5 py-15 text-white text-center" style={{ background: 'linear-gradient(142deg, #3B9CDA 0%, #2F83B9 100%)' }}>
        <h2 className="text-[5rem]" style={{ fontFamily: 'var(--font-pinyon)', lineHeight: '0.8' }}>
          Save The Date
        </h2>

        <p className="mt-7.5 text-[1.375rem] uppercase font-medium">
          For The Wedding Of
        </p>
        <h3 className="mt-0.5 text-[2.459rem] font-bold uppercase">
          {GROOM_NAME} &amp; {BRIDE_NAME}
        </h3>
        <p className="mt-0.5 text-[1.375rem] font-medium">{WEDDING_DATE_SHORT}</p>

        <div className="mx-auto mt-7.5 w-3/4 border-t border-white/30" />

        <h4 className="mt-7.5 text-[2.438rem] uppercase font-medium">Akad</h4>
        <p className="mt-0.5 text-[1.25rem] font-medium">{AKAD_TIME}</p>

        <EventCountdown />

        <EventVenue />
      </div>
    </section>
  );
}
