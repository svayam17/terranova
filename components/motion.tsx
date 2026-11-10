"use client";

/*
 * Terra Nova motion system.
 * Every primitive respects prefers-reduced-motion and degrades to static.
 */

import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue
} from "framer-motion";
import {
  Children,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode
} from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

/* ── Reveal: fade + rise when scrolled into view ─────────────── */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className = "",
  as = "div"
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "p" | "span" | "article";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </Comp>
  );
}

/* ── Stagger: children reveal one after another ──────────────── */
export function Stagger({
  children,
  className = "",
  gap = 0.08,
  y = 30
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y },
            show: { opacity: 1, y: 0, transition: { duration: 1, ease } }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── SplitText: words rise out of a mask ──────────────────────── */
export function SplitText({
  text,
  className = "",
  delay = 0,
  immediate = false,
  stagger = 0.05,
  lineClassName = ""
}: {
  text: string | string[];
  className?: string;
  delay?: number;
  /** animate on mount instead of on scroll */
  immediate?: boolean;
  stagger?: number;
  lineClassName?: string;
}) {
  const reduce = useReducedMotion();
  const lines = Array.isArray(text) ? text : [text];
  let index = 0;

  return (
    <motion.span
      className={`block ${className}`}
      initial={reduce ? false : "hidden"}
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-6% 0px" } })}
      aria-label={lines.join(" ")}
    >
      {lines.map((line, li) => (
        <span key={li} className={`block ${lineClassName}`} aria-hidden="true">
          {line.split(" ").map((word, wi) => {
            const i = index++;
            return (
              <span key={wi}>
              {wi > 0 ? " " : null}
              <span className="inline-block overflow-hidden pb-[0.08em] align-top">
                <motion.span
                  className="inline-block will-change-transform"
                  variants={{
                    hidden: { y: "110%", rotate: 4 },
                    show: {
                      y: "0%",
                      rotate: 0,
                      transition: { duration: 1.15, ease, delay: delay + i * stagger }
                    }
                  }}
                >
                  {word}
                </motion.span>
              </span>
              </span>
            );
          })}
        </span>
      ))}
    </motion.span>
  );
}

/* ── ScrollWords: each word brightens as the passage scrolls by ─ */
function ScrollWord({
  word,
  progress,
  range
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{" "}
    </motion.span>
  );
}

export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  if (reduce) return <p className={className}>{text}</p>;
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <ScrollWord
          key={i}
          word={w}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        />
      ))}
    </p>
  );
}

