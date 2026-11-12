"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { CoverSection } from "@/templates/classic-blue/sections/cover/CoverSection";
import { CoverLeftPanel } from "@/templates/classic-blue/sections/cover/CoverLeftPanel";
import { CoverRightPanel } from "@/templates/classic-blue/sections/cover/CoverRightPanel";
import { OpeningSection } from "@/templates/classic-blue/sections/opening/OpeningSection";
import { CoupleSection } from "@/templates/classic-blue/sections/couple/CoupleSection";
import { EventSection } from "@/templates/classic-blue/sections/event/EventSection";
import { RsvpSection } from "@/templates/classic-blue/sections/rsvp/RsvpSection";
import { WishesSection } from "@/templates/classic-blue/sections/wishes/WishesSection";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";
import { BottomNavbar } from "@/templates/classic-blue/components/BottomNavbar";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import type { InvitationTemplateProps } from "@/lib/types";

import backgroundSrc from "@/app/assets/background.webp";
import blueEnvelopeSrc from "@/templates/classic-blue/assets/blue-envelope.webp";
import candleEnvelopeSrc from "@/templates/classic-blue/assets/candle-envelope.webp";
import coverFlowerLeftSrc from "@/templates/classic-blue/assets/cover-flower-left.webp";
import coverPannelSrc from "@/templates/classic-blue/assets/cover-pannel.webp";
import flowerFrameSrc from "@/templates/classic-blue/assets/flower-frame.webp";
import groomSrc from "@/app/assets/groom.webp";
import brideSrc from "@/app/assets/bride.webp";
import coupleFlowerSrc from "@/templates/classic-blue/assets/couple-flower.webp";

const PRELOAD_IMAGE_URLS = [
  backgroundSrc.src,
  blueEnvelopeSrc.src,
  candleEnvelopeSrc.src,
  coverFlowerLeftSrc.src,
  coverPannelSrc.src,
  flowerFrameSrc.src,
  groomSrc.src,
  brideSrc.src,
  coupleFlowerSrc.src,
];

export function ClassicBlueInvitation({ eventType }: InvitationTemplateProps) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") ?? undefined;

  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [wishesRefreshKey, setWishesRefreshKey] = useState(0);
  const desktopScrollRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsInvitationOpen(true);
      setIsOpening(false);
    }, 1200);
  };

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
          <CoverSection onOpen={handleOpen} guestName={guestName} />
        ) : (
          <>
            <div className="pb-16">
              <OpeningSection />
              <CoupleSection />
              <EventSection eventType={eventType} />
              <RsvpSection onRsvpSubmitSuccess={() => setWishesRefreshKey((k) => k + 1)} />
              <hr className="mx-8 border-t border-black" />
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
              <CoverRightPanel onOpen={handleOpen} guestName={guestName} />
            ) : (
              <div>
                <OpeningSection />
                <CoupleSection />
                <EventSection eventType={eventType} />
                <RsvpSection onRsvpSubmitSuccess={() => setWishesRefreshKey((k) => k + 1)} />
                <hr className="mx-8 border-t border-black" />
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
