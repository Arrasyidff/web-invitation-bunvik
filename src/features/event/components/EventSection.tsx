import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_SHORT, AKAD_TIME } from "@/lib/constants";
import { EventCountdown } from "./EventCountdown";
import { EventVenue } from "./EventVenue";

export function EventSection() {
  return (
    <section id="event" className="relative w-full px-6 py-14">
      <div className="rounded-2xl px-7 py-10 text-white text-center" style={{ background: 'linear-gradient(142deg, #3B9CDA 0%, #2F83B9 100%)' }}>
        <h2 className="font-[family-name:var(--font-pinyon)] text-[3.5rem] leading-tight">
          Save The Date
        </h2>

        <p className="mt-5 text-[0.7rem] uppercase tracking-[0.25em] font-light">
          For The Wedding Of
        </p>

        <h3 className="mt-1 text-[1.5rem] font-bold uppercase tracking-[0.15em]">
          {GROOM_NAME} &amp; {BRIDE_NAME}
        </h3>

        <p className="mt-2 text-[1rem] tracking-[0.4em]">{WEDDING_DATE_SHORT}</p>

        <div className="mx-auto mt-7 mb-7 w-3/4 border-t border-white/30" />

        <h4 className="text-[1.75rem] uppercase tracking-[0.3em] font-light">Akad</h4>
        <p className="mt-1 text-[0.9375rem] tracking-wide">{AKAD_TIME}</p>

        <EventCountdown />
        <EventVenue />
      </div>
    </section>
  );
}
