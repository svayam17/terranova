import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { projects } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import { RunHead } from "@/components/Editorial";
import { Magnetic, Reveal, ScrollWords, Stagger } from "@/components/motion";

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
    ["Product Used", project.productUsed],
    ["Category", project.category]
  ].filter(([, value]) => value);

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="dark" />

      <ProjectHero
        name={project.name}
        image={project.image}
        kicker={`Featured project${project.year ? ` / ${project.year}` : ""}`}
        location={project.location}
        product={project.productUsed}
      />

      <section className="frame spread">
        <div className="grid-12 gap-y-14">
          <div className="col-span-12 md:col-span-7">
            <Reveal><RunHead n="i">Project information</RunHead></Reveal>
            <ScrollWords text="A resolved material palette for a specific atmosphere." className="t-h1 mt-8" />
            <Reveal delay={0.1}>
              <p className="t-lead dropcap mt-12 max-w-xl text-charcoal/80">{project.description}</p>
            </Reveal>
          </div>
          <Stagger className="col-span-12 self-end border-t border-charcoal/16 md:col-span-4 md:col-start-9" gap={0.08} y={16}>
            {facts.map(([label, value]) => (
              <div key={label} className="border-b border-charcoal/12 py-5">
                <p className="t-small text-charcoal/55">{label}</p>
                <p className="t-h3 mt-2">{value}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-sand/50">
        <div className="frame flex flex-col justify-between gap-10 py-20 md:flex-row md:items-end md:py-28">
          <div>
            <RunHead>Project sourcing</RunHead>
            <h2 className="t-display mt-6">Plan a similar surface story.</h2>
          </div>
          <Magnetic>
            <Link href="/contact-us" className="btn rounded-full !px-7">
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </Magnetic>
        </div>
      </section>

      <Link href={`/projects/${next.slug}`} data-cursor="Next" className="group relative block overflow-hidden bg-charcoal text-ivory">
        <Image
          src={next.image}
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover opacity-30 transition-all duration-[1.4s] ease-luxury group-hover:scale-100 group-hover:opacity-55"
        />
        <div className="frame relative flex items-end justify-between gap-6 py-24 md:py-36">
          <div>
            <p className="t-small text-sand">Next project</p>
            <p className="t-display mt-6">{next.name}</p>
            <p className="t-small mt-4 text-ivory/60">{next.location}</p>
          </div>
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-ivory/40 transition-all duration-500 group-hover:bg-ivory group-hover:text-charcoal md:h-20 md:w-20">
            <ArrowUpRight size={22} />
          </span>
        </div>
      </Link>

      <Footer />
    </main>
  );
}
