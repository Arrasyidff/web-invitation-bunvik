"use client";

import { useState, useEffect, useRef } from "react";
import { CoverSection } from "@/features/cover/components/CoverSection";
import { CoverLeftPanel } from "@/features/cover/components/CoverLeftPanel";
import { CoverRightPanel } from "@/features/cover/components/CoverRightPanel";
import { OpeningSection } from "@/features/opening/components/OpeningSection";
import { CoupleSection } from "@/features/couple/components/CoupleSection";
import { EventSection } from "@/features/event/components/EventSection";
import { RsvpSection } from "@/features/rsvp/components/RsvpSection";
import { StorySection } from "@/features/story/components/StorySection";
import { WishesSection } from "@/features/wishes/components/WishesSection";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";
import { BottomNavbar } from "@/components/ui/BottomNavbar";
import { MusicPlayer } from "@/components/ui/MusicPlayer";

import backgroundSrc from "@/app/assets/background.png";
import blueEnvelopeSrc from "@/app/assets/blue-envelope.png";
import candleEnvelopeSrc from "@/app/assets/candle-envelope.png";
import coverFlowerLeftSrc from "@/app/assets/cover-flower-left.png";
import flowerFrameSrc from "@/app/assets/flower-frame.png";

const PRELOAD_IMAGE_URLS = [
  backgroundSrc.src,
  blueEnvelopeSrc.src,
  candleEnvelopeSrc.src,
  coverFlowerLeftSrc.src,
  flowerFrameSrc.src,
];

export default function HomePage() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsInvitationOpen(true);
      setIsOpening(false);
    }, 1200);
  };
  const [wishesRefreshKey, setWishesRefreshKey] = useState(0);
  const desktopScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const MINIMUM_LOAD_MS = 800;
    const startTime = Date.now();
    let loadedCount = 0;
    const totalImages = PRELOAD_IMAGE_URLS.length;

    const finish = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MINIMUM_LOAD_MS - elapsed);
      setTimeout(() => setIsLoading(false), remaining);
    };

    const safetyTimer = setTimeout(finish, 5000);

    const handleImageSettled = () => {
      loadedCount += 1;
      if (loadedCount >= totalImages) {
        clearTimeout(safetyTimer);
        finish();
      }
    };

    PRELOAD_IMAGE_URLS.forEach((src) => {
      const img = new window.Image();
      img.onload = handleImageSettled;
      img.onerror = handleImageSettled;
      img.src = src;
    });

    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <main>
      <LoadingOverlay isLoading={isLoading || isOpening} />
      {!isLoading && isInvitationOpen && <MusicPlayer src="/music.mp3" />}

      {/* Mobile layout */}
      <div className="md:hidden bg-white/75">
        {!isInvitationOpen ? (
          <CoverSection onOpen={handleOpen} />
        ) : (
          <>
            <div className="pb-16">
              <OpeningSection />
              <CoupleSection />
              <EventSection />
              <RsvpSection onRsvpSubmitSuccess={() => setWishesRefreshKey((k) => k + 1)} />
              <hr className="mx-8 border-t border-black" />
              {/* <StorySection />
              <hr className="mx-8 border-t border-black" /> */}
              <WishesSection refreshKey={wishesRefreshKey} />
            </div>
            <BottomNavbar className="fixed bottom-0 left-0 right-0 z-50" />
          </>
        )}
      </div>

      {/* Desktop/tablet layout */}
      <div className="hidden md:flex h-screen bg-white/75">
        <CoverLeftPanel />
        <div className="w-112.5 h-full shrink-0 flex flex-col">
          <div ref={desktopScrollRef} className="flex-1 overflow-y-auto">
            {!isInvitationOpen ? (
              <CoverRightPanel onOpen={handleOpen} />
            ) : (
              <div>
                <OpeningSection />
                <CoupleSection />
                <EventSection />
                <RsvpSection onRsvpSubmitSuccess={() => setWishesRefreshKey((k) => k + 1)} />
                <hr className="mx-8 border-t border-black" />
                {/* <StorySection />
                <hr className="mx-8 border-t border-black" /> */}
                <WishesSection refreshKey={wishesRefreshKey} />
              </div>
            )}
          </div>
          {isInvitationOpen && (
            <BottomNavbar scrollContainerRef={desktopScrollRef} />
          )}
        </div>
      </div>
    </main>
  );
}
