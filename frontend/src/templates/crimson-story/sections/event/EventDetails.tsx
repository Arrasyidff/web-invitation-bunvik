import { WEDDING_EVENTS } from "@/templates/crimson-story/content";
import { EventCard } from "./EventCard";

/** Kartu Akad Nikah & Resepsi di atas latar putih. */
export function EventDetails() {
  return (
    <div className="flex flex-col gap-8 bg-white px-6 py-16">
      {WEDDING_EVENTS.map((weddingEvent, i) => (
        <EventCard key={weddingEvent.title} weddingEvent={weddingEvent} revealDelay={i * 100} />
      ))}
    </div>
  );
}
