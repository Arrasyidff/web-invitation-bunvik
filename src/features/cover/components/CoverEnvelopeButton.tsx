import Image from "next/image";
import blueEnvelope from "@/app/assets/blue-envelope.png";
import candleEnvelope from "@/app/assets/candle-envelope.png";

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
      <div className="relative">
        <Image
          src={blueEnvelope}
          alt="Amplop undangan"
          className="h-[28vh] w-auto drop-shadow-md"
        />
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <Image
            src={candleEnvelope}
            alt="Lilin"
            className="h-[8vh] w-auto"
          />
          <span
            className="absolute top-[50%] left-[45%] -translate-x-1/2 -translate-y-1/2 text-foreground font-bold"
            style={{ letterSpacing: "-8px", fontSize: "40px" }}
          >
            HV
          </span>
        </div>
      </div>
      <p className="font-sans text-[2rem] text-foreground font-light uppercase">
        Click to Open
      </p>
    </button>
  );
}
