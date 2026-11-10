"use client";

import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal, SplitText, Stagger, ease } from "@/components/motion";
import { RouteCanvas } from "@/components/Route";

type Stage = {
  number: string;
  label: string;
  heading: string;
  copy: string;
  note: string;
  tags: string[];
};

/**
 * Eight procurement stages. On desktop a sticky panel on the left shows the
 * stage in view as an oversized numeral with a filling progress rail.
 */
export default function StageJourney({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start 0.5", "end 0.5"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });

  return (
    <RouteCanvas>
    <div ref={wrap} className="grid-12 relative">
      {/* Sticky stage counter */}
      <aside className="col-span-12 hidden md:col-span-4 md:block">
        <div className="sticky top-[18vh] flex gap-8">
          <div className="relative w-px self-stretch bg-charcoal/14">
            <motion.div className="absolute inset-0 origin-top bg-bronze" style={{ scaleY: reduce ? 1 : fill }} />
          </div>
          <div>
            <div className="relative h-[clamp(9rem,15vw,15rem)] overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={active}
                  className="numeral absolute left-0 top-0 block text-[clamp(9rem,15vw,15rem)] leading-[0.85] text-bronze"
                  initial={reduce ? false : { y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.8, ease }}
                >
                  {stages[active].number}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="t-small mt-6 text-charcoal/60">{stages[active].label}</p>
            <ol className="mt-10 space-y-2">
              {stages.map((s, i) => (
                <li
                  key={s.number}
                  className={`flex items-center gap-3 text-[0.8rem] transition-all duration-500 ${
                    i === active ? "translate-x-2 text-charcoal" : "text-charcoal/35"
                  }`}
                >
                  <span className={`h-px transition-all duration-500 ${i === active ? "w-8 bg-bronze" : "w-3 bg-charcoal/25"}`} />
                  {s.label}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </aside>

      <ol className="col-span-12 md:col-span-8">
        {stages.map((stage, i) => (
          <StageItem key={stage.number} stage={stage} onActive={() => setActive(i)} last={i === stages.length - 1} />
        ))}
      </ol>
    </div>
    </RouteCanvas>
  );
}

function StageItem({ stage, onActive, last }: { stage: Stage; onActive: () => void; last: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return (
    <li ref={ref} className={`relative z-[2] py-14 md:min-h-[70vh] md:py-20 ${last ? "" : "border-b border-charcoal/12"}`}>
      <span data-route-stop={stage.label} data-route-swing="0.025" data-route-dy="34" className="block h-0" aria-hidden="true" />
      <p className="flex items-baseline gap-4 md:hidden">
        <span className="numeral text-5xl text-bronze">{stage.number}</span>
        <span className="t-small text-charcoal/60">{stage.label}</span>
      </p>
      <h3 className="t-h1 mt-6 md:mt-0">
        <SplitText text={stage.heading} stagger={0.04} />
      </h3>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="t-body">{stage.copy}</p>
          <p className="mt-6 font-serif text-[1.3rem] italic leading-snug text-charcoal/85">{stage.note}</p>
        </Reveal>
        <Stagger className="flex flex-wrap content-start gap-2" gap={0.04} y={10}>
          {stage.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full border border-charcoal/15 bg-ivory/60 px-4 py-2 text-[0.8rem] text-charcoal/75 transition-colors duration-300 hover:border-bronze hover:bg-bronze hover:text-ivory"
            >
              {tag}
            </span>
          ))}
        </Stagger>
      </div>
    </li>
  );
}
