import { VENUE_NAME, MAPS_URL, MAPS_EMBED_URL } from "@/lib/constants";

export function EventVenue() {
  return (
    <>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7.5 flex items-center justify-center text-white underline-offset-2 text-[1.25rem] uppercase font-medium"
      >
        <span>📍</span>
        <span>{VENUE_NAME}</span>
      </a>

      <div className="mt-[0.563rem] w-full h-84.5 overflow-hidden">
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
