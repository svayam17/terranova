"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/*
 * A survey plot of the named sourcing markets, drawn on an
 * equirectangular graticule (longitude -5..125, latitude -12..56).
 * Only markets the site names are plotted; the total is 12+.
 * Coordinates are approximate national reference points.
 */
const W = 900;
const H = 470;
const lon = (x: number) => ((x + 5) / 130) * W;
const lat = (y: number) => ((56 - y) / 68) * H;

const india = { name: "India", sub: "Project delivery", x: lon(72.9), y: lat(19.1) };
const markets = [
  { name: "Selected European markets", x: lon(10), y: lat(48), anchor: "start" as const, dx: 12, dy: -8 },
  { name: "China", x: lon(113.3), y: lat(23.1), anchor: "end" as const, dx: -12, dy: -10 },
  { name: "Vietnam", x: lon(106.7), y: lat(10.8), anchor: "start" as const, dx: 12, dy: 4 },
  { name: "Thailand", x: lon(100.5), y: lat(13.8), anchor: "end" as const, dx: -12, dy: -8 },
  { name: "Malaysia", x: lon(101.7), y: lat(3.1), anchor: "end" as const, dx: -12, dy: 6 },
  { name: "Indonesia", x: lon(106.8), y: lat(-6.2), anchor: "start" as const, dx: 12, dy: 6 }
];

/** A gentle arc from a market to India. */
function arc(a: { x: number; y: number }) {
  const mx = (a.x + india.x) / 2;
  const my = (a.y + india.y) / 2 - Math.abs(a.x - india.x) * 0.18 - 20;
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${india.x.toFixed(1)} ${india.y.toFixed(1)}`;
}

export default function SourcingPlot() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const draw = reduce || inView;

  const meridians = Array.from({ length: 13 }, (_, i) => 0 + i * 10);
  const parallels = Array.from({ length: 7 }, (_, i) => -10 + i * 10);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-labelledby="plot-title plot-desc"
      className="h-auto w-full"
    >
      <title id="plot-title">Sourcing markets and delivery to India</title>
      <desc id="plot-desc">
        Routes from China, Indonesia, Vietnam, Malaysia, Thailand and selected European markets to project delivery in India.
      </desc>

      {/* Graticule */}
      <g stroke="rgba(17,17,17,0.09)" strokeWidth="1">
        {meridians.map((m) => (
          <line key={`m${m}`} x1={lon(m)} y1={0} x2={lon(m)} y2={H} />
        ))}
        {parallels.map((p) => (
          <line key={`p${p}`} x1={0} y1={lat(p)} x2={W} y2={lat(p)} />
        ))}
      </g>
      <line x1={0} y1={lat(0)} x2={W} y2={lat(0)} stroke="rgba(17,17,17,0.22)" strokeDasharray="4 6" />
      <g fontFamily="var(--font-inter), sans-serif" fontSize="11" fill="#5e5852">
        <text x={lon(0) + 4} y={H - 6}>0°</text>
        <text x={lon(30) + 4} y={H - 6}>30°E</text>
        <text x={lon(90) + 4} y={H - 6}>90°E</text>
        <text x={lon(60) + 4} y={H - 6}>60°E</text>
        <text x={lon(120) + 4} y={H - 6}>120°E</text>
        <text x={4} y={lat(0) - 5}>Equator</text>
      </g>

      {/* Routes */}
      <g fill="none" stroke="#A67C52" strokeWidth="1.5" strokeLinecap="round">
        {markets.map((m, i) => (
          <motion.path
            key={m.name}
            d={arc(m)}
            initial={reduce ? false : { pathLength: 0 }}
            animate={draw ? { pathLength: 1 } : undefined}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.15 * i }}
          />
        ))}
      </g>

      {/* Markets */}
      <g fontFamily="var(--font-inter), sans-serif" fontSize="15" fill="#111111">
        {markets.map((m) => (
          <g key={m.name}>
            <circle cx={m.x} cy={m.y} r="4.5" fill="#F5F1EB" stroke="#111111" strokeWidth="1.2" />
            <text x={m.x + m.dx} y={m.y + m.dy} textAnchor={m.anchor}>{m.name}</text>
          </g>
        ))}
      </g>

      {/* Destination */}
      <g>
        <circle cx={india.x} cy={india.y} r="14" fill="none" stroke="#A67C52" strokeWidth="1" />
        <circle cx={india.x} cy={india.y} r="6" fill="#111111" />
        <text x={india.x - 20} y={india.y + 6} textAnchor="end" fontFamily="var(--font-cormorant), serif" fontSize="28" fontWeight="500" fill="#111111">
          India
        </text>
        <text x={india.x - 20} y={india.y + 26} textAnchor="end" fontFamily="var(--font-inter), sans-serif" fontSize="13" fill="#5e5852">
          Project delivery
        </text>
      </g>
    </svg>
  );
}
