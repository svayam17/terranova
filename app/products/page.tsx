import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { collections } from "@/lib/content";

export const metadata = {
  title: "Collections | Terra Nova",
  description:
    "Explore Terra Nova material collections across flooring, cladding, mosaics, roofing, marbles, and window systems."
};

export default function ProductsPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <section className="px-5 py-8 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-[0.08em] md:text-3xl">
            Terra Nova
          </Link>
          <div className="hidden items-center gap-6 text-[10px] uppercase tracking-[0.22em] text-charcoal/62 md:flex">
            <Link href="/" className="transition-colors hover:text-charcoal">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-charcoal">
              About
            </Link>
            <Link href="/products" className="text-charcoal transition-colors hover:text-charcoal">
              Products
            </Link>
            <Link href="/projects" className="transition-colors hover:text-charcoal">
              Projects
            </Link>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-charcoal/62 transition-colors hover:text-charcoal md:hidden"
          >
            <ArrowLeft size={15} />
            Home
          </Link>
        </nav>
      </section>

      <section className="px-5 pb-14 pt-10 md:px-12 md:pb-20 md:pt-16 lg:px-16">
        <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
          All collections
        </p>
        <h1 className="max-w-5xl font-serif text-[clamp(4rem,8vw,9rem)] font-medium leading-[0.86]">
          Material collections for resolved spaces.
        </h1>
      </section>

      <section className="px-5 pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {collections.map((collection) => (
            <article
              key={collection.slug}
              className="group relative min-h-[390px] overflow-hidden bg-charcoal text-left sm:min-h-[430px] xl:min-h-[520px]"
            >
              <Link href={`/products/${collection.slug}`} className="absolute inset-0">
                <Image
                  src={collection.image}
                  alt={`${collection.name} material collection`}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-[0.88] transition-transform duration-[1800ms] ease-luxury group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/76 via-charcoal/14 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 md:p-8">
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.26em] text-sand">
                      Collection
                    </p>
                    <h2 className="font-serif text-4xl font-medium text-ivory">
                      {collection.name}
                    </h2>
                  </div>
                  <ArrowUpRight className="text-ivory/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
