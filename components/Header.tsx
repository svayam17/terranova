"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Testimonials / Blog", href: "/testimonials-blog" },
];

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isDark = variant === "dark";

  const logoColor = isDark ? "text-ivory" : "text-charcoal";
  const linkColor = isDark ? "text-ivory/78" : "text-charcoal/62";
  const linkHover = isDark ? "hover:text-ivory" : "hover:text-charcoal";
  const activeColor = isDark ? "text-ivory" : "text-charcoal";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="relative z-20 flex items-center justify-between px-5 py-6 md:px-12 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-2xl font-medium tracking-[0.08em] md:text-3xl ${logoColor}`}
        >
          Terra Nova
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`hidden items-center gap-10 text-[11px] uppercase tracking-[0.22em] ${linkColor} lg:flex`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${linkHover} ${
                isActive(link.href) ? activeColor : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden ${
            mobileOpen ? "text-ivory" : logoColor
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            className={`block h-[1.5px] w-5 ${
              mobileOpen ? "bg-ivory" : isDark ? "bg-ivory" : "bg-charcoal"
            }`}
            animate={
              mobileOpen
                ? { rotate: 45, y: 3.25 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className={`block h-[1.5px] w-5 ${
              mobileOpen ? "bg-ivory" : isDark ? "bg-ivory" : "bg-charcoal"
            }`}
            animate={
              mobileOpen
                ? { rotate: -45, y: -3.25 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-full flex-col items-start justify-center px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 font-serif text-4xl font-medium tracking-[0.02em] transition-colors ${
                      isActive(link.href)
                        ? "text-ivory"
                        : "text-ivory/60 hover:text-ivory"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 space-y-3 text-[11px] uppercase tracking-[0.22em] text-ivory/50"
              >
                <a href="mailto:amit@gswoods.com" className="block hover:text-ivory transition-colors">
                  amit@gswoods.com
                </a>
                <a href="tel:+919867185966" className="block hover:text-ivory transition-colors">
                  +91 98671 85966
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
