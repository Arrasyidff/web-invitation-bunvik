import { OpeningFlowerFrame } from "./OpeningFlowerFrame";
import { OpeningVerseArch } from "./OpeningVerseArch";
import { OpeningGreeting } from "./OpeningGreeting";

export function OpeningSection() {
  return (
    <section
      id="opening"
      className="relative flex flex-col items-center overflow-hidden"
    >
      <OpeningFlowerFrame />
      <OpeningVerseArch />
      <OpeningGreeting />
    </section>
  );
}
