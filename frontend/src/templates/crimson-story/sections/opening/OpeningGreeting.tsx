"use client";

import { motion } from "motion/react";
import { HANDWRITING_VARIANTS, createStaggerVariants } from "@/templates/crimson-story/components/storyMotion";
import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import { OPENING_GREETING } from "@/templates/crimson-story/content";

/** Salam pembuka; paragrafnya diawali huruf kapital besar (drop cap) seperti awal bab buku. */
export function OpeningGreeting() {
  return (
    <StoryReveal direction="bottom" className="mt-14">
      <OrnamentDivider />

      {/* Setiap baris salam "ditulis" bergiliran. */}
      <motion.h3
        variants={createStaggerVariants(0.6, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="-mx-4 mt-8 text-center font-(family-name:--font-story-script) text-[clamp(1.875rem,8.8vw,2.375rem)] leading-[1.25]! text-maroon"
      >
        {OPENING_GREETING.salam.map((line) => (
          <motion.span key={line} variants={HANDWRITING_VARIANTS} className="block whitespace-nowrap">
            {line}
          </motion.span>
        ))}
      </motion.h3>

      <p className="mt-6 text-[1.0625rem] leading-normal! text-ink first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-(family-name:--font-story-script) first-letter:text-[4.25rem] first-letter:leading-[0.8] first-letter:text-maroon">
        {OPENING_GREETING.body}
      </p>
    </StoryReveal>
  );
}
