"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxLayerProps {
  children: ReactNode;
  /** Kelas posisi & ukuran, mis. "absolute left-6 top-40 w-6". */
  className: string;
  /** Jarak geser vertikal (px) selama elemen melintasi layar; negatif = arah berlawanan. */
  distance?: number;
}

/** Lapisan hiasan yang bergerak sedikit lebih lambat/cepat dari scroll, memberi kesan kedalaman. */
export function ParallaxLayer({ children, className, distance = 40 }: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: layerRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={layerRef} aria-hidden="true" className={`pointer-events-none ${className}`} style={{ y: parallaxY }}>
      {children}
    </motion.div>
  );
}
