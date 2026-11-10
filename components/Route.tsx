"use client";

/*
 * The bronze sourcing route — Terra Nova's signature.
 *
 * <RouteCanvas> lays one SVG over a page. Elements marked with
 * `data-route-stop="Label"` become stations; the route is a single
 * continuous curve threaded through them (x from `data-route-x`, a
 * fraction of the page width). As the reader scrolls, the line draws so
 * that its tip follows the reading position, and each station lights
 * when the line reaches it.
 *
 * Layering: the SVG sits at z-[1]. Chapter backgrounds sit at z-0 and
 * chapter content at z-[2], so the line runs over grounds and under
 * photographs and type, woven into the composition.
 */

import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

type Stop = { label: string; n: string; x: number; y: number; len: number };

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function RouteCanvas({ children, className = "", labels = false }: { children: ReactNode; className?: string; labels?: boolean }) {
  const wrap = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const tip = useRef<SVGCircleElement>(null);
  const reduce = useReducedMotion();
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [d, setD] = useState("");
  const [stops, setStops] = useState<Stop[]>([]);
  const [lit, setLit] = useState(-1);
  const samples = useRef<{ y: number; len: number }[]>([]);
  const total = useRef(0);

  /* Measure stations and build the curve. */
  const measure = useCallback(() => {
    const el = wrap.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const w = el.clientWidth;
    const h = el.scrollHeight;
    const narrow = w < 768;
    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-route-stop]"));
    const pts = nodes.map((n, i) => {
      const r = n.getBoundingClientRect();
      const fx = n.dataset.routeX;
      // Default: the station sits just left of its marker element (the chapter's running head).
      const x = narrow ? 7 : fx ? parseFloat(fx) * w : Math.max(8, r.left - box.left - 20);
      return {
        label: n.dataset.routeStop || "",
        n: String(i + 1).padStart(2, "0"),
        x,
        y: r.top - box.top + parseFloat(n.dataset.routeDy || "10"),
        swing: parseFloat(n.dataset.routeSwing || (i % 2 ? "0.42" : "0.86"))
      };
    });
    if (pts.length < 2) return;

    // Start just above the first station, then cubic segments with
    // vertical handles so the line falls like a thread between stations.
    let p = `M ${pts[0].x.toFixed(1)} ${(pts[0].y - 120).toFixed(1)} L ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const dy = b.y - a.y;
      // Between stations the thread sweeps out across the page (behind the
      // photography) and returns; on phones it stays close to the gutter.
      const sw = narrow ? 0 : w * a.swing;
      p += ` C ${(a.x + sw).toFixed(1)} ${(a.y + dy * 0.3).toFixed(1)} ${(b.x + sw).toFixed(1)} ${(b.y - dy * 0.3).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    }
    setSize({ w, h });
    setD(p);
    setStops(pts.map(({ label, n, x, y }) => ({ label, n, x, y, len: 0 })));
  }, []);

  useIso(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (wrap.current) ro.observe(wrap.current);
    window.addEventListener("load", measure);
    const t = window.setTimeout(measure, 1200);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", measure);
      window.clearTimeout(t);
    };
  }, [measure]);

  /* Sample the path once per shape: y → length, and each station's length. */
  useEffect(() => {
    const pe = path.current;
    if (!pe || !d) return;
    const L = pe.getTotalLength();
    total.current = L;
    const N = 600;
    const s: { y: number; len: number }[] = [];
    let maxY = -Infinity;
    for (let i = 0; i <= N; i++) {
      const len = (i / N) * L;
      const pt = pe.getPointAtLength(len);
      maxY = Math.max(maxY, pt.y);
      s.push({ y: maxY, len });
    }
    samples.current = s;
    setStops((prev) =>
      prev.map((st) => {
        let best = 0;
        let bestD = Infinity;
        for (const smp of s) {
          const dd = Math.abs(smp.y - st.y);
          if (dd < bestD) {
            bestD = dd;
            best = smp.len;
          }
        }
        return { ...st, len: best };
      })
    );
    pe.style.strokeDasharray = `${L}`;
    pe.style.strokeDashoffset = reduce ? "0" : `${L}`;
  }, [d, reduce]);

  /* Draw with scroll: the tip follows 62% down the viewport. */
  useEffect(() => {
    if (!d) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrap.current;
      const pe = path.current;
      if (!el || !pe || !samples.current.length) return;
      const top = el.getBoundingClientRect().top;
      const readY = window.innerHeight * 0.62 - top;
      const s = samples.current;
      let len = 0;
      if (reduce) len = total.current;
      else {
        let lo = 0;
        let hi = s.length - 1;
        while (lo < hi) {
          const mid = (lo + hi) >> 1;
          if (s[mid].y < readY) lo = mid + 1;
          else hi = mid;
        }
        len = s[lo].len;
      }
      pe.style.strokeDashoffset = `${total.current - len}`;
      if (tip.current) {
        const pt = pe.getPointAtLength(len);
        tip.current.setAttribute("cx", pt.x.toFixed(1));
        tip.current.setAttribute("cy", pt.y.toFixed(1));
        tip.current.style.opacity = len > 2 && len < total.current - 2 ? "1" : "0";
      }
      let k = -1;
      stops.forEach((st, i) => {
        if (len >= st.len - 1) k = i;
      });
      setLit(k);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [d, stops, reduce]);

  return (
    <div ref={wrap} className={`relative ${className}`}>
      {d && (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[1]"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
        >
          <path d={d} fill="none" stroke="rgba(166,124,82,0.18)" strokeWidth="1" />
          <path ref={path} d={d} fill="none" stroke="#A67C52" strokeWidth="1.6" strokeLinecap="round" />
          <circle ref={tip} r="5" fill="#A67C52" style={{ opacity: 0, transition: "opacity 300ms" }} />
          {stops.map((s, i) => (
            <g key={s.label}>
              <circle
                cx={s.x}
                cy={s.y}
                r={i <= lit ? 7 : 5}
                fill={i <= lit ? "#A67C52" : "#F5F1EB"}
                stroke="#A67C52"
                strokeWidth="1.4"
                style={{ transition: "r 500ms cubic-bezier(0.16,1,0.3,1), fill 500ms" }}
              />
              <circle
                cx={s.x}
                cy={s.y}
                r={i <= lit ? 18 : 7}
                fill="none"
                stroke="rgba(166,124,82,0.45)"
                style={{ transition: "r 900ms cubic-bezier(0.16,1,0.3,1), opacity 900ms", opacity: i <= lit ? 1 : 0 }}
              />
            </g>
          ))}
        </svg>
      )}

      {/* Station labels: HTML so they stay crisp and readable. */}
      {labels && stops.map((s, i) => {
        const right = s.x > size.w * 0.55;
        return (
          <div
            key={`l-${s.label}`}
            aria-hidden="true"
            className="pointer-events-none absolute z-[3] hidden md:block"
            style={{
              left: right ? undefined : s.x + 22,
              right: right ? size.w - s.x + 22 : undefined,
              top: s.y - 11,
              textAlign: right ? "right" : "left"
            }}
          >
            <span
              className="block whitespace-nowrap text-[0.72rem] tracking-[0.02em] transition-all duration-700"
              style={{
                color: i <= lit ? "#A67C52" : "rgba(139,139,139,0.8)",
                transform: i <= lit ? "translateX(0)" : `translateX(${right ? 8 : -8}px)`,
                opacity: i <= lit ? 1 : 0.55
              }}
            >
              <span className="numeral mr-2 text-[0.95rem]">{s.n}</span>
              {s.label}
            </span>
          </div>
        );
      })}
      {children}
    </div>
  );
}

