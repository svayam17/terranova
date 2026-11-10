"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { collections, subcollectionDetails, type Collection } from "@/lib/content";
import { RunHead } from "@/components/Editorial";
import { ClipImage, Reveal, SplitText, Stagger, ease } from "@/components/motion";
import { useIntroDelay } from "@/components/PageTransition";

export default function CategoryDetailClient({ collection }: { collection: Collection }) {
  const intro = useIntroDelay();
  const reduce = useReducedMotion();
  const index = collections.findIndex((c) => c.slug === collection.slug);
  const next = collections[(index + 1) % collections.length];

  return (
    <>
      <section className="frame pb-20 pt-8 md:pb-28 md:pt-12">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: intro }}
          className="flex items-center justify-between"
        >
          <Link href="/products" className="link-u text-charcoal/65">
            <ArrowLeft size={14} /> Products
          </Link>
          <span className="t-small text-charcoal/50">
            {String(index + 1).padStart(2, "0")} / {String(collections.length).padStart(2, "0")}
          </span>
        </motion.div>

        <div className="grid-12 mt-12 gap-y-12">
          <div className="col-span-12 flex flex-col justify-between md:col-span-6">
            <h1 className="t-display">
              <SplitText immediate delay={intro + 0.1} text={collection.name} />
            </h1>
            <motion.p
              className="t-lead mt-10 max-w-lg text-charcoal/75"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: intro + 0.5 }}
            >
              {collection.detail}
            </motion.p>
          </div>
          <ClipImage
            src={collection.image}
            alt={collection.name}
            immediate
            priority
            delay={intro + 0.2}
            className="col-span-12 aspect-[4/3] md:col-span-6 md:aspect-[4/5]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      {collection.subCollections.length > 0 && (
        <section className="bg-paper">
          <div className="frame spread">
            <div className="grid-12 gap-y-8">
              <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="ii">{collection.name}</RunHead></Reveal></div>
              <h2 className="t-h1 col-span-12 md:col-span-9"><SplitText text="Subcategories" /></h2>
            </div>

            <Stagger className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 md:mt-20" gap={0.1}>
              {collection.subCollections.map((sub, i) => {
                const info = subcollectionDetails[sub] || { image: collection.image, spec: undefined };
                return (
                  <article key={sub} className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                      <Image
                        src={info.image}
                        alt={sub}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1.6s] ease-luxury group-hover:scale-[1.08]"
                      />
                      <span className="numeral absolute left-5 top-4 text-2xl text-ivory">{String(i + 1).padStart(2, "0")}</span>
                      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-charcoal/90 p-6 text-ivory backdrop-blur-sm transition-transform duration-700 ease-luxury group-hover:translate-y-0">
                        <p className="text-[0.9rem] leading-[1.7] text-ivory/85">{info.spec ?? "Specification available in product PDF."}</p>
                      </div>
                    </div>
                    <h3 className="t-h3 mt-5">{sub}</h3>
                    <p className="t-body mt-2 text-[0.9rem] lg:hidden">{info.spec ?? "Specification available in product PDF."}</p>
                  </article>
                );
              })}
            </Stagger>
          </div>
        </section>
      )}

      {/* Next collection */}
      <Link href={`/products/${next.slug}`} data-cursor="Next" className="group relative block overflow-hidden bg-charcoal text-ivory">
        <Image
          src={next.image}
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover opacity-30 transition-all duration-[1.4s] ease-luxury group-hover:scale-100 group-hover:opacity-55"
        />
        <div className="frame relative flex items-end justify-between gap-6 py-24 md:py-36">
          <div>
            <p className="t-small text-sand">Next collection</p>
            <p className="t-display mt-6">{next.name}</p>
          </div>
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-ivory/40 transition-all duration-500 group-hover:bg-ivory group-hover:text-charcoal md:h-20 md:w-20">
            <ArrowUpRight size={22} />
          </span>
        </div>
      </Link>
    </>
  );
}
