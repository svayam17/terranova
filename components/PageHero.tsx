"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { RunHead } from "@/components/Editorial";
import { ClipImage, SplitText, ease } from "@/components/motion";
import { useIntroDelay } from "@/components/PageTransition";

/**
 * Inner-page opening: running head, oversized split headline timed to the
 * curtain, an aside, and an optional cinematic image that unmasks below.
 */
export default function PageHero({
  label,
  n = "i",
  lines,
  aside,
  image,
  imageAlt = "",
  indent = true
}: {
  label: string;
  n?: string;
  lines: string[];
  aside?: ReactNode;
  image?: string;
  imageAlt?: string;
  indent?: boolean;
}) {
  const intro = useIntroDelay();
  const reduce = useReducedMotion();

  return (
    <section className="pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="frame">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease, delay: intro }}
        >
          <RunHead n={n}>{label}</RunHead>
        </motion.div>

        <h1 className="t-display mt-10">
          <SplitText
            immediate
            delay={intro + 0.08}
            text={lines}
            lineClassName={indent ? "[&:nth-child(2)]:md:pl-[16.66%] [&:nth-child(2)]:italic" : ""}
          />
        </h1>

        {aside && (
          <motion.div
            className="grid-12 mt-12 md:mt-16"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: intro + 0.6 }}
          >
            <div className="col-span-12 md:col-span-6 md:col-start-7">{aside}</div>
          </motion.div>
        )}
      </div>

      {image && (
        <div className="mt-16 md:mt-24">
          <ClipImage
            src={image}
            alt={imageAlt}
            immediate
            delay={intro + 0.4}
            priority
            className="aspect-[4/3] w-full md:aspect-[21/9]"
            parallax={14}
          />
        </div>
      )}
    </section>
  );
}
