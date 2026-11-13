import { OpeningDecorations } from "./OpeningDecorations";
import { OpeningVerse } from "./OpeningVerse";
import { OpeningGreeting } from "./OpeningGreeting";

/** Ayat Suci + Pembukaan. */
export function OpeningSection() {
  return (
    <section id="opening" className="relative overflow-hidden bg-ivory px-8 pb-56 pt-44">
      <OpeningDecorations />
      <div className="relative">
        <OpeningVerse />
        <OpeningGreeting />
      </div>
    </section>
  );
}
