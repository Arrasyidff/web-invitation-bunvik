import type { ReactNode } from "react";

interface CircleIconLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  isExternal?: boolean;
  isInverted?: boolean;
}

/** Tombol bulat ber-ikon dengan label kecil di bawahnya. */
export function CircleIconLink({ href, label, icon, isExternal = false, isInverted = false }: CircleIconLinkProps) {
  const circleClassName = isInverted ? "bg-blush-rose text-burgundy-deep" : "bg-burgundy text-blush";
  const labelClassName = isInverted ? "text-blush/90" : "text-burgundy";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex w-28 flex-col items-center gap-2 transition-transform active:scale-95"
    >
      <span className={`flex h-16 w-16 items-center justify-center rounded-full shadow-md ${circleClassName}`}>
        {icon}
      </span>
      <span className={`text-[0.75rem] uppercase tracking-[0.15em] ${labelClassName}`}>{label}</span>
    </a>
  );
}
