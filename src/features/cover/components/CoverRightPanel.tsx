import { GUEST_NAME_DEFAULT } from "@/lib/constants";
import { CoverFlower } from "./CoverFlower";
import { CoverWeddingTitle } from "./CoverWeddingTitle";
import { CoverEnvelopeButton } from "./CoverEnvelopeButton";

interface CoverRightPanelProps {
  onOpen: () => void;
  guestName?: string;
}

export function CoverRightPanel({
  onOpen,
  guestName = GUEST_NAME_DEFAULT,
}: CoverRightPanelProps) {
  return (
    <div className="flex flex-col h-full bg-white/75 backdrop-blur-sm overflow-hidden">
      <CoverFlower />

      <div className="flex-1 flex flex-col items-center justify-center text-center w-full">
        <CoverWeddingTitle />

        <div className="mt-6 mb-6 flex flex-col items-center">
          <p className="font-sans font-light text-[1.375rem] tracking-wide text-foreground">
            Kepada Yth.
          </p>
          <p className="font-sans font-light text-[1.375rem] tracking-wide text-foreground">
            Bapak/ Ibu/ Saudara/ i
          </p>
          <p className="font-sans font-medium text-[2rem] text-foreground">
            {guestName}
          </p>
        </div>

        <CoverEnvelopeButton onOpen={onOpen} />
      </div>

      <CoverFlower isFlipped />
    </div>
  );
}
