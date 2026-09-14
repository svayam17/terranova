"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function ProductsSectionClient({ sec, sidx }: { sec: any; sidx: number }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.section key={sec.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: shouldReduce ? 0 : 0.6, delay: sidx * 0.05 }} className="grid gap-6 lg:grid-cols-[4rem_1fr_1fr] items-start">
      <div>
        <span className="font-serif text-4xl text-bronze">{sec.number}</span>
      </div>
      <div>
        <h2 className="font-serif text-2xl">{sec.title}</h2>
        {sec.note && <p className="mt-3 text-sm text-charcoal/70">{sec.note}</p>}
      </div>
      <div>
        <div className="grid gap-4 md:grid-cols-2">
          {sec.sub.map((block: any, idx: number) => (
            <div key={idx}>
              {block.heading && <p className="text-sm font-semibold">{block.heading}</p>}
              <ul className="mt-2 space-y-2 text-sm text-charcoal/70">
                {block.items.map((it: string) => (
                  <li key={it} className="flex items-center justify-between">
                    <span>{it}</span>
                    <Link href={`/products/${sec.id}`} className="ml-4 text-bronze hover:translate-x-1 transition-transform duration-200">View →</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
