import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_DISPLAY } from "@/lib/constants";

/** Blok pembuka berbentuk amplop merah anggur dengan nama mempelai di tutupnya. */
export function EnvelopeHeader() {
  return (
    <div className="relative h-80 overflow-hidden bg-linear-to-b from-wine-light to-wine">
      <svg
        viewBox="0 0 400 230"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[78%] w-full drop-shadow-[0_8px_10px_rgba(0,0,0,0.35)]"
      >
        <defs>
          <linearGradient id="ardhian-envelope-flap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a4250" />
            <stop offset="100%" stopColor="#6a2735" />
          </linearGradient>
        </defs>
        <path d="M0 0H400V122L224 214Q200 226 176 214L0 122Z" fill="url(#ardhian-envelope-flap)" />
      </svg>

      <div className="absolute inset-x-0 top-10 flex flex-col items-center text-cream">
        <p className="font-display text-[3.25rem] leading-none">{GROOM_NAME}</p>
        <p className="font-display text-[1.75rem] leading-none">&amp;</p>
        <p className="font-display text-[3.25rem] leading-none">{BRIDE_NAME}</p>
      </div>

      <p className="absolute inset-x-0 bottom-6 text-center text-[1rem] tracking-[0.3em] text-cream/90">
        {WEDDING_DATE_DISPLAY}
      </p>
    </div>
  );
}
