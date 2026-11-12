import { SectionFloralFrame } from "@/templates/classic-blue/components/SectionFloralFrame";
import { OpeningVerseArch } from "./OpeningVerseArch";
import { OpeningGreeting } from "./OpeningGreeting";

export function OpeningSection() {
  return (
    <section
      id="opening"
      className="relative flex flex-col items-center justify-start overflow-hidden"
    >
      <SectionFloralFrame isImagePriority />
      <OpeningVerseArch />
      <OpeningGreeting />
    </section>
  );
}
