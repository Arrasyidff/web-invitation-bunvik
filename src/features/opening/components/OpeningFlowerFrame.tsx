import Image from "next/image";
import flowerFrameSrc from "@/app/assets/flower-frame.png";

export function OpeningFlowerFrame() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between z-10">
      <Image
        src={flowerFrameSrc}
        alt="Dekorasi bunga"
        className="w-[60%]"
        priority
      />
      <Image
        src={flowerFrameSrc}
        alt="Dekorasi bunga"
        className="w-[60%] scale-x-[-1]"
        priority
      />
    </div>
  );
}
