import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_LONG } from "@/lib/constants";

export function CoverLeftPanel() {
  return (
    <div className="flex flex-col justify-end p-12 pb-16 relative flex-1 h-full">
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <p className="font-sans text-xs tracking-[0.4em] text-white/80 font-medium uppercase mb-3">
          Undangan Pernikahan
        </p>
        <h1 className="font-sans text-7xl font-bold tracking-wide text-white leading-tight">
          {GROOM_NAME} &amp; {BRIDE_NAME}
        </h1>
        <p className="font-sans text-xs tracking-[0.4em] text-white/80 font-medium uppercase mt-3">
          {WEDDING_DATE_LONG}
        </p>
      </div>
    </div>
  );
}
