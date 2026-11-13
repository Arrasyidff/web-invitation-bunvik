import { EventSaveTheDate } from "./EventSaveTheDate";
import { EventDetails } from "./EventDetails";

/** Acara: Save the Date lalu Detail Acara (akad & resepsi). */
export function EventSection() {
  return (
    <section id="event">
      <EventSaveTheDate />
      <EventDetails />
    </section>
  );
}
