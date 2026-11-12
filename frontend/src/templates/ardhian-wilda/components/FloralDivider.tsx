interface FloralDividerProps {
  isFlipped?: boolean;
  className?: string;
}

interface BlossomProps {
  x: number;
  y: number;
  radius: number;
  color: string;
}

interface LeafProps {
  x: number;
  y: number;
  angle: number;
}

const PETAL_ANGLES = [0, 72, 144, 216, 288];

function Blossom({ x, y, radius, color }: BlossomProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {PETAL_ANGLES.map((angle) => (
        <ellipse
          key={angle}
          cx={0}
          cy={-radius * 0.6}
          rx={radius * 0.48}
          ry={radius * 0.62}
          fill={color}
          opacity={0.85}
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r={radius * 0.28} fill="#e9d3a6" />
    </g>
  );
}

function Leaf({ x, y, angle }: LeafProps) {
  return (
    <ellipse
      cx={x}
      cy={y}
      rx={9}
      ry={3.2}
      fill="#8fa38a"
      opacity={0.75}
      transform={`rotate(${angle} ${x} ${y})`}
    />
  );
}

const LEAVES: LeafProps[] = [
  { x: 38, y: 44, angle: -35 },
  { x: 52, y: 52, angle: 25 },
  { x: 86, y: 30, angle: -20 },
  { x: 98, y: 42, angle: 40 },
  { x: 136, y: 34, angle: -10 },
  { x: 142, y: 50, angle: 30 },
  { x: 184, y: 52, angle: -25 },
  { x: 196, y: 64, angle: 20 },
  { x: 238, y: 60, angle: -40 },
  { x: 246, y: 48, angle: 15 },
  { x: 282, y: 40, angle: -15 },
];

const BLOSSOMS: BlossomProps[] = [
  { x: 160, y: 45, radius: 10, color: "#7b3443" },
  { x: 116, y: 34, radius: 7, color: "#c48a92" },
  { x: 214, y: 58, radius: 8, color: "#a04a5a" },
  { x: 66, y: 42, radius: 5.5, color: "#d9b2b7" },
  { x: 266, y: 50, radius: 6, color: "#c48a92" },
  { x: 300, y: 36, radius: 4, color: "#7b3443" },
];

const BUDS = [
  { x: 24, y: 52 },
  { x: 132, y: 22 },
  { x: 190, y: 40 },
  { x: 232, y: 72 },
];

/** Hiasan ranting bunga cat-air sederhana sebagai pemisah antar blok. */
export function FloralDivider({ isFlipped = false, className = "" }: FloralDividerProps) {
  return (
    <svg
      viewBox="0 0 320 84"
      aria-hidden="true"
      className={`mx-auto h-auto w-full max-w-80 ${isFlipped ? "-scale-x-100" : ""} ${className}`}
    >
      <path
        d="M14 54 Q90 18 160 45 Q232 74 308 34"
        fill="none"
        stroke="#8fa38a"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <path
        d="M116 34 Q126 20 132 22 M214 58 Q226 74 232 72"
        fill="none"
        stroke="#8fa38a"
        strokeWidth={1}
      />
      {LEAVES.map((leaf) => (
        <Leaf key={`${leaf.x}-${leaf.y}`} {...leaf} />
      ))}
      {BUDS.map((bud) => (
        <circle key={`${bud.x}-${bud.y}`} cx={bud.x} cy={bud.y} r={2.6} fill="#c48a92" opacity={0.8} />
      ))}
      {BLOSSOMS.map((blossom) => (
        <Blossom key={`${blossom.x}-${blossom.y}`} {...blossom} />
      ))}
    </svg>
  );
}
