import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { collections, subcollectionDetails, type Collection } from "@/lib/content";
import { RunHead } from "@/components/Editorial";

export default function CategoryDetailClient({ collection }: { collection: Collection }) {
  const index = collections.findIndex((c) => c.slug === collection.slug);
  const next = collections[(index + 1) % collections.length];

  return (
    <>
      <section className="frame pb-20 pt-10 md:pb-28 md:pt-16">
        <Link href="/products" className="link-u text-charcoal/65">
          <ArrowLeft size={14} /> Products
        </Link>

        <div className="grid-12 mt-12 gap-y-12">
          <div className="col-span-12 flex flex-col justify-between md:col-span-5">
            <div>
              <RunHead n={String(index + 1).padStart(2, "0")}>{collection.name}</RunHead>
              <h1 className="t-display mt-10">
                <span className="reveal-line"><span>{collection.name}</span></span>
              </h1>
            </div>
            <p className="reveal-fade t-lead mt-10 text-charcoal/75">{collection.detail}</p>
          </div>
          {collection.image && (
            <div className="reveal-plate plate col-span-12 aspect-[4/3] md:col-span-7 md:aspect-[5/4]">
              <Image src={collection.image} alt={collection.name} fill priority sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
            </div>
          )}
        </div>
      </section>

      {collection.subCollections.length > 0 && (
        <section className="bg-paper">
          <div className="frame spread">
            <div className="grid-12 gap-y-8">
              <div className="col-span-12 md:col-span-3"><RunHead n="ii">{collection.name}</RunHead></div>
              <h2 className="t-h1 col-span-12 md:col-span-9">Subcategories</h2>
            </div>

            <ol className="mt-16 border-t border-charcoal/16 md:mt-20">
              {collection.subCollections.map((sub, i) => {
                const info = subcollectionDetails[sub] || { image: collection.image, spec: undefined };
                return (
                  <li key={sub} className="grid-12 items-center gap-y-6 border-b border-charcoal/12 py-8 md:py-10">
                    <span className="numeral col-span-2 text-3xl text-bronze md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="t-h2 col-span-10 md:col-span-5">{sub}</h3>
                    <p className="t-body col-span-12 md:col-span-3">
                      {info.spec ?? "Specification available in product PDF."}
                    </p>
                    <div className="plate col-span-12 aspect-[16/9] md:col-span-3 md:aspect-[4/3]">
                      <Image src={info.image} alt={sub} fill sizes="(min-width: 768px) 22vw, 100vw" className="object-cover" />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      <section className="frame py-16 md:py-20">
        <Link href={`/products/${next.slug}`} className="group flex items-baseline justify-between gap-6 border-t border-charcoal/14 pt-8">
          <span className="t-h1 transition-colors duration-500 group-hover:text-bronze">{next.name}</span>
          <ArrowUpRight size={28} className="shrink-0 text-bronze transition-transform duration-500 ease-luxury group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  );
}
