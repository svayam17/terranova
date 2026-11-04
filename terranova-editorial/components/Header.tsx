"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Testimonials / Blog", href: "/testimonials-blog" }
];

interface HeaderProps {
  variant?: "dark" | "light";
}

/**
 * Masthead. Wordmark set like a journal title, navigation as a quiet
 * sentence-case index with a bronze underline marking the current page.
 */
export default function Header({ variant = "light" }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isDark = variant === "dark";
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`relative z-20 ${isDark ? "text-ivory" : "text-charcoal"}`}
      >
        <div
          className={`frame flex items-center justify-between py-6 md:py-7 ${
            isDark ? "border-b border-ivory/15" : "border-b border-charcoal/12"
          }`}
        >
          <Link
            href="/"
            className="font-serif text-[1.65rem] leading-none tracking-[0.06em] md:text-[2rem]"
            aria-label="Terra Nova, home"
          >
            Terra Nova
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[0.84rem] tracking-[0.01em]">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative pb-1 transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute inset-x-0 -bottom-px h-px bg-bronze" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative z-50 -mr-2 flex h-11 items-center gap-3 px-2 text-[0.84rem] lg:hidden ${
              mobileOpen ? "text-ivory" : ""
            }`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="flex w-6 flex-col gap-[6px]">
              <motion.span
                className="block h-px w-full bg-current"
                animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="block h-px w-full bg-current"
                animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto bg-charcoal text-ivory"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="frame flex min-h-full flex-col justify-between pb-10 pt-28">
              <ol className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-baseline gap-5 py-2 font-serif text-[2.4rem] leading-none ${
                        isActive(link.href) ? "text-ivory" : "text-ivory/55"
                      }`}
                    >
                      <span className="numeral w-6 text-base text-sand">{index + 1}</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-14 space-y-2 border-t border-ivory/15 pt-6 text-sm text-ivory/60">
                <a href="mailto:amit@gswoods.com" className="block">
                  amit@gswoods.com
                </a>
                <a href="tel:+919867185966" className="block">
                  +91 98671 85966
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
