import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const journey = [
  {
    year: "2001",
    title: "GS Stones",
    text: "Our foundation in international trade and finishing-material procurement for projects and clients."
  },
  {
    year: "Evolution",
    title: "GS Woods",
    text: "A broader sourcing model focused on international procurement, OEM manufacturing and project-specific supply."
  },
  {
    year: "Today",
    title: "TerraNova",
    text: "A dedicated project procurement platform built on years of buyer-led experience across global supply chains."
  }
];

const principles = [
  "Design intent",
  "Technical specification",
  "Quantity",
  "Timeline",
  "Quality",
  "Budget",
  "Commercial objective"
];

const capabilities = [
  "25+ years of international trade experience",
  "12+ countries of sourcing experience",
  "Multi-product procurement capabilities",
  "OEM and custom manufacturing",
  "Manufacturing partner evaluation",
  "Production and quality control",
  "International procurement and import",
  "Project delivery and execution"
];

export const metadata = {
  title: "About | Terra Nova",
  description:
    "Terra Nova is a project-led sourcing platform built on 25+ years of buyer experience, international trade, and a requirement-first approach to procurement."
};

export default function AboutPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <section className="px-5 py-6 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between gap-6">
          <Link href="/" className="font-serif text-2xl tracking-[0.08em] md:text-3xl">
            Terra Nova
          </Link>

          <div className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.22em] text-charcoal/62 md:flex">
            <Link href="/" className="transition-colors hover:text-charcoal">
              Home
            </Link>
            <Link href="/about" className="text-charcoal transition-colors hover:text-charcoal">
              About
            </Link>
            <Link href="/products" className="transition-colors hover:text-charcoal">
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

      <section className="px-5 pb-12 pt-8 md:px-12 md:pb-20 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
              About TerraNova
            </p>
            <h1 className="max-w-5xl font-serif text-[clamp(4rem,8vw,9rem)] font-medium leading-[0.86] tracking-[-0.04em] text-charcoal">
              We don&apos;t sell what we have.
              <span className="block">We source what the project needs.</span>
            </h1>
          </div>
          <div className="max-w-lg justify-self-end text-base leading-8 text-charcoal/70">
            <p>
              TerraNova Finishing Materials was created from more than 25 years of experience in international trade, project procurement and sourcing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative h-[420px] overflow-hidden bg-sand md:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=88"
              alt="Architectural sourcing and procurement planning"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-7 md:pl-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-bronze">
              Our story
            </p>
            <h2 className="max-w-xl font-serif text-[clamp(2.8rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.03em] text-charcoal">
              A new business platform built on 25+ years of buyer experience.
            </h2>
            <p className="max-w-xl text-base leading-8 text-charcoal/68">
              Our journey began in 2001 with GS Stones, sourcing and importing finishing materials for projects and clients. As project requirements evolved, our clients increasingly asked us to source products beyond our existing portfolio. This led to the creation of GS Woods, with a greater focus on international sourcing, OEM manufacturing and project-specific procurement.
            </p>
            <p className="max-w-xl text-base leading-8 text-charcoal/68">
              Today, TerraNova brings together this experience as a dedicated platform for project-led sourcing and procurement of finishing materials.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand/40 px-5 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
            Our journey
          </p>
          <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7.4rem)] font-medium leading-[0.9] tracking-[-0.03em] text-charcoal">
            From international trade to project-led sourcing.
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {journey.map((item) => (
              <article key={item.title} className="border border-charcoal/12 bg-ivory p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-charcoal/56">{item.year}</p>
                <h3 className="mt-5 font-serif text-4xl text-charcoal md:text-5xl">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-charcoal/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
              Evolution
            </p>
            <h2 className="font-serif text-[clamp(3rem,5vw,6rem)] font-medium leading-[0.9] tracking-[-0.03em] text-charcoal">
              An evolution driven by project requirements.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-charcoal/68">
            <p>
              GS Stones established our foundation in international trade and the procurement of finishing materials.
            </p>
            <p>
              As clients began approaching us with requirements outside our existing product portfolio, GS Woods evolved as a dedicated vertical for sourcing and OEM manufacturing of wood and other finishing materials.
            </p>
            <p>
              Over time, the nature of these requirements became broader. Clients were increasingly looking for a partner who could understand a project requirement, identify the appropriate manufacturing source, develop the product where necessary, manage procurement and take responsibility through to delivery.
            </p>
            <p>
              This experience led to the creation of TerraNova Finishing Materials. TerraNova is the next evolution of that journey — bringing our international sourcing experience into a dedicated project procurement platform.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 text-ivory md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-sand">
            The gap we saw
          </p>
          <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ivory">
            Three priorities. One project.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="border border-ivory/15 bg-transparent p-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-sand">Design intent</p>
              <p className="mt-6 text-base leading-8 text-ivory/75">
                The architect and designer have a defined vision for the material, finish, appearance and overall design language of the project.
              </p>
            </div>
            <div className="border border-ivory/15 bg-transparent p-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-sand">Technical requirements</p>
              <p className="mt-6 text-base leading-8 text-ivory/75">
                The technical team and PMC require the specified parameters, performance standards, quality and durability needed for the project.
              </p>
            </div>
            <div className="border border-ivory/15 bg-transparent p-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-sand">Project economics</p>
              <p className="mt-6 text-base leading-8 text-ivory/75">
                The project owner needs procurement to support the required CapEx, cost objectives and overall commercial viability of the project.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-ivory/12 bg-ivory p-8 text-charcoal md:p-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-bronze">The challenge</p>
            <h3 className="mt-5 max-w-4xl font-serif text-[clamp(2.5rem,5vw,5.6rem)] font-medium leading-[0.88] tracking-[-0.03em]">
              The challenge is not simply finding a product.
              <span className="block">The challenge is finding a solution that brings all three together.</span>
            </h3>
            <p className="mt-7 max-w-3xl text-base leading-8 text-charcoal/68">
              Our own experience as buyers made us recognise this gap and the need for a more requirement-led approach to sourcing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
            The TerraNova approach
          </p>
          <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em] text-charcoal">
            Requirement first. Sourcing second.
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="border border-charcoal/12 bg-ivory p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-bronze">We evaluate</p>
              <ul className="mt-7 space-y-4 text-base leading-7 text-charcoal/72">
                {principles.map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-charcoal/10 pb-3 last:border-0 last:pb-0">
                    <span className="h-2 w-2 rounded-full bg-bronze" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-charcoal/12 bg-sand/60 p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-charcoal/60">Then we source</p>
              <ul className="mt-7 space-y-4 text-base leading-7 text-charcoal/72">
                {[
                  "Product",
                  "Manufacturing partner",
                  "Country",
                  "Manufacturing approach",
                  "Procurement route"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-charcoal/10 pb-3 last:border-0 last:pb-0">
                    <span className="h-2 w-2 rounded-full bg-charcoal" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 max-w-4xl text-base leading-8 text-charcoal/68">
            <p>
              We evaluate the requirement across design, technical specification, quantity, timeline, quality, budget and commercial objective. We then look across our international sourcing network to identify the appropriate product, manufacturing partner, country, manufacturing approach and procurement route.
            </p>
            <p className="mt-5">
              Where required, we can develop or customise the product through OEM manufacturing and manage the process through production, quality control, international procurement, import, delivery and project execution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand/35 px-5 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="border border-charcoal/12 bg-ivory p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-bronze">Global reach</p>
            <p className="mt-6 font-serif text-[clamp(3rem,5vw,6rem)] leading-none text-charcoal">25+</p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-charcoal/56">Years of international trade</p>
          </div>

          <div className="space-y-6 text-base leading-8 text-charcoal/68">
            <p>
              Our 25+ years of international trade experience has developed into sourcing capabilities across 12+ countries and multiple finishing-material categories.
            </p>
            <p>
              We are not restricted to a single product range or manufacturing source. Our approach allows us to evaluate different manufacturing capabilities and sourcing markets based on what is appropriate for the individual project.
            </p>
            <p>
              This may mean selecting an existing product, developing a customised solution, identifying a different manufacturing partner or evaluating an alternate country of origin. The project requirement determines the sourcing strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
            What we bring to a project
          </p>
          <h2 className="max-w-5xl font-serif text-[clamp(3rem,5vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.03em] text-charcoal">
            International sourcing experience. Manufacturing access. Project understanding.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <div key={item} className="border border-charcoal/12 bg-ivory p-6">
                <p className="text-base leading-7 text-charcoal/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 text-ivory md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-sand">
            Our group legacy
          </p>
          <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ivory">
            TerraNova is new. The experience behind it is not.
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6 text-base leading-8 text-ivory/72">
              <p>
                TerraNova Finishing Materials is part of the group that includes GS Stones Pvt. Ltd. and GS Woods Pvt. Ltd.
              </p>
              <p>
                The project experience, international relationships and procurement expertise developed through these businesses form the foundation on which TerraNova has been built.
              </p>
            </div>

            <div className="border border-ivory/12 bg-ivory p-8 text-charcoal md:p-9">
              <p className="text-[11px] uppercase tracking-[0.24em] text-bronze">The principle</p>
              <p className="mt-6 font-serif text-[clamp(2.2rem,4vw,5rem)] leading-[0.9] text-charcoal">
                We bring 25 years of being the buyer to every project we source for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
                Our philosophy
              </p>
              <h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em] text-charcoal">
                We don&apos;t sell what we have. We source what the project needs.
              </h2>
            </div>

            <div className="border-t border-charcoal/12 pt-6">
              <p className="text-base leading-8 text-charcoal/68">
                We believe sourcing should begin with the requirement, not the available inventory. Our role is to understand what the project needs, look across global manufacturing possibilities and build a procurement solution that aligns design intent, technical requirements and project economics.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-6 border-t border-charcoal/12 pt-8 md:pt-10">
            <p className="font-serif text-[clamp(2.2rem,4vw,4.2rem)] leading-[0.9] tracking-[-0.04em] text-charcoal">
              Architecting project profits through strategic sourcing.
            </p>
            <Link
              href="/products"
              className="group hidden items-center gap-3 border border-charcoal px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-charcoal transition-all duration-500 hover:bg-charcoal hover:text-ivory md:inline-flex"
            >
              Explore sourcing
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-4 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-charcoal/12 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-bronze">Next step</p>
            <h2 className="mt-4 font-serif text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-charcoal">
              Talk to TerraNova about your project.
            </h2>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-3 border border-charcoal bg-charcoal px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-ivory transition-all duration-500 hover:-translate-y-0.5 hover:bg-ivory hover:text-charcoal"
          >
            Explore sourcing
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
