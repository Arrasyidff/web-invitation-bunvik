import Image from "next/image";
import flowerFrameSrc from "@/app/assets/flower-frame.png";

interface SectionFloralFrameProps {
  className?: string;
  /** Set true for above-the-fold sections (e.g. opening) so images load with priority. */
  isImagePriority?: boolean;
}

export function SectionFloralFrame({
  className,
  isImagePriority = false,
}: SectionFloralFrameProps) {
  const rootClassName = [
    "absolute top-0 left-0 w-full flex justify-between z-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <Image
        src={flowerFrameSrc}
        alt="Dekorasi bunga"
        className="w-[60%]"
        priority={isImagePriority}
      />
      <Image
        src={flowerFrameSrc}
        alt="Dekorasi bunga"
        className="w-[60%] scale-x-[-1]"
        priority={isImagePriority}
      />
    </div>
  );
}
