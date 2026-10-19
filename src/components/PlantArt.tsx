"use client";
import { motion, useTransform, type MotionValue } from "framer-motion";

export function PlantArt({
  progress,
  className,
}: {
  progress: MotionValue<number>;
  className?: string;
}) {
  const seedOpacity = useTransform(progress, [0, 0.22, 0.3], [1, 1, 0.0]);
  const roots = useTransform(progress, [0.18, 0.42], [0, 1]);
  const stem = useTransform(progress, [0.3, 0.7], [0, 1]);
  const leafA = useTransform(progress, [0.42, 0.58], [0, 1]);
  const leafB = useTransform(progress, [0.52, 0.68], [0, 1]);
  const leafC = useTransform(progress, [0.62, 0.78], [0, 1]);
  const head = useTransform(progress, [0.72, 0.88], [0, 1]);
  const headColor = useTransform(progress, [0.8, 0.92], ["#8BC34A", "#D9B65A"]);
  const grain = useTransform(progress, [0.9, 1], [0, 1]);
  const grainX = useTransform(progress, [0.9, 1], [0, 150]);
  const soilLines = useTransform(progress, [0, 0.12], [0, 1]);

  const leaf = (d: string, v: MotionValue<number>, ox: string) => (
    <motion.path
      d={d}
      fill="#5E9B3A"
      fillOpacity={0.9}
      style={{ scale: v, opacity: v, originX: ox, originY: "100%" }}
    />
  );
  return (
    <svg
      viewBox="0 0 400 520"
      className={className}
      role="img"
      aria-label="A crop growing from seed to grain"
    >
      <rect x="0" y="420" width="400" height="100" fill="#2A2016" />
      {[432, 448, 464, 482].map((y, i) => (
        <motion.path
          key={y}
          d={`M0 ${y} Q100 ${y - 6} 200 ${y} T400 ${y}`}
          fill="none"
          stroke="#4a3826"
          strokeWidth="1.5"
          style={{ pathLength: soilLines }}
        />
      ))}
      <line
        x1="0"
        y1="420"
        x2="400"
        y2="420"
        stroke="#8a6a44"
        strokeWidth="2"
      />
      <motion.ellipse
        cx="200"
        cy="436"
        rx="9"
        ry="14"
        fill="#D9B65A"
        style={{ opacity: seedOpacity }}
      />
      <g fill="none" stroke="#B59B72" strokeWidth="2" strokeLinecap="round">
        <motion.path
          d="M200 424 C200 450 196 470 190 500"
          style={{ pathLength: roots }}
        />
        <motion.path
          d="M200 436 C214 452 224 468 232 490"
          style={{ pathLength: roots }}
        />
        <motion.path
          d="M199 440 C186 456 172 466 160 482"
          style={{ pathLength: roots }}
        />
      </g>
      <motion.path
        d="M200 424 C200 360 204 300 198 200 C196 160 200 130 200 110"
        fill="none"
        stroke="#8BC34A"
        strokeWidth="5"
        strokeLinecap="round"
        style={{ pathLength: stem }}
      />
      {leaf(
        "M200 360 C230 350 262 330 290 300 C262 296 226 312 200 360Z",
        leafA,
        "0%",
      )}
      {leaf(
        "M200 320 C168 310 136 290 108 262 C138 256 174 272 200 320Z",
        leafB,
        "100%",
      )}
      {leaf(
        "M199 250 C228 240 252 222 270 196 C244 194 214 208 199 250Z",
        leafC,
        "0%",
      )}
      <motion.g
        style={{
          scale: head,
          opacity: head,
          originX: "50%",
          originY: "100%",
          transformBox: "fill-box",
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <motion.ellipse
              cx={192}
              cy={118 - i * 16}
              rx="7"
              ry="11"
              transform={`rotate(-24 192 ${118 - i * 16})`}
              style={{ fill: headColor }}
            />
            <motion.ellipse
              cx={208}
              cy={110 - i * 16}
              rx="7"
              ry="11"
              transform={`rotate(24 208 ${110 - i * 16})`}
              style={{ fill: headColor }}
            />
          </g>
        ))}
      </motion.g>
      <motion.g style={{ opacity: grain, x: grainX }}>
        <circle cx="250" cy="400" r="5" fill="#D9B65A" />
        <circle cx="266" cy="404" r="5" fill="#D9B65A" />
        <circle cx="282" cy="399" r="5" fill="#D9B65A" />
      </motion.g>
    </svg>
  );
}
