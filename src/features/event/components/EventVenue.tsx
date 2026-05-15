import { VENUE_NAME, MAPS_URL, MAPS_EMBED_URL } from "@/lib/constants";

export function EventVenue() {
  return (
    <>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 flex items-center justify-center gap-2 text-white underline underline-offset-2 text-[0.8125rem] uppercase tracking-widest"
      >
        <span>📍</span>
        <span>{VENUE_NAME}</span>
      </a>

      <div className="mt-4 w-full h-48 overflow-hidden rounded-lg">
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Lokasi ${VENUE_NAME}`}
        />
      </div>
    </>
  );
}
