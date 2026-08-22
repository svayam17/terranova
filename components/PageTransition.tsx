"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isSettling, setIsSettling] = useState(false);

  useEffect(() => {
    setIsSettling(true);
    const timeout = window.setTimeout(() => setIsSettling(false), 720);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-px origin-left bg-bronze"
        initial={false}
        animate={{
          scaleX: isSettling ? 1 : 0,
          opacity: isSettling ? 0.9 : 0
        }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}
