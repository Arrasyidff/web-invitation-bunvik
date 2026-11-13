import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InstagramIcon } from "@/templates/crimson-story/components/InstagramIcon";
import type { CoupleMember } from "@/templates/crimson-story/content";

interface CoupleProfileProps {
  member: CoupleMember;
  revealDirection: "left" | "right";
}

/** Profil satu mempelai: peran dalam cerita, nama lengkap, orang tua, dan Instagram. */
export function CoupleProfile({ member, revealDirection }: CoupleProfileProps) {
  return (
    <ScrollReveal direction={revealDirection} className="text-center">
      <p className="text-[0.75rem] uppercase tracking-[0.35em]! text-antique">{member.roleLabel}</p>
      <h3 className="mt-2 font-(family-name:--font-story-script) text-[2.5rem] leading-[1.15]! text-balance text-maroon">
        {member.fullName}
      </h3>
      <p className="mt-3 text-[1rem] leading-snug! text-ink/85">
        <span className="italic text-ink/60">{member.childLabel}</span>
        <br />
        {member.fatherName}
        <br />
        &amp; {member.motherName}
      </p>
      <a
        href={member.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-maroon/30 px-4 py-1.5 text-[0.875rem] text-maroon transition-colors hover:bg-maroon hover:text-ivory"
      >
        <InstagramIcon className="h-4 w-4" />@{member.instagramHandle}
      </a>
    </ScrollReveal>
  );
}
