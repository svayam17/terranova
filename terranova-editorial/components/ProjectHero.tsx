"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText, ease } from "@/components/motion";
import { useIntroDelay } from "@/components/PageTransition";

export default function ProjectHero({
  name,
  image,
  kicker,
  location,
  product
}: {
  name: string;
  image: string;
  kicker: string;
  location: string;
  product: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const intro = useIntroDelay();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] overflow-hidden bg-charcoal text-ivory">
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y }}
        initial={reduce ? false : { scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease, delay: intro - 0.4 }}
      >
        <Image src={image} alt={`${name} project`} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.55),rgba(17,17,17,0.15)_40%,rgba(17,17,17,0.85))]" />

      <motion.div className="frame relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16" style={reduce ? undefined : { y: textY }}>
        <motion.p
          className="t-small text-sand"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: intro }}
        >
          {kicker}
        </motion.p>
        <h1 className="mt-6 font-serif text-[clamp(3.2rem,10vw,11rem)] leading-[0.86] tracking-[-0.03em]">
          <SplitText immediate delay={intro + 0.1} text={name} />
        </h1>
        <motion.div
          className="mt-10 grid gap-4 border-t border-ivory/20 pt-6 text-sm text-ivory/75 sm:grid-cols-2 md:max-w-2xl"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: intro + 0.7 }}
        >
          <p><span className="block text-xs text-ivory/45">Location</span>{location}</p>
          <p><span className="block text-xs text-ivory/45">Product Used</span>{product}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
