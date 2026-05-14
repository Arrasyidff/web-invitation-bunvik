import Image from "next/image";
import blueEnvelope from "@/app/assets/blue-envelope.png";

interface CoverEnvelopeButtonProps {
  onOpen: () => void;
}

export function CoverEnvelopeButton({ onOpen }: CoverEnvelopeButtonProps) {
  return (
    <button
      onClick={onOpen}
      className="w-full px-6 flex flex-col items-center cursor-pointer"
      aria-label="Buka undangan"
    >
      <Image
        src={blueEnvelope}
        alt="Amplop undangan"
        className="h-[28vh] w-auto drop-shadow-md"
      />
      <p className="font-sans text-[2rem] text-foreground font-light uppercase">
        Click to Open
      </p>
    </button>
  );
}
