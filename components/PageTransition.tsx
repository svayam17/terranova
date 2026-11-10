"use client";

import { animate, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

const ease = [0.76, 0, 0.24, 1] as const;

/** Seconds until the curtain has lifted — heroes time their entrance to it. */
const IntroContext = createContext(0.6);
export const useIntroDelay = () => useContext(IntroContext);

const word = "Terra Nova".split("");

/**
 * First visit: a preloader — wordmark letters rise while a counter runs
 * to 100, then the charcoal curtain lifts.
 * Every later navigation: a shorter curtain lift over the new page.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const first = useRef(true);
  const initialPath = useRef(pathname);
  const navigated = useRef(false);
  if (pathname !== initialPath.current) navigated.current = true;
  const isFirst = !navigated.current;
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    if (first.current) {
      first.current = false;
      if (reduce) return;
      const c = animate(0, 100, { duration: 1.6, ease: [0.65, 0, 0.35, 1], onUpdate: (v) => setCount(Math.round(v)) });
      return () => c.stop();
    }
  }, [pathname, reduce]);

  return (
    <IntroContext.Provider value={reduce ? 0 : isFirst ? 2.35 : 0.55}>
      {children}

      {!reduce && (
        <motion.div
          key={pathname}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] flex flex-col justify-between bg-charcoal px-[var(--gutter)] py-8 text-ivory"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: isFirst ? 1.1 : 0.9, ease, delay: isFirst ? 1.9 : 0.15 }}
        >
          <div className="flex justify-between text-xs text-ivory/50">
            <span>Global luxury sourcing and materials studio</span>
            <span className="hidden sm:inline">Est. 2001</span>
          </div>

          <div className="overflow-hidden">
            <div className="flex font-serif text-[clamp(4rem,15vw,15rem)] leading-[0.85] tracking-[-0.03em]">
              {word.map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: isFirst ? 1 : 0.6, ease: [0.16, 1, 0.3, 1], delay: (isFirst ? 0.15 : 0) + i * 0.04 }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="h-px w-1/2 bg-ivory/15">
              <motion.div
                className="h-px origin-left bg-bronze"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: isFirst ? 1.6 : 0.5, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
            {isFirst && (
              <span className="numeral text-[clamp(2.5rem,6vw,5rem)] leading-none text-sand">
                {String(count).padStart(3, "0")}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </IntroContext.Provider>
  );
}
