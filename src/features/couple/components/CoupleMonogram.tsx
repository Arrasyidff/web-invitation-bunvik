interface CoupleMonogramProps {
  groomInitial: string;
  brideInitial: string;
}

export function CoupleMonogram({ groomInitial, brideInitial }: CoupleMonogramProps) {
  return (
    <div className="flex justify-center my-10">
      <div className="w-30 h-30 rounded-full bg-[#FBF3E2] flex items-center justify-center shadow-md">
        <span className="text-[3rem] font-bold tracking-tight text-foreground">
          {groomInitial}
          <span className="font-bold">{brideInitial}</span>
        </span>
      </div>
    </div>
  );
}
