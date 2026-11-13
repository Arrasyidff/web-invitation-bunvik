"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { SOFT_SPRING } from "./storyMotion";

type StoryRevealDirection = "bottom" | "left" | "right" | "zoom";

interface StoryRevealProps {
  children: ReactNode;
  direction?: StoryRevealDirection;
  /** Jeda sebelum muncul, dalam milidetik. */
  delay?: number;
  className?: string;
  /** true: kartu sedikit terangkat saat di-hover/ditekan. */
  isLiftedOnHover?: boolean;
}

const HIDDEN_OFFSET: Record<StoryRevealDirection, { x?: number; y?: number; scale?: number }> = {
  bottom: { y: 44 },
  left: { x: -56 },
  right: { x: 56 },
  zoom: { scale: 0.85 },
};

/** Muncul saat di-scroll dengan pegas + blur yang memudar (pengganti ScrollReveal khusus template ini). */
export function StoryReveal({
  children,
  direction = "bottom",
  delay = 0,
  className = "",
  isLiftedOnHover = false,
}: StoryRevealProps) {
  const delaySeconds = delay / 1000;
  const fadeTransition = { duration: 0.7, ease: "easeOut", delay: delaySeconds } as const;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(6px)", ...HIDDEN_OFFSET[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 }}
      whileHover={isLiftedOnHover ? { y: -6 } : undefined}
      whileTap={isLiftedOnHover ? { y: -3 } : undefined}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ ...SOFT_SPRING, delay: delaySeconds, opacity: fadeTransition, filter: fadeTransition }}
    >
      {children}
    </motion.div>
  );
}
