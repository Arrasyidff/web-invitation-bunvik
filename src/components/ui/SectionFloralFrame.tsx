import Image from "next/image";
import flowerFrameSrc from "@/app/assets/flower-frame.png";

interface SectionFloralFrameProps {
  className?: string;
  /** Set true for above-the-fold sections (e.g. opening) so images load with priority. */
  isImagePriority?: boolean;
  /** Anchor floral frame to the top or bottom of the positioned parent. */
  placement?: "top" | "bottom";
  /** Mirror both images vertically (e.g. bottom divider). */
  isFlippedVertically?: boolean;
  /**  */
  width?: string
}

export function SectionFloralFrame({
  className,
  isImagePriority = false,
  placement = "top",
  isFlippedVertically = false,
  width = '52%'
}: SectionFloralFrameProps) {
  const placementClassName =
    placement === "top" ? "top-0" : "bottom-0";

  const verticalFlipClassName = isFlippedVertically ? "scale-y-[-1]" : "";

  const rootClassName = [
    "absolute left-0 w-full flex justify-between z-10",
    placementClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <Image
        src={flowerFrameSrc}
        alt="Dekorasi bunga"
        // className={[`w-[${width}]`, verticalFlipClassName].filter(Boolean).join(" ")}
        className={[`w-[${width}]`, verticalFlipClassName].filter(Boolean).join(" ")}
        priority={isImagePriority}
      />
      <Image
        src={flowerFrameSrc}
        alt="Dekorasi bunga"
        className={[`w-[${width}] scale-x-[-1]`, verticalFlipClassName]
          .filter(Boolean)
          .join(" ")}
        priority={isImagePriority}
      />
    </div>
  );
}
