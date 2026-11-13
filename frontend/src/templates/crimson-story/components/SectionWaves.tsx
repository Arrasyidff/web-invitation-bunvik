import Image from "next/image";
import type { ReactNode } from "react";
import waveTopRight from "@/templates/crimson-story/assets/wave-top-right.webp";
import waveBottom from "@/templates/crimson-story/assets/wave-bottom.webp";

interface SectionWavesProps {
  /** Hiasan tambahan (buket, kelopak) yang ditumpuk di atas gelombang. */
  children?: ReactNode;
  /** false bila batas atas section memakai pemisah lain (mis. buket). */
  isTopWaveVisible?: boolean;
  /** false bila batas bawah section memakai pemisah lain (mis. buket). */
  isBottomWaveVisible?: boolean;
}

/**
 * Pemisah section putih seperti di crimson-rose: gelombang marun di kanan atas
 * dan di bawah. Gelombang bawah menyambung mulus ke blok marun berikutnya.
 * Section pemakainya perlu `relative overflow-hidden`, padding atas ≥ pt-36,
 * padding bawah ≥ pb-32, dan isinya dibungkus elemen `relative` agar tampil di atas gelombang.
 */
export function SectionWaves({ children, isTopWaveVisible = true, isBottomWaveVisible = true }: SectionWavesProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {isTopWaveVisible && <Image src={waveTopRight} alt="" className="absolute right-0 top-0 h-auto w-[62%]" />}
      {children}
      {isBottomWaveVisible && (
        <Image src={waveBottom} alt="" className="absolute bottom-0 right-0 h-auto w-[115%] max-w-none" />
      )}
    </div>
  );
}
