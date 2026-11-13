"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { LOVE_STORY } from "@/templates/crimson-story/content";
import { StoryTimelineEntry } from "./StoryTimelineEntry";

/** Lini masa kisah cinta; garisnya "tergambar" mengikuti seberapa jauh pembaca men-scroll. */
export function StoryTimeline() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 55%"] });
  const lineDrawProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

  return (
    <ol ref={timelineRef} className="relative mt-14">
      {/* Jejak garis yang samar, lalu garis berwarna yang memanjang di atasnya. */}
      <span aria-hidden="true" className="absolute bottom-6 left-4.5 top-2 w-px bg-antique/15" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: lineDrawProgress }}
        className="absolute bottom-6 left-4.5 top-2 w-px origin-top bg-linear-to-b from-antique via-maroon/60 to-maroon/20"
      />
      {LOVE_STORY.map((loveStoryChapter, i) => (
        <StoryTimelineEntry key={loveStoryChapter.title} loveStoryChapter={loveStoryChapter} chapterNumber={i + 1} />
      ))}
    </ol>
  );
}
