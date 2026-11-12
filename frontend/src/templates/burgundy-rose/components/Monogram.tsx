import { GROOM_NAME, BRIDE_NAME } from "@/lib/constants";

export function Monogram() {
  return (
    <div className="flex items-center justify-center gap-3 text-[2.75rem] leading-none text-blush-rose">
      <span>{GROOM_NAME[0]}</span>
      <span className="relative h-14 w-px bg-blush-rose">
        <span className="absolute left-1/2 top-3 h-px w-3 -translate-x-1/2 bg-blush-rose" />
      </span>
      <span>{BRIDE_NAME[0]}</span>
    </div>
  );
}
