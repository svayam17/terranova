"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/motion";

const letters = "Terra Nova".split("");

export default function Footer({ cta = true }: { cta?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-charcoal text-ivory">
      <motion.div style={reduce ? undefined : { y }}>
        {/* Closing call to action */}
        {cta && (
        <div className="frame border-b border-ivory/12 pb-20 pt-24 md:pb-28 md:pt-32">
          <p className="t-small text-ivory/50">Start with one requirement. Grow with the project.</p>
          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="t-h1 max-w-4xl">Let&apos;s Start With Your Requirement</h2>
            <Magnetic>
              <Link
                href="/contact-us"
                data-cursor="Talk"
                className="group flex h-36 w-36 items-center justify-center rounded-full bg-bronze text-center text-sm leading-tight text-ivory transition-colors duration-500 hover:bg-sand hover:text-charcoal md:h-44 md:w-44"
              >
                <span>
                  Discuss Your
                  <br />
                  Project
                  <ArrowUpRight size={18} className="mx-auto mt-2 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </Link>
            </Magnetic>
          </div>
        </div>
        )}

        <div className="frame pt-16">
          <div className="grid-12 gap-y-12">
            <p className="col-span-12 max-w-sm font-serif text-[1.4rem] leading-snug text-ivory/70 md:col-span-4">
              Global luxury sourcing studio for wood flooring, decking, cladding, and bespoke architectural surfaces.
            </p>

            <nav aria-label="Footer" className="col-span-6 md:col-span-2 md:col-start-6">
              <ul className="space-y-3 text-sm text-ivory/60">
                {[
                  ["About Us", "/about-us"],
                  ["Services", "/services"],
                  ["Products", "/products"],
                  ["Projects", "/projects"]
                ].map(([l, h]) => (
                  <li key={h}>
                    <Link href={h} className="transition-colors hover:text-ivory">{l}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="col-span-6 space-y-3 text-sm text-ivory/60 md:col-span-2">
              <li><Link href="/contact-us" className="transition-colors hover:text-ivory">Contact Us</Link></li>
              <li><Link href="/testimonials-blog" className="transition-colors hover:text-ivory">Testimonials / Blog</Link></li>
              <li><a href="#" className="transition-colors hover:text-ivory">Instagram</a></li>
              <li><a href="#" className="transition-colors hover:text-ivory">LinkedIn</a></li>
            </ul>

            <ul className="col-span-12 space-y-3 text-sm md:col-span-3 md:col-start-10">
              <li><a href="mailto:amit@gswoods.com" className="link-u text-ivory/85">amit@gswoods.com</a></li>
              <li><a href="tel:+919867185966" className="link-u text-ivory/85">+91 98671 85966</a></li>
            </ul>
          </div>

          <motion.p
            aria-hidden="true"
            className="mt-20 flex select-none overflow-hidden whitespace-nowrap font-serif text-[clamp(4.4rem,18.6vw,19.5rem)] leading-[0.8] tracking-[-0.035em] md:mt-28"
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-5% 0px" }}
          >
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { y: "100%" },
                  show: { y: "0%", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 } }
                }}
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </motion.p>

          <div className="mt-4 flex items-center justify-between border-t border-ivory/12 py-7 text-xs text-ivory/40">
            <p>Copyright 2026 Terra Nova. All rights reserved.</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 transition-colors hover:text-ivory"
            >
              Back to top <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
