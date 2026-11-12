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
    <ScrollReveal direction={revealDirection} className="mt-8 flex flex-col items-center text-center">
      <div className="relative aspect-3/4 w-4/5 overflow-hidden bg-white p-2 shadow-md">
        <div className="relative h-full w-full overflow-hidden">
          <Image src={photoSrc} alt={fullName} fill sizes="320px" className="object-cover object-top" />
        </div>
      </div>
      <h3 className="mt-5 font-display text-[2.25rem] leading-tight text-wine">{fullName}</h3>
      <p className="mt-2 text-[1.0625rem] leading-relaxed text-foreground/80">
        {childOrder} dari
        <br />
        <span className="italic">{parents}</span>
      </p>
    </ScrollReveal>
  );
}
