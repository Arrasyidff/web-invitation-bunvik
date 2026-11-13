export function CoupleAmpersand() {
  return (
    <div aria-hidden="true" className="mt-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-maroon/50" />
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-[2rem] leading-none text-ivory shadow-md">
        &amp;
      </span>
      <span className="h-px flex-1 bg-maroon/50" />
    </div>
  );
}
