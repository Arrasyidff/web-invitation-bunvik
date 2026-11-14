"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import { BOUNCY_SPRING } from "./storyMotion";
import bouquetRoseBranch from "@/templates/crimson-story/assets/bouquet-rose-branch.webp";
import bouquetRosesWide from "@/templates/crimson-story/assets/bouquet-roses-wide.webp";
import bouquetCrimsonCorner from "@/templates/crimson-story/assets/bouquet-crimson-corner.webp";
import gypsophilaSmall from "@/templates/crimson-story/assets/gypsophila-small.webp";

interface GarlandFlower {
  src: StaticImageData;
  /** Sudut pada setengah lingkaran: 180 = ujung kiri, 90 = puncak, 0 = ujung kanan. */
  angleDegrees: number;
  /** Lebar relatif terhadap lebar lengkungan, dalam persen. */
  widthPercent: number;
  isMirrored?: boolean;
  /** Putaran tambahan agar untaian tidak terlihat seragam. */
  tiltDegrees?: number;
}

/** Urutan dari kiri ke kanan; bunga kecil (gypsophila) mengisi celah di antara buket. */
const GARLAND_FLOWERS: GarlandFlower[] = [
  { src: bouquetCrimsonCorner, angleDegrees: 178, widthPercent: 34, isMirrored: true, tiltDegrees: 10 },
  { src: gypsophilaSmall, angleDegrees: 160, widthPercent: 16 },
  { src: bouquetRoseBranch, angleDegrees: 146, widthPercent: 34, isMirrored: true },
  { src: gypsophilaSmall, angleDegrees: 126, widthPercent: 15, isMirrored: true },
  { src: bouquetCrimsonCorner, angleDegrees: 113, widthPercent: 32, tiltDegrees: -8 },
  { src: bouquetRosesWide, angleDegrees: 90, widthPercent: 38 },
  { src: bouquetCrimsonCorner, angleDegrees: 67, widthPercent: 32, isMirrored: true, tiltDegrees: 8 },
  { src: gypsophilaSmall, angleDegrees: 54, widthPercent: 15 },
  { src: bouquetRoseBranch, angleDegrees: 34, widthPercent: 34 },
  { src: gypsophilaSmall, angleDegrees: 20, widthPercent: 16, isMirrored: true },
  { src: bouquetCrimsonCorner, angleDegrees: 2, widthPercent: 34, tiltDegrees: -10 },
];

/**
 * Untaian bunga penuh yang menempel di sepanjang lengkungan ArchFrame.
 * Dipasang di atas kotak persegi seukuran lingkaran lengkungan, jadi posisi tiap bunga
 * cukup dihitung dari sudutnya (cos/sin) dan tetap pas di semua lebar layar.
 * Bunga mekar bergiliran dari kiri ke kanan saat lengkungan terlihat.
 */
export function ArchGarland() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-4 top-16 aspect-square"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {GARLAND_FLOWERS.map((flower, i) => {
        const angleRadians = (flower.angleDegrees * Math.PI) / 180;
        // Sumbu bunga mengikuti arah keluar dari pusat lengkungan.
        const rotateDegrees = 90 - flower.angleDegrees + (flower.tiltDegrees ?? 0);

        return (
          <div
            key={`${flower.angleDegrees}-${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${50 + 50 * Math.cos(angleRadians)}%`,
              top: `${50 - 50 * Math.sin(angleRadians)}%`,
              width: `${flower.widthPercent}%`,
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.4, rotate: rotateDegrees - 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: rotateDegrees,
                  transition: { ...BOUNCY_SPRING, delay: i * 0.08 },
                },
              }}
            >
              <Image src={flower.src} alt="" className={`h-auto w-full ${flower.isMirrored ? "-scale-x-100" : ""}`} />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
