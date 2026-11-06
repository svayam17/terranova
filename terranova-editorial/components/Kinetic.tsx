"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue
} from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── KineticRows: oversized lines that slide against each other with scroll ── */
function Row({
  text,
  progress,
  dir,
  className
}: {
  text: string;
  progress: MotionValue<number>;
  dir: 1 | -1;
  className: string;
}) {
  const x = useTransform(progress, [0, 1], dir > 0 ? ["-18%", "4%"] : ["4%", "-18%"]);
  return (
    <motion.p style={{ x }} className={`whitespace-nowrap will-change-transform ${className}`}>
      {text}
    </motion.p>
  );
}

export function KineticRows({ rows, className = "" }: { rows: { text: string; className?: string }[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.6 });

  if (reduce) {
    return (
      <div className={className}>
        {rows.map((r) => (
          <p key={r.text} className={r.className}>{r.text}</p>
        ))}
      </div>
    );
  }
  return (
    <div ref={ref} className={`overflow-hidden ${className}`} aria-label={rows.map((r) => r.text).join(" ")}>
      {rows.map((r, i) => (
        <Row key={r.text} text={r.text} progress={smooth} dir={i % 2 === 0 ? 1 : -1} className={r.className ?? ""} />
      ))}
    </div>
  );
}

/* ── PinnedProjects: full-screen project story, one plate per scroll step ── */
export function PinnedProjects({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const n = projects.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n * 0.9999))));
  });

  if (reduce) {
    return (
      <div className="frame grid gap-14 py-20">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="block">
            <div className="relative aspect-[16/9] overflow-hidden bg-sand">
              <Image src={p.image} alt={`${p.name} project`} fill sizes="100vw" className="object-cover" />
            </div>
            <p className="t-h2 mt-5">{p.name}</p>
            <p className="t-small mt-2 opacity-70">{p.location} / {p.productUsed}</p>
          </Link>
        ))}
      </div>
    );
  }

  const current = projects[active];

  return (
    <div ref={ref} style={{ height: `${n * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-charcoal text-ivory">
        {/* Plates: each new plate wipes up over the last */}
        {projects.map((p, i) => (
          <Plate key={p.slug} project={p} index={i} n={n} progress={scrollYProgress} />
        ))}
        <div className="pointer-events-none absolute inset-0 z-[40] bg-[linear-gradient(180deg,rgba(17,17,17,0.55)_0%,rgba(17,17,17,0.05)_35%,rgba(17,17,17,0.1)_55%,rgba(17,17,17,0.85)_100%)]" />

        {/* Copy layer */}
        <div className="frame relative z-[41] flex h-full flex-col justify-between pb-10 pt-28 md:pb-14 md:pt-32">
          <div className="flex items-start justify-between gap-6">
            <p className="t-small text-ivory/70">Some of Our Projects</p>
            <p className="numeral text-[clamp(1.6rem,2.4vw,2.4rem)] leading-none text-sand">
              <span className="inline-block overflow-hidden align-bottom">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={active}
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.7, ease }}
                  >
                    {String(active + 1).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-ivory/40"> / {String(n).padStart(2, "0")}</span>
            </p>
          </div>

          <div>
            <div className="overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.h3
                  key={current.slug}
                  className="font-serif text-[clamp(3rem,9vw,9.5rem)] leading-[0.88] tracking-[-0.03em]"
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-105%", opacity: 0 }}
                  transition={{ duration: 0.9, ease }}
                >
                  <Link href={`/projects/${current.slug}`} data-cursor="View" className="pointer-events-auto">
                    {current.name}
                  </Link>
                </motion.h3>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-ivory/20 pt-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.dl
                  key={current.slug}
                  className="grid grid-cols-2 gap-x-10 gap-y-1 text-sm md:flex md:gap-14"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <div>
                    <dt className="text-xs text-ivory/50">Location</dt>
                    <dd className="text-ivory/90">{current.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ivory/50">Product Used</dt>
                    <dd className="text-ivory/90">{current.productUsed}</dd>
                  </div>
                </motion.dl>
              </AnimatePresence>
              <Link href={`/projects/${current.slug}`} className="btn btn--outline-light rounded-full !px-6">
                View project <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="mt-6 h-px w-full bg-ivory/15">
              <motion.div className="h-px origin-left bg-bronze" style={{ scaleX: bar }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Plate({ project, index, n, progress }: { project: Project; index: number; n: number; progress: MotionValue<number> }) {
  const start = index / n;
  const end = (index + 1) / n;
  // The plate wipes in over the previous one during the last 35% of the previous step.
  const inStart = Math.max(0, start - 0.35 / n);
  const clip = useTransform(progress, [inStart, start], index === 0 ? ["inset(0% 0 0 0)", "inset(0% 0 0 0)"] : ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const scale = useTransform(progress, [inStart, end], [1.18, 1]);
  return (
    <motion.div className="absolute inset-0" style={{ clipPath: clip, zIndex: index }}>
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image src={project.image} alt={`${project.name} project`} fill sizes="100vw" loading="eager" className="object-cover" />
      </motion.div>
    </motion.div>
  );
}

/* ── ScrollZoom: a framed image that grows to full bleed with scroll ── */
export function ScrollZoom({ src, alt, children }: { src: string; alt: string; children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const inset = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const clip = useTransform(inset, (v) => `inset(${v * 0.6}% ${v}% round ${v * 1.2}px)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 1], ["40%", "0%"]);
  const textO = useTransform(scrollYProgress, [0.55, 1], [0, 1]);

  return (
    <div ref={ref} className="relative h-[100svh]">
      <motion.div className="absolute inset-0 overflow-hidden" style={reduce ? undefined : { clipPath: clip }}>
        <motion.div className="absolute inset-0" style={reduce ? undefined : { scale }}>
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-charcoal/35" />
      </motion.div>
      {children ? (
        <motion.div className="frame relative flex h-full items-end pb-14 text-ivory md:pb-20" style={reduce ? undefined : { y: textY, opacity: textO }}>
          {children}
        </motion.div>
      ) : null}
    </div>
  );
}
