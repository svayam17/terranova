import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";
import { collections } from "@/lib/content";

export const metadata = {
  title: "Products | TerraNova",
  description: "Material collections and editorial catalogue for project-led sourcing."
};

/*
 * Catalogue rhythm: a repeating five-plate pattern so ten collections read
 * as two magazine spreads rather than a uniform grid.
 */
const rhythm = [
  { wrap: "md:col-span-7", plate: "aspect-[4/5] md:aspect-[6/5]" },
  { wrap: "md:col-span-4 md:col-start-9 md:mt-28", plate: "aspect-[4/5]" },
  { wrap: "md:col-span-4", plate: "aspect-[3/4]" },
  { wrap: "md:col-span-4 md:mt-20", plate: "aspect-[3/4]" },
  { wrap: "md:col-span-4", plate: "aspect-[3/4]" }
];

export default function ProductsPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <section className="frame pb-16 pt-10 md:pb-24 md:pt-16">
        <RunHead n="i">All collections</RunHead>
        <div className="grid-12 mt-10 gap-y-10">
          <h1 className="t-display col-span-12 md:col-span-9">
            <span className="reveal-line"><span>Material collections</span></span>
            <span className="reveal-line"><span>for resolved spaces.</span></span>
          </h1>
          <p className="reveal-fade t-body col-span-12 self-end md:col-span-3">
            TerraNova works across a focused range of finishing-material categories, sourcing from specialised manufacturing partners across multiple countries. Our product approach is project-led: we evaluate specification, quantity, design and commercial objectives before identifying the right sourcing route.
          </p>
        </div>
      </section>

      {/* Index of collections — a contents page */}
      <section className="frame">
        <ol className="grid border-t border-charcoal/14 sm:grid-cols-2 lg:grid-cols-5">
          {collections.map((c, i) => (
            <li key={c.slug} className="border-b border-charcoal/10">
              <a href={`#${c.slug}`} className="group flex items-baseline gap-3 py-3 pr-4 text-sm text-charcoal/70 transition-colors hover:text-charcoal">
                <span className="numeral text-base text-bronze">{String(i + 1).padStart(2, "0")}</span>
                {c.name}
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="frame pb-24 pt-20 md:pb-36 md:pt-28">
        <div className="grid-12 gap-y-16 md:gap-y-24">
          {collections.map((collection, i) => {
            const r = rhythm[i % rhythm.length];
            return (
              <Link
                id={collection.slug}
                key={collection.slug}
                href={`/products/${collection.slug}`}
                className={`group col-span-12 block scroll-mt-10 ${r.wrap}`}
              >
                <div className={`plate ${r.plate}`}>
                  <Image
                    src={collection.image}
                    alt={`${collection.name} material collection`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-charcoal/12 pt-4">
                  <div className="flex items-baseline gap-4">
                    <span className="numeral text-xl text-bronze">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="t-h3">{collection.name}</h2>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-charcoal/50 transition-all duration-500 ease-luxury group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-paper">
        <div className="frame spread grid-12 gap-y-10">
          <h2 className="t-h1 col-span-12 md:col-span-7">One Project. Multiple Possibilities.</h2>
          <div className="col-span-12 self-end md:col-span-4 md:col-start-9">
            <p className="t-body">
              A project may require one product or a combination of categories. TerraNova evaluates requirements across products, factories and countries to determine the most appropriate sourcing solution.
            </p>
            <Link href="/contact-us?open=1" className="btn mt-8 w-full sm:w-fit">
              Tell us what the project needs <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
