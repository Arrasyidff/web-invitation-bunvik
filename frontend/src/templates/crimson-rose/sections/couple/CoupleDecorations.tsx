import Image from "next/image";
import { FloatingPetal } from "@/templates/crimson-rose/components/FloatingPetal";
import waveTopRight from "@/templates/crimson-rose/assets/wave-top-right.webp";
import waveBottom from "@/templates/crimson-rose/assets/wave-bottom.webp";
import petalBlush1 from "@/templates/crimson-rose/assets/petal-blush-1.webp";
import petalBlush3 from "@/templates/crimson-rose/assets/petal-blush-3.webp";
import petalBlush4 from "@/templates/crimson-rose/assets/petal-blush-4.webp";
import petalBlush5 from "@/templates/crimson-rose/assets/petal-blush-5.webp";

/** Gelombang merah marun dan kelopak melayang, tanpa bunga/dedaunan. */
export function CoupleDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Image src={waveTopRight} alt="" className="absolute right-0 top-0 h-auto w-[62%]" />

      <FloatingPetal src={petalBlush1} className="left-[6%] top-[11%] w-7" rotateDegrees={-30} />
      <FloatingPetal src={petalBlush4} className="right-[10%] top-[17%] w-7" rotateDegrees={15} delaySeconds={1.4} />
      <FloatingPetal src={petalBlush3} className="right-[5%] top-[44%] w-6" rotateDegrees={45} delaySeconds={0.8} />
      <FloatingPetal src={petalBlush5} className="left-[6%] top-[52%] w-7" rotateDegrees={-50} delaySeconds={2.2} />
      <FloatingPetal src={petalBlush1} className="left-[36%] bottom-[14%] w-6" rotateDegrees={20} delaySeconds={3} />
      <FloatingPetal src={petalBlush4} className="right-[4%] bottom-[16%] w-7" rotateDegrees={-10} delaySeconds={1.8} />

      <Image src={waveBottom} alt="" className="absolute bottom-0 right-0 h-auto w-[115%] max-w-none" />
    </div>
  );
}
