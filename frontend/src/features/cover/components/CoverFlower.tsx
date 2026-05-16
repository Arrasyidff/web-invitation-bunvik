import Image from "next/image";
import coverFlowerLeft from "@/app/assets/cover-flower-left.png";

interface CoverFlowerProps {
  isFlipped?: boolean;
}

export function CoverFlower({ isFlipped = false }: CoverFlowerProps) {
  return (
    <div className="relative w-full h-[20vh]">
      <Image
        src={coverFlowerLeft}
        alt="Flower decoration"
        fill
        className={`object-contain object-top-left ${isFlipped ? "scale-x-[-1] scale-y-[-1]" : ""}`}
        priority={!isFlipped}
      />
    </div>
  );
}
