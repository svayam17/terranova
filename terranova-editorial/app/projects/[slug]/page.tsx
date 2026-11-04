import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { projects } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";

const legacyProjectSlugs: Record<string, string> = {
  "the-house-of-grain": "paradise-developers"
};

export function generateStaticParams() {
  return [
    ...projects.map((project) => ({ slug: project.slug })),
    ...Object.keys(legacyProjectSlugs).map((slug) => ({ slug }))
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | Terra Nova`,
    description: project.description
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const legacySlug = legacyProjectSlugs[params.slug];
  if (legacySlug) redirect(`/projects/${legacySlug}`);

  const index = projects.findIndex((item) => item.slug === params.slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];

  // Empty fields (e.g. year) are omitted rather than shown blank.
  const facts = [
    ["Name", project.name],
    ["Location", project.location],
    ["Year of Project", project.year],
    ["Product Used", project.productUsed]
  ].filter(([, value]) => value);

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <section className="frame pb-14 pt-10 md:pb-20 md:pt-16">
        <RunHead n={String(index + 1).padStart(2, "0")}>
          Featured project{project.year ? ` / ${project.year}` : ""}
        </RunHead>
        <h1 className="t-display mt-10">
          <span className="reveal-line"><span>{project.name}</span></span>
        </h1>
      </section>

      <div className="reveal-plate plate aspect-[4/3] w-full md:aspect-[21/9]">
        <Image src={project.image} alt={`${project.name} project`} fill priority sizes="100vw" className="object-cover" />
      </div>

      <section className="frame spread">
        <div className="grid-12 gap-y-14">
          <div className="col-span-12 md:col-span-6">
            <RunHead n="i">Project information</RunHead>
            <h2 className="t-h1 mt-8">A resolved material palette for a specific atmosphere.</h2>
            <p className="t-lead dropcap mt-10 text-charcoal/80">{project.description}</p>
          </div>
          <dl className="col-span-12 self-end border-t border-charcoal/16 md:col-span-4 md:col-start-9">
            {facts.map(([label, value]) => (
              <div key={label} className="border-b border-charcoal/12 py-5">
                <dt className="t-small text-charcoal/55">{label}</dt>
                <dd className="t-h3 mt-2">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame flex flex-col justify-between gap-10 py-20 md:flex-row md:items-end md:py-28">
          <div>
            <RunHead>Project sourcing</RunHead>
            <h2 className="t-h1 mt-6">Plan a similar surface story.</h2>
          </div>
          <Link href="/contact-us" className="btn btn--light w-fit shrink-0">
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="frame py-16 md:py-20">
        <Link href={`/projects/${next.slug}`} className="group flex items-baseline justify-between gap-6">
          <span className="t-h1 transition-colors duration-500 group-hover:text-bronze">{next.name}</span>
          <ArrowUpRight size={28} className="shrink-0 text-bronze transition-transform duration-500 ease-luxury group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
