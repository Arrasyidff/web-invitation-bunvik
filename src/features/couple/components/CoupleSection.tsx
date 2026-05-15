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

export function CoupleSection() {
  const groomInitial = GROOM_NAME.charAt(0);
  const brideInitial = BRIDE_NAME.charAt(0);

  return (
    <section id="couple" className="relative w-full px-6 pt-16 pb-20">
      {/* Groom — photo left, text right */}
      <div className="flex items-center gap-5">
        <div className="w-[44%] aspect-[3/4] bg-[#E8E2D7] arch-top flex-shrink-0" />
        <div className="flex-1 text-center">
          <h2 className="text-[1.25rem] font-bold uppercase tracking-widest leading-tight text-foreground">
            {GROOM_FULL_NAME}
          </h2>
          <p className="mt-3 text-[1.0625rem] text-foreground leading-snug">
            {GROOM_CHILD_ORDER} dari {GROOM_PARENTS}
          </p>
        </div>
      </div>

      {/* Monogram divider */}
      <div className="flex justify-center my-10">
        <div className="w-20 h-20 rounded-full bg-[#E8E2D7] flex items-center justify-center">
          <span className="text-[1.625rem] font-light tracking-tight text-foreground">
            {groomInitial}
            <span className="font-light italic">{brideInitial}</span>
          </span>
        </div>
      </div>

      {/* Bride — text left, photo right */}
      <div className="flex items-center gap-5">
        <div className="flex-1 text-center">
          <h2 className="text-[1.25rem] font-bold uppercase tracking-widest leading-tight text-foreground">
            {BRIDE_FULL_NAME}
          </h2>
          <p className="mt-3 text-[1.0625rem] text-foreground leading-snug">
            {BRIDE_CHILD_ORDER} dari {BRIDE_PARENTS}
          </p>
        </div>
        <div className="w-[44%] aspect-[3/4] bg-[#E8E2D7] arch-bottom flex-shrink-0" />
      </div>
    </section>
  );
}
