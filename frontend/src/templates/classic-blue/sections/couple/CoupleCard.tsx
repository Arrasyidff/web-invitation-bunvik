import Image, { StaticImageData } from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CoupleCardProps {
  fullName: string;
  childOrder: string;
  parents: string;
  photoPosition: "left" | "right";
  photoSrc: StaticImageData;
}

export function CoupleCard({ fullName, childOrder, parents, photoPosition, photoSrc }: CoupleCardProps) {
  const archClass = photoPosition === "left" ? "arch-top" : "arch-bottom";
  const photoDirection = photoPosition === "left" ? "left" : "right";
  const textDirection = photoPosition === "left" ? "right" : "left";

  return (
    <div className={`grid grid-cols-2 gap-2.5 items-center ${photoPosition === "right" ? "[&>*:first-child]:order-2 [&>*:last-child]:order-1" : ""}`}>
      <ScrollReveal direction={photoDirection}>
        <div className={`relative aspect-3/5 w-full overflow-hidden ${archClass} shadow-md`}>
          <Image
            src={photoSrc}
            alt={fullName}
            fill
            className="object-cover object-top"
          />
        </div>
      </ScrollReveal>
      <ScrollReveal direction={textDirection} delay={100}>
        <div className="text-center">
          <h2 className="text-[1.25rem] font-bold uppercase tracking-widest text-foreground">
            {fullName}
          </h2>
          <p className="mt-3 text-[1.125rem] text-foreground">
            {childOrder} dari {parents}
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
