"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, type Variants } from "motion/react";
import { BRIDE, GROOM, type CoupleMember } from "@/templates/crimson-story/content";
import { BOUNCY_SPRING, SOFT_SPRING } from "@/templates/crimson-story/components/storyMotion";
import brideIllustration from "@/templates/crimson-story/assets/illustration-bride.webp";
import groomIllustration from "@/templates/crimson-story/assets/illustration-groom.webp";
import gypsophilaSmall from "@/templates/crimson-story/assets/gypsophila-small.webp";

interface CoupleIllustrationProps {
  member: CoupleMember;
  illustrationSrc: StaticImageData;
  /** Arah miring saat disentuh: mempelai wanita ke kiri, pria ke kanan. */
  tiltDirection: -1 | 1;
  revealDelaySeconds: number;
}

/**
 * Ilustrasi satu mempelai di atas lengkung merah muda polos; kepala sedikit keluar dari lengkungan.
 * Lengkung "tumbuh" dari bawah, ilustrasi naik menyusul; saat disentuh/di-hover ilustrasi
 * terangkat dan miring sedikit.
 */
function CoupleIllustration({ member, illustrationSrc, tiltDirection, revealDelaySeconds }: CoupleIllustrationProps) {
  const archVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { ...SOFT_SPRING, delay: revealDelaySeconds } },
    active: { scale: 1.05, transition: BOUNCY_SPRING },
  };
  const figureVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...SOFT_SPRING, delay: revealDelaySeconds + 0.25 } },
    active: { y: -10, rotate: 4 * tiltDirection, transition: BOUNCY_SPRING },
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      initial="hidden"
      whileInView="visible"
      whileHover="active"
      whileTap="active"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div
        variants={archVariants}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 top-[22%] origin-bottom rounded-t-full bg-petal/70"
      />
      <motion.div variants={figureVariants} className="relative">
        <Image
          src={illustrationSrc}
          alt={`Ilustrasi ${member.fullName}`}
          sizes="180px"
          className="mx-auto h-auto w-[88%]"
        />
      </motion.div>
    </motion.div>
  );
}

/** Ilustrasi mempelai wanita dan pria berdampingan, disatukan segel "&" di tengah yang bisa diketuk. */
export function CouplePortraits() {
  return (
    <div className="relative mx-auto mt-12 max-w-80">
      <div className="grid grid-cols-2 gap-3">
        <CoupleIllustration member={BRIDE} illustrationSrc={brideIllustration} tiltDirection={-1} revealDelaySeconds={0} />
        <CoupleIllustration member={GROOM} illustrationSrc={groomIllustration} tiltDirection={1} revealDelaySeconds={0.15} />
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <motion.span
          aria-hidden="true"
          className="flex h-14 w-14 cursor-pointer select-none items-center justify-center rounded-full bg-maroon font-(family-name:--font-story-script) text-[2rem] leading-none text-ivory"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.12, rotate: 12 }}
          whileTap={{ scale: 0.9, rotate: -12 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ ...BOUNCY_SPRING, delay: 0 }}
        >
          &amp;
        </motion.span>
      </div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-[56%] w-16 origin-bottom-left"
        initial={{ rotate: 12 }}
        animate={{ rotate: [12, 20, 12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={gypsophilaSmall} alt="" className="h-auto w-full" />
      </motion.div>
    </div>
  );
}
