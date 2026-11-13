import Image from "next/image";
import { FloatingPetal } from "@/templates/crimson-rose/components/FloatingPetal";
import waveTopRight from "@/templates/crimson-rose/assets/wave-top-right.webp";
import waveBottom from "@/templates/crimson-rose/assets/wave-bottom.webp";
import bouquetRoseBranch from "@/templates/crimson-rose/assets/bouquet-rose-branch.webp";
import bouquetCrimsonCorner from "@/templates/crimson-rose/assets/bouquet-crimson-corner.webp";
import petalBlush1 from "@/templates/crimson-rose/assets/petal-blush-1.webp";
import petalBlush3 from "@/templates/crimson-rose/assets/petal-blush-3.webp";
import petalBlush4 from "@/templates/crimson-rose/assets/petal-blush-4.webp";
import petalBlush7 from "@/templates/crimson-rose/assets/petal-blush-7.webp";
import petalCrimson3 from "@/templates/crimson-rose/assets/petal-crimson-3.webp";

/** Gelombang merah marun, buket mawar, dan kelopak yang melayang. */
export function OpeningDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Image src={waveTopRight} alt="" priority className="absolute right-0 top-0 h-auto w-[62%]" />
      <Image
        src={bouquetRoseBranch}
        alt=""
        priority
        className="absolute -right-[6%] top-0 h-auto w-[62%] -scale-x-100"
      />

      <FloatingPetal src={petalCrimson3} className="right-[24%] top-[13%] w-7" rotateDegrees={-20} />
      <FloatingPetal src={petalBlush1} className="left-[8%] top-[17%] w-8" rotateDegrees={-35} delaySeconds={1.2} />
      <FloatingPetal src={petalBlush4} className="right-[10%] top-[21%] w-8" rotateDegrees={10} delaySeconds={2.4} />
      <FloatingPetal src={petalBlush3} className="left-[4%] top-[29%] w-7" rotateDegrees={40} delaySeconds={0.6} />
      <FloatingPetal src={petalBlush7} className="right-[6%] top-[47%] w-9" rotateDegrees={-15} delaySeconds={1.8} />
      <FloatingPetal src={petalBlush1} className="left-[8%] top-[52%] w-8" rotateDegrees={60} delaySeconds={3} />
      <FloatingPetal src={petalBlush3} className="right-[12%] top-[53%] w-6" rotateDegrees={-50} delaySeconds={2} />

      <Image src={waveBottom} alt="" className="absolute bottom-0 right-0 h-auto w-[115%] max-w-none" />
      <Image
        src={bouquetCrimsonCorner}
        alt=""
        className="absolute -left-[14%] bottom-0 h-auto w-[72%] -rotate-12"
      />
    </div>
  );
}
