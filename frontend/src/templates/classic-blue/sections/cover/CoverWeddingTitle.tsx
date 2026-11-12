import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_DISPLAY } from "@/lib/constants";

export function CoverWeddingTitle() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-sans text-[1.375rem] font-medium tracking-wider text-foreground">
        The Wedding of
      </p>
      <h1 className="font-sans text-[2rem] font-bold tracking-[0.12em] text-foreground">
        {GROOM_NAME.toUpperCase()} &amp; {BRIDE_NAME.toUpperCase()}
      </h1>
      <p className="font-sans text-[1.375rem] font-medium tracking-[0.3em] text-foreground">
        {WEDDING_DATE_DISPLAY}
      </p>
    </div>
  );
}
