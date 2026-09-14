import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const RevealOnScroll = dynamic(() => import("@/components/RevealOnScroll"), { ssr: false });

export const metadata = {
  title: "Projects | Terra Nova",
  description:
    "Explore Terra Nova project references across hospitality, residential, commercial, resort, and real estate spaces."
};

export default function ProjectsPage() {
  const categoryMap: Record<string, string[]> = {
    HOSPITALITY: [
      "Cheval Blanc Randheli",
      "Taj Convention Goa",
      "Cidade de Goa",
      "The Hablis",
      "The Chalet Hotel",
      "Lemon Tree Dwarka",
      "Piramal Revanta",
      "Jaagir Manor Dudhwa",
      "Hyatt Regency Dehradun",
      "Taj Cidade de Goa",
      "Glamping Resort",
      "The Hablis",
    ],
    "REAL ESTATE & DEVELOPMENT": ["Piramal Revanta", "Paradise Developers"],
    "COMMERCIAL & WORKSPACE": ["Praj Industries"],
    "PRIVATE & BESPOKE PROJECTS": ["Jaagir Manor Dudhwa"]
  };

  // Map category lists to actual available projects (do not invent missing data)
  const categorized = Object.entries(categoryMap).map(([title, names]) => ({
    title,
    items: projects.filter((p) => names.includes(p.name))
  }));

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <section className="px-5 pb-6 pt-10 md:px-12 md:pb-10 md:pt-16 lg:px-16">
        <RevealOnScroll>
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">PROJECT EXPERIENCE</p>
          <h1 className="max-w-5xl font-serif text-[clamp(2.4rem,5vw,3.6rem)] font-medium leading-[0.92]">TerraNova Is New. Our Project Experience Isn't.</h1>
          <p className="mt-6 max-w-3xl text-sm text-charcoal/70">TerraNova is built on 25+ years of international trade, sourcing and project procurement experience through GS Stones and GS Woods, with experience across China, Indonesia, Vietnam, Malaysia, Thailand and selected European markets.</p>
        </RevealOnScroll>
      </section>

      <section className="px-5 pb-10 md:px-12 lg:px-16">
        <RevealOnScroll>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-bronze">SOME OF THE PROJECTS WE HAVE PROCURED FOR</p>
          <p className="max-w-4xl text-sm text-charcoal/70">These are selected projects from GS Stones and GS Woods, with involvement ranging from specific product sourcing to OEM/custom manufacturing, international procurement, import, supply and execution.</p>
        </RevealOnScroll>

        <div className="mt-8 space-y-12">
          {categorized.map((cat) => (
            <section key={cat.title}>
              <RevealOnScroll>
                <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-bronze">{cat.title}</p>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {cat.items.map((project, index) => (
                    <article key={project.slug} className="group">
                      <Link href={`/projects/${project.slug}`} className="block">
                        <div className={`relative overflow-hidden bg-sand h-[320px] md:h-[420px]`}>
                          <Image src={project.image} alt={`${project.name} project`} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-[1000ms] group-hover:scale-105" />
                        </div>
                        <div className="mt-4 border-t border-charcoal/12 pt-4">
                          <h3 className="font-serif text-2xl font-medium">{project.name}</h3>
                          {project.location ? <p className="mt-2 text-sm text-charcoal/70">{project.location}</p> : null}
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </RevealOnScroll>
            </section>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12 md:px-12 lg:px-16">
        <RevealOnScroll>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-bronze">PRODUCT EXPERIENCE</p>
          <h2 className="font-serif text-3xl font-medium">Materials sourced across projects.</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Wood Flooring",
              "Laminate Flooring",
              "SPC / LVT / Vinyl Flooring",
              "Carpet & Area Rugs",
              "Deck Flooring",
              "Gym Flooring",
              "Cladding & Wall Finishes",
              "Clay Roof Tiles",
              "Thatch",
              "Swimming Pool Finishes",
              "Blinds",
              "Basins & Bathtubs",
              "Architectural & Decorative Finishes",
            ].map((item) => (
              <div key={item} className="text-sm text-charcoal/80">{item}</div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-5 pb-12 md:px-12 lg:px-16">
        <RevealOnScroll>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-bronze">ONE REQUIREMENT CAN BE THE BEGINNING</p>
          <h2 className="font-serif text-3xl font-medium">Start with one requirement. Grow with the project.</h2>
          <p className="mt-4 max-w-3xl text-sm text-charcoal/70">TerraNova can begin with one specified product, one requirement or one project challenge and expand into broader procurement based on performance, consistency and trust.</p>

          <div className="mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="text-sm uppercase text-charcoal/60">One Product</div>
              <div className="text-sm text-charcoal/40">→</div>
              <div className="text-sm uppercase text-charcoal/60">One Project Requirement</div>
              <div className="text-sm text-charcoal/40">→</div>
              <div className="text-sm uppercase text-charcoal/60">Multiple Product Requirements</div>
              <div className="text-sm text-charcoal/40">→</div>
              <div className="text-sm uppercase text-charcoal/60">Broader Project Procurement</div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-5 pb-12 md:px-12 lg:px-16">
        <RevealOnScroll>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-bronze">FROM SOURCE TO PROJECT</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {["Project Requirement","Global Sourcing","Product Development / OEM","Factory & Production","Quality Control","International Procurement","Import & Logistics","Project Supply & Installation"].map((step) => (
              <div key={step} className="text-sm text-charcoal/80">{step}</div>
            ))}
          </div>
          <p className="mt-6 text-sm text-charcoal/70">The scope depends on the requirement. TerraNova can be engaged for one product, one stage of the procurement cycle or the complete sourcing-to-execution process.</p>
        </RevealOnScroll>
      </section>

      <section className="px-5 pb-20 md:px-12 lg:px-16">
        <RevealOnScroll>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-bronze">25+ YEARS. 12+ COUNTRIES. MULTIPLE PROJECTS.</p>
          <p className="max-w-4xl text-sm text-charcoal/70">The showcased projects are only a selection of TerraNova's experience and this experience comes from real project requirements, international manufacturing relationships and practical sourcing, procurement and delivery.</p>

          <div className="mt-6 space-y-3">
            <p className="text-sm">“Start with the requirement. Let us earn the next one.”</p>
            <p className="text-sm">“We don't sell what we have. We source what the project needs.”</p>
            <p className="text-sm">“Architecting Project Profits through Strategic Sourcing.”</p>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </main>
  );
}
