import { EventSaveTheDate } from "./EventSaveTheDate";
import { EventDetails } from "./EventDetails";
import { FloralSeam } from "@/templates/crimson-story/components/FloralSeam";

/**
 * Bab III · Hari yang Dinanti: lengkungan marun berisi tanggal & hitung mundur,
 * buket di kaki lengkungan, lalu detail akad dan resepsi di latar putih.
 */
export function EventSection() {
  return (
    <section id="event" className="scroll-mt-12">
      <EventSaveTheDate />
      <FloralSeam variant="posy" />
      <EventDetails />
    </section>
  );
}
