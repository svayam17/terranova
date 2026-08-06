import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { collections } from "@/lib/content";

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const collection = collections.find((item) => item.slug === params.slug);

  if (!collection) {
    return {};
  }

  return {
    title: `${collection.name} | Terra Nova`,
    description: collection.detail
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((item) => item.slug === params.slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="bg-ivory text-charcoal">
      <section className="relative min-h-[82vh] overflow-hidden bg-charcoal text-ivory">
        <Image
          src={collection.image}
          alt={`${collection.name} architectural material`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.78),rgba(17,17,17,0.18)_58%,rgba(17,17,17,0.48)),linear-gradient(180deg,rgba(17,17,17,0.1),rgba(17,17,17,0.78))]" />
        <nav className="relative z-10 flex items-center justify-between px-5 py-6 md:px-12 lg:px-16">
          <Link href="/" className="font-serif text-2xl tracking-[0.08em] md:text-3xl">
            Terra Nova
          </Link>
          <Link
            href="/#collections"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-ivory/76 transition-colors hover:text-ivory"
          >
            <ArrowLeft size={15} />
            Products
          </Link>
        </nav>
        <div className="relative z-10 flex min-h-[calc(82vh-88px)] items-end px-5 pb-10 md:px-12 md:pb-16 lg:px-16">
          <div className="max-w-5xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-sand">
              Product collection
            </p>
            <h1 className="font-serif text-[clamp(4rem,9vw,10rem)] font-medium leading-[0.86]">
              {collection.name}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-ivory/74 md:text-lg">
              {collection.detail}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
              Sub collections
            </p>
            <h2 className="font-serif text-[clamp(3rem,5.8vw,6.8rem)] font-medium leading-[0.9]">
              Material systems with a quieter architectural language.
            </h2>
          </div>
          <div className="grid gap-px bg-charcoal/12 sm:grid-cols-2">
            {collection.subCollections.map((item) => (
              <article key={item} className="bg-ivory p-6 md:p-8">
                <p className="font-serif text-3xl leading-tight">{item}</p>
                <p className="mt-5 text-sm leading-7 text-charcoal/58">
                  Selected for project-grade performance, calm detailing, and
                  compatibility with luxury residential and hospitality spaces.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-14 text-ivory md:px-12 md:py-18 lg:px-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-sand">
              Next step
            </p>
            <h2 className="font-serif text-5xl font-medium md:text-7xl">
              Discuss a material intent.
            </h2>
          </div>
          <Link
            href="/#contact"
            className="inline-flex w-fit items-center gap-3 border border-ivory/70 px-6 py-4 text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-ivory hover:text-charcoal"
          >
            Contact Studio
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
