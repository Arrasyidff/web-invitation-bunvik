"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { arabicFont, sansFont, scriptFont } from "@/templates/crimson-story/fonts";
import { STORY_CHAPTERS, type ChapterId } from "@/templates/crimson-story/content";
import { ChapterProgressBar } from "@/templates/crimson-story/components/ChapterProgressBar";
import { StorySidePanel } from "@/templates/crimson-story/components/StorySidePanel";
import { CoverSection } from "@/templates/crimson-story/sections/cover/CoverSection";
import { OpeningSection } from "@/templates/crimson-story/sections/opening/OpeningSection";
import { CoupleSection } from "@/templates/crimson-story/sections/couple/CoupleSection";
import { StorySection } from "@/templates/crimson-story/sections/story/StorySection";
import { EventSection } from "@/templates/crimson-story/sections/event/EventSection";
import { RsvpSection } from "@/templates/crimson-story/sections/rsvp/RsvpSection";
import { GiftSection } from "@/templates/crimson-story/sections/gift/GiftSection";
import { ClosingSection } from "@/templates/crimson-story/sections/closing/ClosingSection";

/** Lama animasi sampul dibuka; harus sama dengan `.animate-story-cover-turn` di globals.css. */
const COVER_TURN_DURATION_MS = 900;

function scrollToChapter(chapterId: ChapterId) {
  document.getElementById(chapterId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Template crimson-story (undangan Zakiya & Fadel, versi storytelling).
 * Undangan disusun seperti buku: sampul → Prolog → Bab I–IV → Catatan Kecil → Epilog,
 * dengan daftar isi yang mengikuti bab yang sedang dibaca.
 * Props `eventType` belum dipakai karena undangan ini menampilkan akad & resepsi sekaligus.
 */
export function CrimsonStoryInvitation() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") ?? undefined;

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isCoverOpening, setIsCoverOpening] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState<ChapterId | null>(null);

  useEffect(() => {
    if (!isCoverOpening) return;
    const timeout = setTimeout(() => {
      setIsInvitationOpen(true);
      setIsCoverOpening(false);
      window.scrollTo({ top: 0 });
    }, COVER_TURN_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [isCoverOpening]);

  // Tandai bab yang sedang berada di tengah layar.
  useEffect(() => {
    if (!isInvitationOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveChapterId(visibleEntry.target.id as ChapterId);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    STORY_CHAPTERS.forEach((chapter) => {
      const chapterElement = document.getElementById(chapter.id);
      if (chapterElement) observer.observe(chapterElement);
    });

    return () => observer.disconnect();
  }, [isInvitationOpen]);

  return (
    <main
      className={`${arabicFont.variable} ${scriptFont.variable} ${sansFont.variable} min-h-screen bg-maroon-dark font-(family-name:--font-story-sans) text-ink lg:flex`}
    >
      <StorySidePanel
        activeChapterId={activeChapterId}
        isInvitationOpen={isInvitationOpen}
        onSelectChapter={scrollToChapter}
      />

      <div className="relative mx-auto w-full max-w-107.5 bg-white lg:mr-0 lg:ml-auto">
        {isInvitationOpen ? (
          <div className="animate-fade-in">
            <ChapterProgressBar activeChapterId={activeChapterId} onSelectChapter={scrollToChapter} />
            <OpeningSection />
            <CoupleSection />
            <StorySection />
            <EventSection />
            <RsvpSection />
            <GiftSection />
            <ClosingSection />
          </div>
        ) : (
          <CoverSection guestName={guestName} isOpening={isCoverOpening} onOpen={() => setIsCoverOpening(true)} />
        )}
      </div>
    </main>
  );
}
