import Image, { type StaticImageData } from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CoupleProfileProps {
  fullName: string;
  childOrder: string;
  parents: string;
  photoSrc: StaticImageData;
  revealDirection: "left" | "right";
}

export function CoupleProfile({ fullName, childOrder, parents, photoSrc, revealDirection }: CoupleProfileProps) {
  return (
    <ScrollReveal direction={revealDirection} className="flex flex-col items-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-blush-rose p-1">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image src={photoSrc} alt={fullName} fill sizes="112px" className="object-cover object-top" />
        </div>
      </div>
      <h3 className="mt-3 text-[1rem] font-semibold leading-snug text-burgundy">{fullName}</h3>
      <p className="mt-1 text-[0.875rem] leading-snug text-foreground/75">
        {childOrder} dari
        <br />
        {parents}
      </p>
    </ScrollReveal>
  );
}