/* ── ClipImage: unmasks on view, drifts with scroll ───────────── */
export function ClipImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  parallax = 12,
  from = "bottom",
  delay = 0,
  immediate = false
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: number;
  from?: "bottom" | "left" | "right";
  delay?: number;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);
  const hidden =
    from === "left" ? "inset(0 100% 0 0)" : from === "right" ? "inset(0 0 0 100%)" : "inset(100% 0 0 0)";
  const show = immediate || inView;

  return (
    <div ref={ref} className={`relative overflow-hidden bg-sand ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { clipPath: hidden }}
        animate={show ? { clipPath: "inset(0 0 0 0)" } : undefined}
        transition={{ duration: 1.5, ease, delay }}
      >
        <motion.div
          className="absolute inset-x-0 -inset-y-[14%]"
          style={reduce ? undefined : { y }}
          initial={reduce ? false : { scale: 1.25 }}
          animate={show ? { scale: 1 } : undefined}
          transition={{ duration: 2, ease, delay }}
        >
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Counter: counts up when visible ──────────────────────────── */
export function Counter({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease,
      onUpdate: (v) => setValue(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

/* ── Marquee: endless ribbon of words ─────────────────────────── */
export function Marquee({
  items,
  className = "",
  itemClassName = "",
  speed = 40,
  reverse = false,
  separator,
  altClassName = ""
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  /** extra class for every other item */
  altClassName?: string;
  speed?: number;
  reverse?: boolean;
  separator?: ReactNode;
}) {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className={`${itemClassName} ${i % 2 === 1 ? altClassName : ""}`}>{item}</span>
          {separator ?? <span className="mx-[0.6em] inline-block h-[0.18em] w-[0.18em] rotate-45 bg-bronze" />}
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <span className="sr-only">{items.join(", ")}</span>
      <div
        className={`marquee__track flex w-max ${reverse ? "marquee__track--rev" : ""}`}
        style={{ "--marquee-speed": `${speed}s` } as CSSProperties}
      >
        {row}
        {row}
      </div>
    </div>
  );
}

/* ── Magnetic: element leans toward the pointer ───────────────── */
export function Magnetic({ children, strength = 0.35, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 180, damping: 16, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={reduce ? undefined : { x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Cursor: bronze dot that grows into a label over media ────── */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      const media = t?.closest?.("[data-cursor]") as HTMLElement | null;
      setLabel(media ? media.dataset.cursor || "View" : null);
      setHoverLink(!media && !!t?.closest?.("a, button, input, textarea, label"));
    };
    window.addEventListener("pointermove", move);
    document.documentElement.classList.add("has-cursor");
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;
  const size = label ? 92 : hoverLink ? 44 : 10;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full border"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: size,
        height: size,
        backgroundColor: label ? "rgba(166,124,82,0.95)" : hoverLink ? "rgba(166,124,82,0)" : "rgba(166,124,82,1)",
        borderColor: hoverLink ? "rgba(166,124,82,0.9)" : "rgba(166,124,82,0)"
      }}
      transition={{ duration: 0.35, ease }}
    >
      {label && <span className="text-[0.72rem] tracking-wide text-ivory">{label}</span>}
    </motion.div>
  );
}

/* ── HorizontalScroll: pinned section that travels sideways ──── */
export function HorizontalScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (reduce) {
    return <div className={`flex gap-6 overflow-x-auto ${className}`}>{children}</div>;
  }

  return (
    <div ref={outer} style={{ height: `calc(100vh + ${distance}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className={`flex w-max ${className}`}>
          {children}
        </motion.div>
        <div className="frame mt-10">
          <div className="h-px w-full bg-charcoal/12">
            <motion.div className="h-px origin-left bg-bronze" style={{ scaleX: progress }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── HoverList: rows with a floating preview that trails the pointer */
export type HoverItem = {
  href: string;
  title: string;
  image: string;
  meta?: string;
  aside?: string;
};

export function HoverList({ items, className = "" }: { items: HoverItem[]; className?: string }) {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 28 });
  const sy = useSpring(y, { stiffness: 220, damping: 28 });
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className={`relative ${className}`}>
      <ul
        ref={listRef}
        className="border-t border-charcoal/14"
        onPointerMove={(e) => {
          const r = listRef.current?.getBoundingClientRect();
          if (!r) return;
          x.set(e.clientX - r.left);
          y.set(e.clientY - r.top);
        }}
        onPointerLeave={() => setActive(null)}
      >
        {items.map((item, i) => (
          <li key={item.href} onPointerEnter={() => setActive(i)}>
            <Link
              href={item.href}
              data-cursor="View"
              className="group grid grid-cols-12 items-baseline gap-x-4 border-b border-charcoal/12 py-6 transition-colors duration-500 md:py-8"
            >
              <span className="numeral col-span-2 text-xl text-bronze md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 font-serif text-[clamp(1.9rem,4.4vw,4.4rem)] leading-[0.95] tracking-[-0.02em] transition-all duration-700 ease-luxury group-hover:translate-x-3 group-hover:text-bronze md:col-span-6">
                {item.title}
              </span>
              {item.meta && (
                <span className="t-small col-span-10 col-start-3 mt-2 text-charcoal/60 md:col-span-3 md:col-start-auto md:mt-0">
                  {item.meta}
                </span>
              )}
              {item.aside && (
                <span className="t-small col-span-10 col-start-3 text-charcoal/50 md:col-span-2 md:col-start-auto md:text-right">
                  {item.aside}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Floating preview — desktop only */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[300px] w-[240px] overflow-hidden lg:block"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.6 : 1 }}
        transition={{ duration: 0.5, ease }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.href}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.15 }}
            transition={{ duration: 0.6, ease }}
          >
            <Image src={item.image} alt="" fill sizes="240px" className="object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ── ScrollLine: a rule that draws itself with scroll ─────────── */
export function useSectionProgress(offset: ["start end" | "start start" | "start 0.8" | "start 0.7", "end start" | "end end" | "end 0.6" | "end 0.5"] = ["start 0.8", "end 0.6"]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return { ref, progress: scrollYProgress };
}

export function ProgressRail({
  steps,
  className = ""
}: {
  steps: string[];
  className?: string;
}) {
  const { ref, progress } = useSectionProgress(["start 0.8", "end 0.5"]);
  const reduce = useReducedMotion();
  const fill = useSpring(progress, { stiffness: 90, damping: 25 });
  const [reached, setReached] = useState(reduce ? steps.length : 0);

  useEffect(() => {
    if (reduce) return;
    return progress.on("change", (v) => setReached(Math.ceil(v * steps.length + 0.001)));
  }, [progress, reduce, steps.length]);

  return (
    <div ref={ref} className={className}>
      {/* Desktop: horizontal rail */}
      <div className="relative hidden lg:block">
        <div className="absolute left-0 right-0 top-[5px] h-px bg-charcoal/14" />
        <motion.div
          className="absolute left-0 right-0 top-[5px] h-px origin-left bg-bronze"
          style={{ scaleX: reduce ? 1 : fill }}
        />
        <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
          {steps.map((step, i) => {
            const on = i < reached;
            return (
              <li key={step} className="pr-4">
                <span
                  className={`block h-[11px] w-[11px] rounded-full border transition-all duration-700 ${
                    on ? "scale-100 border-bronze bg-bronze" : "scale-75 border-charcoal/30 bg-ivory"
                  }`}
                />
                <span
                  className={`numeral mt-8 block text-[3rem] leading-none transition-colors duration-700 ${
                    on ? "text-bronze" : "text-charcoal/20"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`mt-4 block text-[0.95rem] leading-snug transition-colors duration-700 ${
                    on ? "text-charcoal" : "text-charcoal/35"
                  }`}
                >
                  {step}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: vertical rail */}
      <div className="relative lg:hidden">
        <div className="absolute bottom-0 left-[5px] top-0 w-px bg-charcoal/14" />
        <motion.div
          className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-bronze"
          style={{ scaleY: reduce ? 1 : fill }}
        />
        <ol className="relative space-y-8">
          {steps.map((step, i) => {
            const on = i < reached;
            return (
              <li key={step} className="flex items-baseline gap-6">
                <span
                  className={`relative top-[-2px] block h-[11px] w-[11px] shrink-0 rounded-full border transition-all duration-700 ${
                    on ? "border-bronze bg-bronze" : "border-charcoal/30 bg-ivory"
                  }`}
                />
                <span className={`numeral text-3xl leading-none transition-colors duration-700 ${on ? "text-bronze" : "text-charcoal/25"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-base transition-colors duration-700 ${on ? "text-charcoal" : "text-charcoal/40"}`}>
                  {step}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

/* ── StackCards: cards pin and stack as you scroll ────────────── */
export function StackCards({
  cards,
  dark = false
}: {
  cards: { kicker: string; title: string; body: string }[];
  dark?: boolean;
}) {
  return (
    <div className="relative">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className="sticky mb-6 md:mb-10"
          style={{ top: `calc(14vh + ${i * 28}px)` }}
        >
          <StackCard card={card} index={i} total={cards.length} dark={dark} />
        </div>
      ))}
    </div>
  );
}

function StackCard({
  card,
  index,
  total,
  dark
}: {
  card: { kicker: string; title: string; body: string };
  index: number;
  total: number;
  dark: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.3", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.035]);
  const shades = dark
    ? ["bg-[#1b1917]", "bg-[#221f1c]", "bg-[#2a2622]"]
    : ["bg-ivory", "bg-paper", "bg-sand"];

  return (
    <motion.article
      ref={ref}
      style={reduce ? undefined : { scale }}
      className={`origin-top border p-8 md:p-12 ${dark ? "border-ivory/12 text-ivory" : "border-charcoal/12"} ${shades[index % shades.length]}`}
    >
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-14">
        <span className={`numeral text-[clamp(4rem,8vw,7.5rem)] leading-[0.8] ${dark ? "text-sand" : "text-bronze"}`}>
          {card.kicker}
        </span>
        <div className="self-end">
          <h3 className="t-h2">{card.title}</h3>
          <p className={`mt-5 max-w-xl text-[1rem] leading-[1.8] ${dark ? "text-ivory/65" : "text-charcoal/68"}`}>
            {card.body}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* ── ScrollScale: a full-bleed image that opens up as it scrolls in */
export function ScrollScaleImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const inset = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const clip = useTransform(inset, (v) => `inset(0 ${v}% 0 ${v}%)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);

  return (
    <div ref={ref} className="relative h-[70vh] md:h-[110vh]">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={reduce ? undefined : { clipPath: clip, borderRadius: radius }}
      >
        <motion.div className="absolute inset-0" style={reduce ? undefined : { scale }}>
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
