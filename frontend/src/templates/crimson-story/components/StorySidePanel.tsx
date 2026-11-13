import Image from "next/image";
import { BRIDE, GROOM, WEDDING_DATE_DOTTED, type ChapterId } from "@/templates/crimson-story/content";
import bouquetRosesWide from "@/templates/crimson-story/assets/bouquet-roses-wide.webp";
import { ChapterList } from "./ChapterList";
import { OrnamentDivider } from "./OrnamentDivider";

interface StorySidePanelProps {
  activeChapterId: ChapterId | null;
  isInvitationOpen: boolean;
  onSelectChapter: (chapterId: ChapterId) => void;
}

/** Panel kiri (desktop), fixed agar tidak ikut ter-scroll: judul buku dan daftar isi yang mengikuti bab yang dibaca. */
export function StorySidePanel({ activeChapterId, isInvitationOpen, onSelectChapter }: StorySidePanelProps) {
  return (
    <aside className="fixed inset-y-0 left-0 right-107.5 hidden items-center justify-center overflow-y-auto px-10 py-10 text-ivory lg:flex">
      <div className="w-full max-w-sm">
        <Image src={bouquetRosesWide} alt="" aria-hidden="true" className="mx-auto h-auto w-56 opacity-95" />

        <p className="mt-6 text-center text-[0.75rem] uppercase tracking-[0.4em]! text-petal">Sebuah Kisah Tentang</p>
        <h1 className="mt-3 text-center font-(family-name:--font-story-script) text-[4rem] leading-[1.05]">
          {BRIDE.nickname} <span className="text-[2.75rem] text-petal">&amp;</span> {GROOM.nickname}
        </h1>
        <p className="mt-3 text-center text-[1.0625rem] tracking-[0.2em]! text-ivory/80">
          {WEDDING_DATE_DOTTED}
        </p>

        <OrnamentDivider className="mt-8" colorClassName="text-petal/60" />

        {isInvitationOpen ? (
          <nav aria-label="Daftar isi" className="mt-6">
            <p className="mb-2 text-[0.75rem] uppercase tracking-[0.3em] text-ivory/50">Daftar Isi</p>
            <ChapterList activeChapterId={activeChapterId} onSelectChapter={onSelectChapter} tone="light" />
          </nav>
        ) : (
          <p className="mt-6 text-center text-[1rem] text-ivory/70">
            Buka sampul di samping untuk mulai membaca.
          </p>
        )}
      </div>
    </aside>
  );
}
