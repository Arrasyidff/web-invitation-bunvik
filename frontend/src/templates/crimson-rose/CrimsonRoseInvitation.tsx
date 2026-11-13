import { arabicFont, scriptFont } from "@/templates/crimson-rose/fonts";
import { OpeningSection } from "@/templates/crimson-rose/sections/opening/OpeningSection";
import { CoupleSection } from "@/templates/crimson-rose/sections/couple/CoupleSection";
import { EventSection } from "@/templates/crimson-rose/sections/event/EventSection";
import { RsvpSection } from "@/templates/crimson-rose/sections/rsvp/RsvpSection";

/**
 * Template crimson-rose (undangan Zakiya & Fadel).
 * Sedang dibangun bertahap; saat ini: Ayat Suci + Pembukaan, Profil Mempelai, Save the Date, Detail Acara, RSVP.
 * Props `eventType` belum dipakai karena undangan ini menampilkan akad & resepsi sekaligus.
 */
export function CrimsonRoseInvitation() {
  return (
    <main className={`${arabicFont.variable} ${scriptFont.variable} min-h-screen bg-maroon-dark`}>
      <div className="mx-auto w-full max-w-107.5 bg-ivory shadow-2xl">
        <OpeningSection />
        <CoupleSection />
        <EventSection />
        <RsvpSection />
      </div>
    </main>
  );
}
