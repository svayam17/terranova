import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/content";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import dynamic from "next/dynamic";

const RevealOnScroll = dynamic(
  () => import("@/components/RevealOnScroll"),
  { ssr: false }
);

export const metadata = {
  title: "Projects | Terra Nova",
  description:
    "Explore Terra Nova project references across hospitality, residential, commercial, resort, and real estate spaces.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <section className="px-5 pb-20 pt-10 md:px-12 md:pt-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="group"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block"
                  >
                    <div className="relative h-[320px] overflow-hidden bg-sand md:h-[420px]">
                      <Image
                        src={project.image}
                        alt={`${project.name} project`}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 border-t border-charcoal/12 pt-4">
                      <h3 className="font-serif text-2xl font-medium">
                        {project.name}
                      </h3>

                      {project.location ? (
                        <p className="mt-2 text-sm text-charcoal/70">
                          {project.location}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}

