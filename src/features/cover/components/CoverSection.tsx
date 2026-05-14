import Image from "next/image";
import coverFlowerLeft from "@/app/assets/cover-flower-left.png";
import coverFlowerRight from "@/app/assets/cover-flower-right.png";

interface CoverSectionProps {
  onOpen: () => void;
}

export function CoverSection({ onOpen }: CoverSectionProps) {
  return (
    <section
      id="cover"
      className="min-h-screen flex flex-col items-center justify-space-between overflow-hidden bg-red-500"
    >
      <div className="bg-blue-500 w-full">
        <Image src={coverFlowerLeft} alt="Cover" width={280} />
      </div>
      {/* <Image src={coverFlowerRight} alt="Cover" width={1000} height={1000} /> */}
    </section>
  );
}
