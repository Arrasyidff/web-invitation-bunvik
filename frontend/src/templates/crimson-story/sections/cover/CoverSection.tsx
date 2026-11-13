import Image from "next/image";
import { BRIDE, GROOM, WEDDING_DATE_DOTTED } from "@/templates/crimson-story/content";
import bouquetRosesWide from "@/templates/crimson-story/assets/bouquet-roses-wide.webp";
import bouquetRoseBranch from "@/templates/crimson-story/assets/bouquet-rose-branch.webp";
import { CoverGuestCard } from "./CoverGuestCard";

interface CoverSectionProps {
  guestName?: string;
  /** true selama animasi sampul dibuka. */
  isOpening: boolean;
  onOpen: () => void;
}

/** Sampul buku: judul kisah, tanggal, nama tamu, dan tombol untuk mulai membaca. */
export function CoverSection({ guestName, isOpening, onOpen }: CoverSectionProps) {
  return (
    <section
      id="cover"
      className={`relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-maroon px-8 py-16 text-center text-ivory ${
        isOpening ? "animate-story-cover-turn" : ""
      }`}
    >
      {/* Bingkai ganda seperti sampul buku bersampul kain */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-4 rounded-sm border border-antique/60" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-6 rounded-sm border border-ivory/15" />
      <Image
        src={bouquetRoseBranch}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -left-10 h-auto w-[62%] rotate-12 opacity-90"
      />

      <div className="relative flex flex-col items-center animate-fade-in">
        <Image src={bouquetRosesWide} alt="" aria-hidden="true" priority className="h-auto w-52" />

        <p className="mt-6 text-[0.75rem] uppercase tracking-[0.45em]! text-petal">Sebuah Kisah Tentang</p>
        <h1 className="mt-4 font-(family-name:--font-story-script) text-[4.5rem] leading-[0.95]">
          {BRIDE.nickname}
          <span className="block py-1 text-[2.75rem] text-petal">&amp;</span>
          {GROOM.nickname}
        </h1>
        <p className="mt-5 font-(family-name:--font-story-display) text-[1.125rem] tracking-[0.25em]! text-ivory/85">
          {WEDDING_DATE_DOTTED}
        </p>

        <CoverGuestCard guestName={guestName} />

        <button
          type="button"
          onClick={onOpen}
          disabled={isOpening}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-ivory px-7 py-3 text-[0.875rem] font-semibold uppercase tracking-[0.2em] text-maroon shadow-[0_10px_24px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
            <path d="M12 6.5C9.5 4.8 6 4.5 3 5.5v13c3-1 6.5-.7 9 1 2.5-1.7 6-2 9-1v-13c-3-1-6.5-.7-9 1z" />
            <path d="M12 6.5v13" />
          </svg>
          Buka Kisah Kami
        </button>
      </div>
    </section>
  );
}
