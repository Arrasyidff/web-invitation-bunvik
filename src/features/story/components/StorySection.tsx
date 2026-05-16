import { LOVE_STORY_ENTRIES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface StorySectionProps {}

const ENTRY_DIRECTIONS = ["left", "right", "left", "right", "left", "right"] as const;

export function StorySection({}: StorySectionProps) {
  return (
    <section id="story" className="w-full px-6.5 mt-15">
      <ScrollReveal direction="bottom">
        <h2 className="text-center text-[5rem] font-bold text-foreground" style={{ lineHeight: '0.8' }}>
          KISAH
          <br />
          CINTA
        </h2>
      </ScrollReveal>

      <div className="mt-7.5 flex flex-col gap-[0.75rem]">
        {LOVE_STORY_ENTRIES.map((entry, i) => (
          <ScrollReveal
            key={i}
            direction={ENTRY_DIRECTIONS[i % ENTRY_DIRECTIONS.length]}
            delay={i * 60}
          >
            <p className="text-center text-[1.125rem] text-foreground leading-relaxed">
              {entry}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
