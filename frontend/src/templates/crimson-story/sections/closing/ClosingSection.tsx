"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ParallaxLayer } from "@/templates/crimson-story/components/ParallaxLayer";
import { BOUNCY_SPRING, HANDWRITING_VARIANTS } from "@/templates/crimson-story/components/storyMotion";
import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
import { ChapterHeading } from "@/templates/crimson-story/components/ChapterHeading";
import { OrnamentDivider } from "@/templates/crimson-story/components/OrnamentDivider";
import { BRIDE, CLOSING_MESSAGE, CLOSING_SALAM, GROOM, getStoryChapter } from "@/templates/crimson-story/content";
import bouquetCrimsonCorner from "@/templates/crimson-story/assets/bouquet-crimson-corner.webp";
import roseCrimsonStem from "@/templates/crimson-story/assets/rose-crimson-stem.webp";

/** Epilog: ucapan terima kasih dan salam penutup, seperti halaman terakhir buku. */
export function ClosingSection() {
  return (
    <section id="closing" className="relative scroll-mt-12 overflow-hidden bg-maroon px-7 pb-28 pt-24 text-center text-ivory">
      <ParallaxLayer className="absolute -bottom-8 -right-16 w-[62%]" distance={-40}>
        <Image src={bouquetCrimsonCorner} alt="" className="h-auto w-full -rotate-12 opacity-90" />
      </ParallaxLayer>

      <div className="relative">
        <ChapterHeading chapter={getStoryChapter("closing")} tone="light" />

        <StoryReveal direction="bottom" delay={100}>
          <p className="mx-auto mt-6 max-w-88 text-[1rem] leading-normal! text-ivory/80">{CLOSING_MESSAGE}</p>
          <p className="mt-6 text-[0.9375rem] text-ivory/85">{CLOSING_SALAM}</p>

          <OrnamentDivider className="mt-10" colorClassName="text-petal/60" />

          <p className="mt-8 text-[0.75rem] uppercase tracking-[0.35em]! text-petal">Kami yang berbahagia</p>
          <motion.p
            variants={HANDWRITING_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="mt-2 font-(family-name:--font-story-script) text-[3.5rem] leading-[1.05]!"
          >
            {BRIDE.nickname} &amp; {GROOM.nickname}
          </motion.p>
          {/* Setangkai mawar yang bergoyang; bisa diketuk. */}
          <motion.div
            aria-hidden="true"
            className="mx-auto mt-6 w-12 origin-bottom cursor-pointer"
            initial={{ rotate: -12 }}
            animate={{ rotate: [-12, -4, -12] }}
            whileTap={{ scale: 1.25, rotate: 8, transition: BOUNCY_SPRING }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={roseCrimsonStem} alt="" className="h-auto w-full" />
          </motion.div>
        </StoryReveal>
      </div>
    </section>
  );
}
