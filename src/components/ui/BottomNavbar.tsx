"use client";

import { useState, useEffect, RefObject } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavbarProps {
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
  className?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "opening",
    label: "Pembuka",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: "couple",
    label: "Mempelai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: "event",
    label: "Acara",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "rsvp",
    label: "RSVP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "story",
    label: "Kisah",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "wishes",
    label: "Ucapan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export function BottomNavbar({ scrollContainerRef, className }: BottomNavbarProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>("opening");

  useEffect(() => {
    const scrollTarget: EventTarget = scrollContainerRef?.current ?? window;

    const handleScroll = () => {
      const containerTop = scrollContainerRef?.current?.getBoundingClientRect().top ?? 0;
      let currentActiveId = NAV_ITEMS[0].id;

      for (const { id } of NAV_ITEMS) {
        const sectionEl = document.getElementById(id);
        if (!sectionEl) continue;
        const relativeTop = sectionEl.getBoundingClientRect().top - containerTop;
        if (relativeTop <= 80) {
          currentActiveId = id;
        }
      }

      setActiveSectionId(currentActiveId);
    };

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => scrollTarget.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  function handleNavClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={`bg-white/95 backdrop-blur-sm border-t border-[#4299E1]/20 ${className ?? ""}`}>
      <div className="flex justify-around items-center h-14 px-1">
        {NAV_ITEMS.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`flex flex-col items-center gap-0.5 flex-1 py-2 transition-all duration-200 ${
              activeSectionId === id ? "text-[#4299E1]" : "text-gray-400 hover:text-[#4299E1]/60"
            }`}
          >
            <span className={`w-5 h-5 transition-transform duration-200 ${activeSectionId === id ? "scale-110" : ""}`}>
              {icon}
            </span>
            <span className="text-[10px] font-medium leading-tight">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
