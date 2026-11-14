import Image from "next/image";
import { StoryReveal } from "./StoryReveal";
import bouquetRoseBranch from "@/templates/crimson-story/assets/bouquet-rose-branch.webp";
import bouquetRosesWide from "@/templates/crimson-story/assets/bouquet-roses-wide.webp";
import bouquetCrimsonCorner from "@/templates/crimson-story/assets/bouquet-crimson-corner.webp";

interface FloralSeamProps {
  /** "garland": untaian selebar layar; "posy": satu buket kecil di tengah. */
  variant?: "garland" | "posy";
}

/**
 * Untaian bunga yang menindih batas dua blok (setengah di atas, setengah di bawah),
 * jadi perpindahan warna latar tertutup bunga, bukan garis lurus.
 * Tingginya 0: letakkan tepat di antara dua blok, di luar elemen ber-`overflow-hidden`.
 * Blok sesudahnya butuh padding atas ekstra (± pt-28) agar isinya tidak tertutup.
 */
export function FloralSeam({ variant = "garland" }: FloralSeamProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none relative z-10 h-0">
      <StoryReveal direction="zoom" className="absolute inset-x-0 top-0 -translate-y-1/2">
        {variant === "garland" ? (
          <div className="flex items-center justify-center">
            <Image src={bouquetRoseBranch} alt="" className="-mr-10 h-auto w-[38%] -scale-x-100 rotate-12" />
            <Image src={bouquetRosesWide} alt="" className="relative z-10 h-auto w-[40%]" />
            <Image src={bouquetCrimsonCorner} alt="" className="-ml-10 h-auto w-[36%] -rotate-6" />
          </div>
        ) : (
          <Image src={bouquetRosesWide} alt="" className="mx-auto h-auto w-40" />
        )}
      </StoryReveal>
    </div>
  );
}
