import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloatingPetal } from "@/templates/crimson-rose/components/FloatingPetal";
import { ScriptHeading } from "@/templates/crimson-rose/components/ScriptHeading";
import { WEDDING_EVENTS } from "@/templates/crimson-rose/content";
import waveTopRight from "@/templates/crimson-rose/assets/wave-top-right.webp";
import waveBottom from "@/templates/crimson-rose/assets/wave-bottom.webp";
import petalBlush1 from "@/templates/crimson-rose/assets/petal-blush-1.webp";
import petalBlush3 from "@/templates/crimson-rose/assets/petal-blush-3.webp";
import petalBlush5 from "@/templates/crimson-rose/assets/petal-blush-5.webp";
import { EventCard } from "./EventCard";

/** Detail Acara: kartu Akad Nikah & Resepsi. */
export function EventDetails() {
  return (
    <div className="relative overflow-hidden bg-ivory px-6 pb-40 pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image src={waveTopRight} alt="" className="absolute right-0 top-0 h-auto w-[62%]" />
        <FloatingPetal src={petalBlush1} className="left-[6%] top-[9%] w-7" rotateDegrees={-30} />
        <FloatingPetal src={petalBlush3} className="right-[5%] top-[46%] w-6" rotateDegrees={35} delaySeconds={1.2} />
        <FloatingPetal src={petalBlush5} className="left-[4%] bottom-[20%] w-7" rotateDegrees={-45} delaySeconds={2.4} />
        <Image src={waveBottom} alt="" className="absolute bottom-0 right-0 h-auto w-[115%] max-w-none" />
      </div>

      <div className="relative">
        <ScrollReveal direction="bottom">
          <ScriptHeading label="Detail" scriptTitle="Acara" />
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-12">
          {WEDDING_EVENTS.map((weddingEvent, i) => (
            <EventCard key={weddingEvent.title} weddingEvent={weddingEvent} revealDelay={i * 100} />
          ))}
        </div>
      </div>
    </div>
  );
}
