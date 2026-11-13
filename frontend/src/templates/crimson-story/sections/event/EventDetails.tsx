import { WEDDING_EVENTS } from "@/templates/crimson-story/content";
import { SectionWaves } from "@/templates/crimson-story/components/SectionWaves";
import { EventCard } from "./EventCard";

/** Kartu Akad Nikah & Resepsi di atas latar putih. */
export function EventDetails() {
  return (
    <div className="relative overflow-hidden bg-white px-6 pb-36 pt-36">
      <SectionWaves />
      <div className="relative flex flex-col gap-14">
        {WEDDING_EVENTS.map((weddingEvent, i) => (
          <EventCard key={weddingEvent.title} weddingEvent={weddingEvent} revealDelay={i * 100} />
        ))}
      </div>
    </div>
  );
}
