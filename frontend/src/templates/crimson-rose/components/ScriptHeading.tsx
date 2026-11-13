import { ScriptSwash } from "./ScriptSwash";

interface ScriptHeadingProps {
  label: string;
  scriptTitle: string;
}

/** Label kapital renggang diapit garis, di atas judul besar huruf sambung. */
export function ScriptHeading({ label, scriptTitle }: ScriptHeadingProps) {
  return (
    <div className="text-center text-maroon">
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-maroon/60" />
        <p className="text-[1.125rem] font-medium uppercase tracking-[0.35em]!">{label}</p>
        <span className="h-px flex-1 bg-maroon/60" />
      </div>
      <h2 className="mt-2 font-(family-name:--font-crimson-script) text-[4rem] leading-[1.1]!">{scriptTitle}</h2>
      <ScriptSwash className="-mt-1 w-48" />
    </div>
  );
}
