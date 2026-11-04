import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { RunHead } from "@/components/Editorial";
import { ClipImage, HoverList, Magnetic, Reveal, SplitText } from "@/components/motion";
import { collections } from "@/lib/content";

export const metadata = {
  title: "Products | TerraNova",
  description: "Material collections and editorial catalogue for project-led sourcing."
};

/* Gallery rhythm: wide, tall, tall, wide … so ten plates read as spreads. */
const rhythm = [
  { wrap: "md:col-span-7", plate: "aspect-[4/3]" },
  { wrap: "md:col-span-5 md:mt-32", plate: "aspect-[4/5]" },
  { wrap: "md:col-span-5", plate: "aspect-[4/5]" },
  { wrap: "md:col-span-6 md:col-start-7 md:mt-24", plate: "aspect-[4/3]" }
];

export default function ProductsPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <PageHero
        label="All collections"
        lines={["Material collections", "for resolved spaces."]}
        aside={
          <p className="t-body">
            TerraNova works across a focused range of finishing-material categories, sourcing from specialised manufacturing partners across multiple countries. Our product approach is project-led: we evaluate specification, quantity, design and commercial objectives before identifying the right sourcing route.
          </p>
        }
      />

      {/* Index — hover a row to preview the material */}
      <section className="frame pb-24 md:pb-36">
        <HoverList
          items={collections.map((c) => ({
            href: `/products/${c.slug}`,
            title: c.name,
            image: c.image,
            meta: c.subCollections.slice(0, 3).join(", "),
            aside: c.subCollections.length ? `${c.subCollections.length} ranges` : undefined
          }))}
        />
      </section>

      {/* Gallery */}
      <section className="bg-paper">
        <div className="frame spread">
          <div className="grid-12 gap-y-20 md:gap-y-28">
            {collections.map((c, i) => {
              const r = rhythm[i % rhythm.length];
              return (
                <Link key={c.slug} href={`/products/${c.slug}`} data-cursor="Explore" className={`group col-span-12 block ${r.wrap}`}>
                  <ClipImage src={c.image} alt={`${c.name} material collection`} className={r.plate} sizes="(min-width: 768px) 55vw, 100vw" from={i % 2 ? "right" : "left"} />
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div className="flex items-baseline gap-5">
                      <span className="numeral text-2xl text-bronze">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h2 className="t-h2 transition-colors duration-500 group-hover:text-bronze">{c.name}</h2>
                        <p className="t-body mt-3 max-w-md text-[0.92rem]">{c.detail}</p>
                      </div>
                    </div>
                    <span className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-charcoal/20 transition-all duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ivory">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame spread grid-12 gap-y-12">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="ii">Collection</RunHead></Reveal></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-display"><SplitText text={["One Project.", "Multiple Possibilities."]} lineClassName="[&:nth-child(2)]:italic [&:nth-child(2)]:text-sand" /></h2>
            <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <p className="t-body measure">
                  A project may require one product or a combination of categories. TerraNova evaluates requirements across products, factories and countries to determine the most appropriate sourcing solution.
                </p>
              </Reveal>
              <Magnetic>
                <Link href="/contact-us?open=1" className="btn btn--light rounded-full !px-7">
                  Tell us what the project needs <ArrowUpRight size={16} />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