/**
 * A chapter of the page. Its ground (z-0) sits under the route; its
 * content (z-[2]) above. Dark grounds open from an inset panel to full
 * bleed as the chapter scrolls in — the section-to-section transition.
 */
export function Chapter({
  tone = "ivory",
  children,
  className = "",
  id,
  open = false
}: {
  tone?: "ivory" | "paper" | "sand" | "dark";
  children: ReactNode;
  className?: string;
  id?: string;
  /** animate the ground opening to full bleed */
  open?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const ground = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open || reduce) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      const g = ground.current;
      if (!el || !g) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the chapter's top is at the bottom of the viewport, 1 when it reaches 25%.
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.75)));
      const e = 1 - Math.pow(1 - p, 3);
      const inset = (1 - e) * 5;
      const radius = (1 - e) * 28;
      g.style.clipPath = `inset(0 ${inset}% round ${radius}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [open, reduce]);

  const bg =
    tone === "dark" ? "bg-charcoal" : tone === "paper" ? "bg-paper" : tone === "sand" ? "bg-[#e6ddd1]" : "bg-ivory";

  return (
    <section ref={ref} id={id} className={`relative ${tone === "dark" ? "on-dark text-ivory" : "text-charcoal"} ${className}`}>
      <div ref={ground} className={`absolute inset-0 z-0 ${bg}`} aria-hidden="true" />
      <div className="relative z-[2]">{children}</div>
    </section>
  );
}
