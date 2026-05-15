import {
  GROOM_FULL_NAME,
  BRIDE_FULL_NAME,
  GROOM_CHILD_ORDER,
  BRIDE_CHILD_ORDER,
  GROOM_PARENTS,
  BRIDE_PARENTS,
  GROOM_NAME,
  BRIDE_NAME,
} from "@/lib/constants";
import { CoupleCard } from "./CoupleCard";
import { CoupleMonogram } from "./CoupleMonogram";

export function CoupleSection() {
  return (
    <section id="couple" className="relative w-full px-6 pt-16 pb-20">
      <CoupleCard
        fullName={GROOM_FULL_NAME}
        childOrder={GROOM_CHILD_ORDER}
        parents={GROOM_PARENTS}
        photoPosition="left"
      />
      <CoupleMonogram
        groomInitial={GROOM_NAME.charAt(0)}
        brideInitial={BRIDE_NAME.charAt(0)}
      />
      <CoupleCard
        fullName={BRIDE_FULL_NAME}
        childOrder={BRIDE_CHILD_ORDER}
        parents={BRIDE_PARENTS}
        photoPosition="right"
      />
    </section>
  );
}
