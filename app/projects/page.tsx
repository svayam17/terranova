import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Projects | Terra Nova",
  description:
    "Explore Terra Nova project references across hospitality, residential, commercial, resort, and real estate spaces."
};

export default function ProjectsPage() {
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
            <Link href="/products" className="transition-colors hover:text-charcoal">
              Products
            </Link>
            <Link href="/projects" className="text-charcoal transition-colors hover:text-charcoal">
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
          All projects
        </p>
        <h1 className="max-w-5xl font-serif text-[clamp(4rem,8vw,9rem)] font-medium leading-[0.86]">
          Spaces shaped by material restraint.
        </h1>
      </section>

      <section className="px-5 pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="columns-1 gap-7 md:columns-2 xl:columns-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group mb-10 break-inside-avoid text-left"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div
                  className={`relative overflow-hidden bg-sand ${
                    index % 4 === 0
                      ? "h-[460px] md:h-[640px]"
                      : index % 4 === 1
                        ? "h-[380px] md:h-[500px]"
                        : "h-[420px] md:h-[560px]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} project`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1800ms] ease-luxury group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 border-t border-charcoal/12 pt-5">
                  <h2 className="font-serif text-3xl font-medium md:text-4xl">
                    {project.name}
                  </h2>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
