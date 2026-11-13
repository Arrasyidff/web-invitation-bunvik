import Image, { type StaticImageData } from "next/image";
import { ParallaxLayer } from "./ParallaxLayer";

interface FloatingPetalProps {
  src: StaticImageData;
  /** Kelas posisi & ukuran, mis. "left-6 top-40 w-6". */
  className: string;
  rotateDegrees?: number;
  delaySeconds?: number;
  /** Seberapa jauh kelopak "melayang" mengikuti scroll (px). */
  parallaxDistance?: number;
}

/** Kelopak dekoratif yang bergoyang pelan dan melayang mengikuti scroll; murni hiasan. */
export function FloatingPetal({
  src,
  className,
  rotateDegrees = 0,
  delaySeconds = 0,
  parallaxDistance = 60,
}: FloatingPetalProps) {
  return (
    <ParallaxLayer className={`absolute ${className}`} distance={parallaxDistance}>
      <Image
        src={src}
        alt=""
        className="h-auto w-full animate-petal-sway"
        style={
          {
            "--petal-rotate": `${rotateDegrees}deg`,
            animationDelay: `${delaySeconds}s`,
          } as React.CSSProperties
        }
      />
    </ParallaxLayer>
  );
}
