import Image from "next/image";
import flowerFrameSrc from "@/app/assets/flower-frame.webp";

interface SectionFloralFrameProps {
  className?: string;
  /** Set true for above-the-fold sections (e.g. opening) so images load with priority. */
  isImagePriority?: boolean;
  /** Anchor floral frame to the top or bottom of the positioned parent. */
  placement?: "top" | "bottom";
  /** Mirror both images vertically (e.g. bottom divider). */
  isFlippedVertically?: boolean;
  /** Height of the floral frame (any CSS value, e.g. "200px", "30vh"). */
  height?: string;
}

export function SectionFloralFrame({
  className,
  isImagePriority = false,
  placement = "top",
  isFlippedVertically = false,
  height,
}: SectionFloralFrameProps) {
  const placementClassName =
    placement === "top" ? "top-0" : "bottom-0";

  const verticalFlipClassName = isFlippedVertically ? "scale-y-[-1]" : "";

  const rootClassName = [
    "absolute left-0 w-full h-[11.25rem] z-10",
    placementClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName} style={height ? { height } : undefined}>
      <Image
        src={flowerFrameSrc}
        alt="Dekorasi bunga"
        className={["absolute left-0 top-0", verticalFlipClassName].filter(Boolean).join(" ")}
        style={{ height: "100%", width: "auto" }}
        priority={isImagePriority}
      />
      <Image
        src={flowerFrameSrc}
        alt="Dekorasi bunga"
        className={["absolute right-0 top-0 scale-x-[-1]", verticalFlipClassName].filter(Boolean).join(" ")}
        style={{ height: "100%", width: "auto" }}
        priority={isImagePriority}
      />
    </div>
  );
}
