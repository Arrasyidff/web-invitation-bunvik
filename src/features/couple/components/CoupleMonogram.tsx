interface CoupleMonogramProps {
  groomInitial: string;
  brideInitial: string;
}

export function CoupleMonogram({ groomInitial, brideInitial }: CoupleMonogramProps) {
  return (
    <div className="flex justify-center my-10">
      <div className="w-20 h-20 rounded-full bg-[#E8E2D7] flex items-center justify-center">
        <span className="text-[1.625rem] font-light tracking-tight text-foreground">
          {groomInitial}
          <span className="font-light italic">{brideInitial}</span>
        </span>
      </div>
    </div>
  );
}
