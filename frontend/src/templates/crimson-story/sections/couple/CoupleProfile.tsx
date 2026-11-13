"use client";

import { motion } from "motion/react";
import { HANDWRITING_VARIANTS, PRESS_INTERACTION } from "@/templates/crimson-story/components/storyMotion";
import { StoryReveal } from "@/templates/crimson-story/components/StoryReveal";
import { InstagramIcon } from "@/templates/crimson-story/components/InstagramIcon";
import type { CoupleMember } from "@/templates/crimson-story/content";

interface CoupleProfileProps {
  member: CoupleMember;
  revealDirection: "left" | "right";
}

/** Profil satu mempelai: peran dalam cerita, nama lengkap, orang tua, dan Instagram. */
export function CoupleProfile({ member, revealDirection }: CoupleProfileProps) {
  return (
    <StoryReveal direction={revealDirection} className="text-center">
      <p className="text-[0.75rem] uppercase tracking-[0.35em]! text-antique">{member.roleLabel}</p>
      {/* Pemicu di pembungkus: elemen yang ter-clip selebar 0 tidak pernah dianggap "terlihat" oleh browser. */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <motion.h3
          variants={HANDWRITING_VARIANTS}
          className="mt-2 font-(family-name:--font-story-script) text-[2.5rem] leading-[1.15]! text-balance text-maroon"
        >
          {member.fullName}
        </motion.h3>
      </motion.div>
      <p className="mt-3 text-[1rem] leading-snug! text-ink/85">
        <span className="text-ink/60">{member.childLabel}</span>
        <br />
        {member.fatherName}
        <br />
        &amp; {member.motherName}
      </p>
      <motion.a
        {...PRESS_INTERACTION}
        href={member.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-maroon/5 px-4 py-1.5 text-[0.875rem] text-maroon transition-colors hover:bg-maroon hover:text-ivory"
      >
        <InstagramIcon className="h-4 w-4" />@{member.instagramHandle}
      </motion.a>
    </StoryReveal>
  );
}
