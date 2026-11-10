"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections, heroImage } from "@/lib/content";
import { useIntroDelay } from "@/components/PageTransition";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Testimonials / Blog", href: "/testimonials-blog" }
];

/* An image for each menu entry, drawn from the site's own photography. */
const menuImages = [
  heroImage,
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=88",
  collections[0].image,
  collections[6].image,
  collections[3].image,
  collections[5].image
];

const ease = [0.16, 1, 0.3, 1] as const;

interface HeaderProps {
  /** "dark": sits over a full-bleed image (ivory text) until scrolled. */
  variant?: "dark" | "light";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(0);
  const { scrollY } = useScroll();
  const intro = useIntroDelay();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 240 && y > prev && !open);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const overlay = variant === "dark" && !scrolled && !open;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {variant === "light" && <div className="h-[76px] md:h-[92px]" aria-hidden="true" />}

      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          open
            ? "bg-transparent text-ivory"
            : overlay
            ? "bg-transparent text-ivory"
            : scrolled
            ? "bg-ivory/85 text-charcoal backdrop-blur-md"
            : "bg-ivory text-charcoal"
        }`}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease }}
      >
        <motion.div
          className="frame flex h-[76px] items-center justify-between md:h-[92px]"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: intro + 0.05 }}
        >
          <Link href="/" className="group relative z-10 flex items-baseline gap-3" aria-label="Terra Nova, home">
            <span className="font-serif text-[1.7rem] leading-none tracking-[0.04em] md:text-[2.05rem]">Terra Nova</span>
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1 text-[0.84rem]">
              {navLinks.slice(1, 6).map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className="group relative block overflow-hidden px-3 py-2"
                    >
                      <span className="block transition-transform duration-500 ease-luxury group-hover:-translate-y-[calc(100%+0.75rem)]">
                        {link.label}
                      </span>
                      <span className="absolute inset-x-3 top-2 block translate-y-[calc(100%+0.75rem)] text-bronze transition-transform duration-500 ease-luxury group-hover:translate-y-0">
                        {link.label}
                      </span>
                      {active && <span className="absolute inset-x-3 bottom-1 h-px bg-bronze" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <Link
              href="/contact-us"
              className={`hidden items-center gap-2 rounded-full border px-5 py-2.5 text-[0.82rem] transition-colors duration-500 md:inline-flex ${
                overlay || open
                  ? "border-ivory/40 hover:bg-ivory hover:text-charcoal"
                  : "border-charcoal/25 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
              }`}
            >
              Discuss Your Project <ArrowUpRight size={14} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 items-center gap-3 rounded-full px-1 text-[0.82rem]"
            >
              <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current/30" style={{ borderColor: "currentColor" }}>
                <motion.span
                  className="absolute h-px w-4 bg-current"
                  animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                  transition={{ duration: 0.5, ease }}
                />
                <motion.span
                  className="absolute h-px w-4 bg-current"
                  animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
                  transition={{ duration: 0.5, ease }}
                />
              </span>
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto bg-charcoal text-ivory"
            data-lenis-prevent
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="frame grid min-h-full grid-cols-12 gap-x-8 pb-10 pt-28 md:pt-36">
              <ol className="col-span-12 lg:col-span-7" onPointerLeave={() => setHovered(navLinks.findIndex((l) => isActive(l.href)))}>
                {navLinks.map((link, i) => (
                  <li key={link.href} className="overflow-hidden border-b border-ivory/10">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.8, ease, delay: 0.25 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onPointerEnter={() => setHovered(i)}
                        className="group flex items-baseline gap-5 py-3 md:py-4"
                      >
                        <span className="numeral w-8 text-base text-sand/70">{String(i + 1).padStart(2, "0")}</span>
                        <span
                          className={`font-serif text-[clamp(2.2rem,5.4vw,4.6rem)] leading-[0.95] tracking-[-0.02em] transition-all duration-700 ease-luxury group-hover:translate-x-4 group-hover:italic ${
                            isActive(link.href) ? "text-ivory" : "text-ivory/55 group-hover:text-ivory"
                          }`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ol>

              <div className="relative col-span-5 hidden lg:block">
                <motion.div
                  className="sticky top-36 aspect-[4/5] overflow-hidden"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  exit={{ clipPath: "inset(100% 0 0 0)" }}
                  transition={{ duration: 1.1, ease, delay: 0.35 }}
                >
                  {menuImages.map((src, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      initial={false}
                      animate={{ opacity: hovered === i ? 1 : 0, scale: hovered === i ? 1 : 1.12 }}
                      transition={{ duration: 0.9, ease }}
                    >
                      <Image src={src} alt="" fill loading="eager" sizes="40vw" className="object-cover" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="col-span-12 mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-ivory/15 pt-6 text-sm text-ivory/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a href="mailto:amit@gswoods.com" className="hover:text-ivory">amit@gswoods.com</a>
                <a href="tel:+919867185966" className="hover:text-ivory">+91 98671 85966</a>
                <a href="#" className="hover:text-ivory">Instagram</a>
                <a href="#" className="hover:text-ivory">LinkedIn</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
