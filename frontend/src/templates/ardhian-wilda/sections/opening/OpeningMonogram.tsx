import { GROOM_NAME, BRIDE_NAME } from "@/lib/constants";

export function OpeningMonogram() {
  return (
    <div className="mt-10 flex items-center justify-center gap-4 text-[3.25rem] font-medium leading-none text-foreground">
      <span>{GROOM_NAME[0]}</span>
      <span className="h-14 w-px bg-foreground/50" />
      <span>{BRIDE_NAME[0]}</span>
    </div>
  );
}
