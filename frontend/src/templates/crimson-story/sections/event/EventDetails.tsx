import { WEDDING_EVENTS } from "@/templates/crimson-story/content";
import { EventCard } from "./EventCard";

/** Kartu Akad Nikah & Resepsi di atas latar putih, mengalir langsung ke Bab IV tanpa pemisah. */
export function EventDetails() {
  return (
    <div className="relative bg-white px-6 pb-12 pt-24">
      <div className="relative flex flex-col gap-14">
        {WEDDING_EVENTS.map((weddingEvent, i) => (
          <EventCard key={weddingEvent.title} weddingEvent={weddingEvent} revealDelay={i * 100} />
        ))}
      </div>
    </div>
  );
}
