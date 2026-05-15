import { SectionFloralFrame } from "@/components/ui/SectionFloralFrame";
import { OpeningVerseArch } from "./OpeningVerseArch";
import { OpeningGreeting } from "./OpeningGreeting";

export function OpeningSection() {
  return (
    <section
      id="opening"
      className="relative flex flex-col items-center overflow-hidden"
    >
      <SectionFloralFrame isImagePriority width="50%" />
      <OpeningVerseArch />
      <OpeningGreeting />
    </section>
  );
}
