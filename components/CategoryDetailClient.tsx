"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { subcollectionDetails } from "@/lib/content";

export default function CategoryDetailClient({ collection }: { collection: any }) {
  const shouldReduce = useReducedMotion();

  return (
    <div className="px-5 pb-16 md:px-12 lg:px-16">
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduce ? 0 : 0.6 }} className="mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-bronze">{collection.name}</p>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-medium">{collection.name}</h1>
        <p className="mt-4 text-sm text-charcoal/70 max-w-3xl">{collection.detail}</p>
      </motion.header>

      <div className="mx-auto mt-8 max-w-6xl">
        {collection.image && (
          <div className="relative mb-8 h-[340px] md:h-[420px] overflow-hidden rounded-none">
            <Image src={collection.image} alt={collection.name} fill className="object-cover" />
          </div>
        )}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduce ? 0 : 0.6 }}
        >
          <h2 className="font-serif text-xl">Subcategories</h2>

          <div className="mt-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {collection.subCollections && collection.subCollections.map((sub: string) => {
                const info = subcollectionDetails[sub] || { image: collection.image, spec: undefined };

                return (
                  <motion.article
                    key={sub}
                    className="group bg-ivory"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: shouldReduce ? 0 : 0.6 }}
                    whileHover={shouldReduce ? undefined : { translateY: -6 }}
                  >
                    <div className="overflow-hidden">
                      <div className="relative h-48 md:h-56 w-full transition-transform duration-500 group-hover:scale-105">
                        <Image src={info.image} alt={sub} fill className="object-cover" />
                      </div>
                    </div>

                    <div className="px-4 py-4">
                      <div className="flex items-center justify-between">
                        <p className="font-serif text-lg font-medium">{sub}</p>
                        <motion.span className="ml-3 text-charcoal/70" whileHover={shouldReduce ? undefined : { x: 6 }}>
                          <ArrowUpRight size={14} />
                        </motion.span>
                      </div>

                      {info.spec ? (
                        <p className="mt-3 text-sm text-charcoal/70">{info.spec}</p>
                      ) : (
                        <p className="mt-3 text-sm text-charcoal/50">Specification available in product PDF.</p>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
