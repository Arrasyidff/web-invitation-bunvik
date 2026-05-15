import { LOVE_STORY_ENTRIES } from "@/lib/constants";

interface StorySectionProps {}

export function StorySection({}: StorySectionProps) {
  return (
    <section id="story" className="w-full px-6 py-14">
      <h2 className="text-center text-[3.5rem] font-bold tracking-wider text-[#343434] leading-none">
        KISAH
        <br />
        CINTA
      </h2>

      <div className="mt-10 flex flex-col gap-8">
        {LOVE_STORY_ENTRIES.map((entry, i) => (
          <p
            key={i}
            className="text-center text-[0.9375rem] text-[#343434] leading-relaxed"
          >
            {entry}
          </p>
        ))}
      </div>
    </section>
  );
}
