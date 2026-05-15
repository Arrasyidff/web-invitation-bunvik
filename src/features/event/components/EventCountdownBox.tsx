interface EventCountdownBoxProps {
  value: number;
  label: string;
}

export function EventCountdownBox({ value, label }: EventCountdownBoxProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[72px] h-[72px] bg-white border border-white flex items-center justify-center">
        <span className="text-[2rem] font-semibold text-[#343434] leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[0.75rem] tracking-widest uppercase text-white">{label}</span>
    </div>
  );
}
