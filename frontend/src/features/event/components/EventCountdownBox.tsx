interface EventCountdownBoxProps {
  value: number;
  label: string;
}

export function EventCountdownBox({ value, label }: EventCountdownBoxProps) {
  return (
    <div className="flex-1 flex flex-col items-center gap-1">
      <div className="w-full aspect-square bg-white border border-white flex items-center justify-center">
        <span className="text-[2.812rem] font-semibold text-foreground">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[0.875rem] uppercase text-white font-bold">{label}</span>
    </div>
  );
}
