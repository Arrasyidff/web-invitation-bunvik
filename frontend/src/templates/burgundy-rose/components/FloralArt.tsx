/** Ilustrasi mawar bergaya cat-air (SVG) untuk template burgundy-rose. */

type RoseTone = "burgundy" | "rose" | "blush";

interface RoseProps {
  x: number;
  y: number;
  radius: number;
  tone: RoseTone;
}

interface LeafProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  color?: string;
}

interface FillerDot {
  x: number;
  y: number;
}

interface FloralArtProps {
  className?: string;
}

const ROSE_TONES: Record<RoseTone, { base: string; shade: string; light: string }> = {
  burgundy: { base: "#7a1a26", shade: "#4e0d15", light: "#a3404c" },
  rose: { base: "#c4646e", shade: "#93404a", light: "#e09aa0" },
  blush: { base: "#ebbcb7", shade: "#c98580", light: "#f8e0dc" },
};

function Rose({ x, y, radius, tone }: RoseProps) {
  const { base, shade, light } = ROSE_TONES[tone];
  const strokeWidth = Math.max(radius * 0.08, 0.8);

  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={radius} fill={base} />
      <ellipse cx={-radius * 0.25} cy={-radius * 0.3} rx={radius * 0.55} ry={radius * 0.4} fill={light} opacity={0.45} />
      <g fill="none" stroke={shade} strokeWidth={strokeWidth} strokeLinecap="round" opacity={0.75}>
        <path d={`M ${-radius * 0.72} ${radius * 0.1} A ${radius * 0.72} ${radius * 0.66} 0 0 0 ${radius * 0.72} ${radius * 0.15}`} />
        <path d={`M ${-radius * 0.45} ${-radius * 0.05} A ${radius * 0.45} ${radius * 0.42} 0 1 1 ${radius * 0.35} ${radius * 0.3}`} />
        <path d={`M ${-radius * 0.2} ${-radius * 0.15} A ${radius * 0.22} ${radius * 0.22} 0 1 0 ${radius * 0.18} ${radius * 0.05}`} />
      </g>
      <circle r={radius * 0.1} fill={shade} />
    </g>
  );
}

function Leaf({ x, y, angle, size, color = "#7d9473" }: LeafProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <path d={`M0 0 Q${size * 0.5} ${-size * 0.32} ${size} 0 Q${size * 0.5} ${size * 0.32} 0 0Z`} fill={color} opacity={0.85} />
      <path d={`M0 0 L${size * 0.9} 0`} stroke="#5f7a5a" strokeWidth={0.6} opacity={0.6} />
    </g>
  );
}

function Fillers({ dots }: { dots: FillerDot[] }) {
  return (
    <>
      {dots.map((dot) => (
        <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r={2.4} fill="#f1c9c4" opacity={0.9} />
      ))}
    </>
  );
}

const GARLAND_LEAVES: LeafProps[] = [
  { x: 200, y: 70, angle: 200, size: 72 },
  { x: 200, y: 70, angle: -20, size: 72 },
  { x: 150, y: 76, angle: 188, size: 62, color: "#a3b597" },
  { x: 250, y: 76, angle: -8, size: 62, color: "#a3b597" },
  { x: 110, y: 82, angle: 168, size: 55 },
  { x: 290, y: 82, angle: 12, size: 55 },
  { x: 180, y: 58, angle: 232, size: 46, color: "#a3b597" },
  { x: 220, y: 58, angle: -52, size: 46, color: "#a3b597" },
  { x: 140, y: 92, angle: 148, size: 42 },
  { x: 260, y: 92, angle: 32, size: 42 },
  { x: 92, y: 70, angle: 205, size: 44, color: "#a3b597" },
  { x: 308, y: 70, angle: -25, size: 44, color: "#a3b597" },
];

const GARLAND_ROSES: RoseProps[] = [
  { x: 168, y: 84, radius: 20, tone: "blush" },
  { x: 232, y: 84, radius: 20, tone: "blush" },
  { x: 140, y: 68, radius: 15, tone: "rose" },
  { x: 260, y: 68, radius: 15, tone: "rose" },
  { x: 118, y: 90, radius: 12, tone: "blush" },
  { x: 282, y: 90, radius: 12, tone: "blush" },
  { x: 186, y: 50, radius: 11, tone: "blush" },
  { x: 216, y: 50, radius: 10, tone: "burgundy" },
  { x: 200, y: 72, radius: 26, tone: "burgundy" },
];

const GARLAND_FILLERS: FillerDot[] = [
  { x: 96, y: 56 }, { x: 104, y: 50 }, { x: 304, y: 56 }, { x: 296, y: 50 },
  { x: 160, y: 46 }, { x: 240, y: 46 }, { x: 130, y: 104 }, { x: 270, y: 104 },
  { x: 200, y: 36 }, { x: 76, y: 84 }, { x: 324, y: 84 },
];

/** Untaian mawar horizontal, dipakai di atas lengkungan dan sebagai pemisah. */
export function FloralGarland({ className = "" }: FloralArtProps) {
  return (
    <svg viewBox="0 0 400 130" aria-hidden="true" className={`h-auto w-full ${className}`}>
      {GARLAND_LEAVES.map((leaf) => (
        <Leaf key={`${leaf.x}-${leaf.y}-${leaf.angle}`} {...leaf} />
      ))}
      <Fillers dots={GARLAND_FILLERS} />
      {GARLAND_ROSES.map((rose) => (
        <Rose key={`${rose.x}-${rose.y}`} {...rose} />
      ))}
    </svg>
  );
}

const BOUQUET_LEAVES: LeafProps[] = [
  { x: 40, y: 40, angle: 8, size: 92 },
  { x: 40, y: 40, angle: 82, size: 92 },
  { x: 50, y: 50, angle: 35, size: 78, color: "#a3b597" },
  { x: 50, y: 50, angle: 58, size: 72 },
  { x: 90, y: 28, angle: 18, size: 60, color: "#a3b597" },
  { x: 28, y: 92, angle: 70, size: 60, color: "#a3b597" },
  { x: 76, y: 74, angle: 45, size: 50 },
];

const BOUQUET_ROSES: RoseProps[] = [
  { x: 120, y: 12, radius: 11, tone: "burgundy" },
  { x: 12, y: 132, radius: 12, tone: "rose" },
  { x: 86, y: 26, radius: 21, tone: "rose" },
  { x: 24, y: 90, radius: 20, tone: "blush" },
  { x: 74, y: 72, radius: 16, tone: "blush" },
  { x: 38, y: 38, radius: 31, tone: "burgundy" },
];

const BOUQUET_FILLERS: FillerDot[] = [
  { x: 112, y: 44 }, { x: 120, y: 52 }, { x: 46, y: 112 }, { x: 54, y: 120 },
  { x: 100, y: 64 }, { x: 64, y: 100 }, { x: 140, y: 28 }, { x: 30, y: 150 },
];

/** Buket mawar untuk sudut kiri atas; putar 180° untuk sudut kanan bawah. */
export function CornerBouquet({ className = "" }: FloralArtProps) {
  return (
    <svg viewBox="0 0 180 180" aria-hidden="true" className={className}>
      {BOUQUET_LEAVES.map((leaf) => (
        <Leaf key={`${leaf.x}-${leaf.y}-${leaf.angle}`} {...leaf} />
      ))}
      <Fillers dots={BOUQUET_FILLERS} />
      {BOUQUET_ROSES.map((rose) => (
        <Rose key={`${rose.x}-${rose.y}`} {...rose} />
      ))}
    </svg>
  );
}
