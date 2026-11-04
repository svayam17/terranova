"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.55,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    const scrollToHash = (hash: string) => {
      const target = hash === "#" ? 0 : hash;
      lenis.scrollTo(target, {
        duration: 1.55,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a[href]");

      if (!link) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href || (!href.startsWith("#") && !href.startsWith("/#"))) {
        return;
      }

      const url = new URL(href, window.location.href);

      const targetHash = href === "#" ? "#" : url.hash;

      if (url.pathname !== window.location.pathname || !targetHash) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", href === "#" ? window.location.pathname : url.hash);
      scrollToHash(targetHash);
    };

    frame = requestAnimationFrame(raf);
    document.addEventListener("click", onClick);

    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
