"use client";

import { useState, useEffect } from "react";
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
      <LoadingOverlay isLoading={isLoading} />

      {/* Mobile layout */}
      <div className="md:hidden">
        {!isInvitationOpen ? (
          <CoverSection onOpen={() => setIsInvitationOpen(true)} />
        ) : (
          <div>
            <OpeningSection />
            <CoupleSection />
            <EventSection />
            <RsvpSection />
            <StorySection />
            <WishesSection />
          </div>
        )}
      </div>

      {/* Desktop/tablet layout */}
      <div className="hidden md:flex h-screen">
        <CoverLeftPanel />
        <div className="w-100 h-full overflow-y-auto shrink-0">
          {!isInvitationOpen ? (
            <CoverRightPanel onOpen={() => setIsInvitationOpen(true)} />
          ) : (
            <div>
              <OpeningSection />
              <CoupleSection />
              <EventSection />
              <RsvpSection />
              <StorySection />
              <WishesSection />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
