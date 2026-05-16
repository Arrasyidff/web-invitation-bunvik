import Image from "next/image";
import {
  GROOM_FULL_NAME,
  BRIDE_FULL_NAME,
  GROOM_CHILD_ORDER,
  BRIDE_CHILD_ORDER,
  GROOM_PARENTS,
  BRIDE_PARENTS,
} from "@/lib/constants";
import groomPhoto from "@/app/assets/groom.jpg";
import bridePhoto from "@/app/assets/bride.jpg";
import coupleFlowerSrc from "@/app/assets/couple-flower.png";
import { CoupleCard } from "./CoupleCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CoupleSection() {
  return (
    <section id="couple" className="relative w-full px-6.5 mt-7.5">
      <CoupleCard
        fullName={GROOM_FULL_NAME}
        childOrder={GROOM_CHILD_ORDER}
        parents={GROOM_PARENTS}
        photoPosition="left"
        photoSrc={groomPhoto}
      />
      <ScrollReveal direction="bottom" className="flex justify-center relative z-10 -my-20">
        <Image
          src={coupleFlowerSrc}
          alt="Dekorasi bunga pasangan"
          className="w-72 h-auto -scale-x-100"
        />
      </ScrollReveal>
      <CoupleCard
        fullName={BRIDE_FULL_NAME}
        childOrder={BRIDE_CHILD_ORDER}
        parents={BRIDE_PARENTS}
        photoPosition="right"
        photoSrc={bridePhoto}
      />
    </section>
  );
}
