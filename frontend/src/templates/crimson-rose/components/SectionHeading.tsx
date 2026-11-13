import type { ReactNode } from "react";

interface SectionHeadingProps {
  icon: ReactNode;
  title: string;
}

/** Ikon di atas judul huruf kapital renggang yang diapit dua garis. */
export function SectionHeading({ icon, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-maroon">
      {icon}
      <div className="mt-3 flex w-full items-center gap-4">
        <span className="h-px flex-1 bg-maroon/60" />
        <h2 className="text-[1.25rem] font-medium uppercase tracking-[0.35em]!">{title}</h2>
        <span className="h-px flex-1 bg-maroon/60" />
      </div>
    </div>
  );
}
