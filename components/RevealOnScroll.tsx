"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduce ? 0 : 0.6 }}
    >
      {children}
    </motion.div>
  );
}
