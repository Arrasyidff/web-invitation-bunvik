import Image, { type StaticImageData } from "next/image";

interface FloatingPetalProps {
  src: StaticImageData;
  /** Kelas posisi & ukuran, mis. "left-6 top-40 w-6". */
  className: string;
  rotateDegrees?: number;
  delaySeconds?: number;
}

/** Kelopak dekoratif yang bergoyang pelan; murni hiasan. */
export function FloatingPetal({ src, className, rotateDegrees = 0, delaySeconds = 0 }: FloatingPetalProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute h-auto animate-petal-sway ${className}`}
      style={
        {
          "--petal-rotate": `${rotateDegrees}deg`,
          animationDelay: `${delaySeconds}s`,
        } as React.CSSProperties
      }
    />
  );
}
