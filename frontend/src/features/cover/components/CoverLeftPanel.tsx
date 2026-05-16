import Image from "next/image";
import coverPannel from "@/app/assets/cover-pannel.webp";
import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE_LONG } from "@/lib/constants";

export function CoverLeftPanel() {
  return (
    <div className="flex flex-col justify-end p-12 pb-16 relative flex-1 h-full overflow-hidden">
      <Image
        src={coverPannel}
        alt="Cover"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <p className="font-sans text-[1.375rem] text-white font-medium uppercase mb-3">
          Undangan Pernikahan
        </p>
        <h1 className="font-sans text-7xl font-bold tracking-wide text-white">
          {GROOM_NAME} &amp; {BRIDE_NAME}
        </h1>
        <p className="font-sans text-[1.375rem] text-white font-medium uppercase mt-3">
          {WEDDING_DATE_LONG}
        </p>
      </div>
    </div>
  );
}
