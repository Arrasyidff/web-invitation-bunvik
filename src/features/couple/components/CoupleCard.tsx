interface CoupleCardProps {
  fullName: string;
  childOrder: string;
  parents: string;
  photoPosition: "left" | "right";
}

export function CoupleCard({ fullName, childOrder, parents, photoPosition }: CoupleCardProps) {
  const archClass = photoPosition === "left" ? "arch-top" : "arch-bottom";

  const photo = (
    <div className={`w-[44%] aspect-[3/4] bg-[#E8E2D7] ${archClass} flex-shrink-0`} />
  );

  const text = (
    <div className="flex-1 text-center">
      <h2 className="text-[1.25rem] font-bold uppercase tracking-widest leading-tight text-foreground">
        {fullName}
      </h2>
      <p className="mt-3 text-[1.0625rem] text-foreground leading-snug">
        {childOrder} dari {parents}
      </p>
    </div>
  );

  return (
    <div className="flex items-center gap-5">
      {photoPosition === "left" ? (
        <>
          {photo}
          {text}
        </>
      ) : (
        <>
          {text}
          {photo}
        </>
      )}
    </div>
  );
}
