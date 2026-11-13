import { ScriptSwash } from "./ScriptSwash";

interface ScriptHeadingProps {
  label: string;
  scriptTitle: string;
  /** "light" untuk dipakai di atas latar merah marun. */
  tone?: "dark" | "light";
}

/** Label kapital renggang diapit garis, di atas judul besar huruf sambung. */
export function ScriptHeading({ label, scriptTitle, tone = "dark" }: ScriptHeadingProps) {
  const isLight = tone === "light";
  const textClassName = isLight ? "text-ivory" : "text-maroon";
  const lineClassName = isLight ? "bg-ivory/50" : "bg-maroon/60";

  return (
    <div className={`text-center ${textClassName}`}>
      <div className="flex items-center gap-4">
        <span className={`h-px flex-1 ${lineClassName}`} />
        <p className="text-[1.125rem] font-medium uppercase tracking-[0.35em]!">{label}</p>
        <span className={`h-px flex-1 ${lineClassName}`} />
      </div>
      <h2 className="mt-2 font-(family-name:--font-crimson-script) text-[4rem] leading-[1.1]!">{scriptTitle}</h2>
      <ScriptSwash className="-mt-1 w-48" colorClassName={isLight ? "text-ivory/80" : "text-maroon"} />
    </div>
  );
}
