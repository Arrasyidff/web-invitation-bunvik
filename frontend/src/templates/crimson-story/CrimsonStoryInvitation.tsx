"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { arabicFont, sansFont, scriptFont, dateFont } from "@/templates/crimson-story/fonts";
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

function scrollToChapter(chapterId: ChapterId) {
  document.getElementById(chapterId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Template crimson-story (undangan Zakiya & Fadel, versi storytelling).
 * Undangan disusun seperti buku: sampul → Prolog → Bab I–IV → Catatan Kecil → Epilog,
 * dengan daftar isi yang mengikuti bab yang sedang dibaca.
 * Animasi memakai `motion`; `MotionConfig reducedMotion="user"` mematikan gerak besar
 * bagi pengunjung yang memilih "kurangi gerakan" di perangkatnya.
 * Props `eventType` belum dipakai karena undangan ini menampilkan akad & resepsi sekaligus.
 */
export function CrimsonStoryInvitation() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") ?? undefined;

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  /** true setelah sampul selesai dibalik dan section-section bab sudah terpasang di DOM. */
  const [isStoryMounted, setIsStoryMounted] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState<ChapterId | null>(null);

  // Tandai bab yang sedang berada di tengah layar.
  useEffect(() => {
    if (!isStoryMounted) return;

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
  }, [isStoryMounted]);

  function handleCoverExitComplete() {
    window.scrollTo({ top: 0 });
    setIsStoryMounted(true);
  }

  return (
    <MotionConfig reducedMotion="user">
      <main
        className={`${arabicFont.variable} ${scriptFont.variable} ${sansFont.variable} ${dateFont.variable} min-h-screen bg-maroon-dark font-(family-name:--font-story-sans) text-ink lg:flex`}
      >
        <StorySidePanel
          activeChapterId={activeChapterId}
          isInvitationOpen={isInvitationOpen}
          onSelectChapter={scrollToChapter}
        />

        <div className="relative mx-auto w-full max-w-107.5 bg-white lg:mr-0 lg:ml-auto">
          {/* Di luar pembungkus beranimasi: elemen `fixed` tidak boleh berada di dalam elemen ber-transform. */}
          {isStoryMounted && (
            <ChapterProgressBar activeChapterId={activeChapterId} onSelectChapter={scrollToChapter} />
          )}

          {/* Sampul "dibalik" dulu sampai selesai, baru isi buku masuk. */}
          <AnimatePresence mode="wait" onExitComplete={handleCoverExitComplete}>
            {isInvitationOpen ? (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <OpeningSection />
                <CoupleSection />
                <StorySection />
                <EventSection />
                <RsvpSection />
                <GiftSection />
                <ClosingSection />
              </motion.div>
            ) : (
              <CoverSection key="cover" guestName={guestName} onOpen={() => setIsInvitationOpen(true)} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </MotionConfig>
  );
}
