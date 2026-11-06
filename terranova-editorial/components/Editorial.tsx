"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Running head — the editorial replacement for tracked all-caps eyebrows.
 * An italic numeral, a rule that draws in, and the label rising out of a
 * mask, like the folio line of a printed journal turning into view.
 */
export function RunHead({
  n,
  children,
  className = ""
}: {
  n?: string;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.p
      className={`runhead ${className}`}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {n ? (
        <span className="inline-block overflow-hidden">
          <motion.span
            className="runhead__n inline-block"
            variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 0.8, ease } } }}
          >
            {n}
          </motion.span>
        </span>
      ) : null}
      <motion.span
        className="runhead__rule origin-left"
        aria-hidden="true"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease, delay: 0.1 } } }}
      />
      <span className="inline-block overflow-hidden">
        <motion.span
          className="inline-block"
          variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 0.8, ease, delay: 0.22 } } }}
        >
          {children}
        </motion.span>
      </span>
    </motion.p>
  );
}
