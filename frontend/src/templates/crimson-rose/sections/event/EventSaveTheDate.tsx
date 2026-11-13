import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloatingPetal } from "@/templates/crimson-rose/components/FloatingPetal";
import { ScriptSwash } from "@/templates/crimson-rose/components/ScriptSwash";
import {
  ADD_TO_CALENDAR_URL,
  BRIDE,
  COUNTDOWN_TARGET,
  GROOM,
  WEDDING_DATE_SHORT,
} from "@/templates/crimson-rose/content";
import iconCalendar from "@/templates/crimson-rose/assets/icon-calendar.webp";
import petalBlush1 from "@/templates/crimson-rose/assets/petal-blush-1.webp";
import petalBlush4 from "@/templates/crimson-rose/assets/petal-blush-4.webp";
import petalBlush6 from "@/templates/crimson-rose/assets/petal-blush-6.webp";
import { EventCountdown } from "./EventCountdown";

/** Blok merah marun: nama, tanggal, hitung mundur, dan tombol simpan ke kalender. */
export function EventSaveTheDate() {
  return (
    <div className="relative overflow-hidden bg-maroon px-6 pb-16 pt-10 text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <FloatingPetal src={petalBlush1} className="left-[7%] top-[12%] w-7" rotateDegrees={-25} />
        <FloatingPetal src={petalBlush4} className="right-[8%] top-[30%] w-7" rotateDegrees={20} delaySeconds={1.5} />
        <FloatingPetal src={petalBlush6} className="left-[5%] bottom-[18%] w-8" rotateDegrees={40} delaySeconds={2.5} />
      </div>

      <ScrollReveal
        direction="bottom"
        className="relative mx-auto max-w-88 rounded-t-full border border-ivory/35 px-6 pb-10 pt-16 text-center"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ivory shadow-md">
          <Image src={iconCalendar} alt="" aria-hidden="true" className="h-8 w-8" />
        </span>

        <p className="mt-6 text-[0.9375rem] uppercase tracking-[0.35em]! text-ivory/80">For the wedding of</p>
        <h2 className="mt-2 font-(family-name:--font-crimson-script) text-[3.5rem] leading-[1.05]!">
          {BRIDE.nickname}
          <span className="block text-[2.5rem]">&amp;</span>
          {GROOM.nickname}
        </h2>
        <ScriptSwash className="mt-1 w-40 text-ivory/80" />
        <p className="mt-4 text-[1.5rem] tracking-[0.3em]!">{WEDDING_DATE_SHORT}</p>

        <EventCountdown targetIsoDate={COUNTDOWN_TARGET} />

        <a
          href={ADD_TO_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-2.5 text-[1rem] uppercase tracking-[0.15em] text-maroon shadow-md transition-transform active:scale-95"
        >
          <Image src={iconCalendar} alt="" aria-hidden="true" className="h-5 w-5" />
          Add to Calendar
        </a>
      </ScrollReveal>
    </div>
  );
}
