import { EventSaveTheDate } from "./EventSaveTheDate";
import { EventDetails } from "./EventDetails";

/** Bab III · Hari yang Dinanti: tanggal & hitung mundur, lalu detail akad dan resepsi. */
export function EventSection() {
  return (
    <section id="event" className="scroll-mt-12">
      <EventSaveTheDate />
      <EventDetails />
    </section>
  );
}
