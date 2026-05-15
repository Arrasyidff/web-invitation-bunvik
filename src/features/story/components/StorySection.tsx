import { LOVE_STORY_ENTRIES } from "@/lib/constants";

interface StorySectionProps {}

export function StorySection({}: StorySectionProps) {
  return (
    <section id="story" className="w-full px-6.5 mt-7.5">
      <h2 className="text-center text-[5rem] font-bold text-foreground" style={{ lineHeight: '0.8' }}>
        KISAH
        <br />
        CINTA
      </h2>

      <div className="mt-7.5 flex flex-col gap-[0.75rem]">
        {LOVE_STORY_ENTRIES.map((entry, i) => (
          <p
            key={i}
            className="text-center text-[1.125rem] text-foreground leading-relaxed"
          >
            {entry}
          </p>
        ))}
      </div>
    </section>
  );
}
