"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { collections, heroImage, projects } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";

const lineage = [
  ["01", "GS Stones", "Bringing international products to Indian projects."],
  ["02", "GS Woods", "Sourcing and developing products around specific project requirements."],
  ["03", "TerraNova", "Making project procurement our business."]
];

const network = [
  ["Multiple Products", "Flooring, carpets, decking and selected architectural and finishing materials."],
  ["Multiple Factories", "Specialised manufacturing partners selected according to product, specification, quantity and quality requirements."],
  ["Multiple Countries", "Sourcing experience across 12+ countries, including China, Indonesia, Vietnam, Malaysia, Thailand and selected European markets."]
];

const priorities = [
  ["Design Intent", "Understanding and preserving the design vision of the architect and designer."],
  ["Technical Requirements", "Meeting specified technical parameters, quality standards and performance requirements of the project team and PMC."],
  ["Project Economics", "Working towards the commercial objectives of the project, including CapEx optimisation and overall project viability."]
];

const scope = [
  "Sourcing",
  "OEM & Custom Manufacturing",
  "Production",
  "Quality Control",
  "International Procurement",
  "Import & Logistics",
  "Project Supply",
  "Installation & Execution"
];

/* Collection plates: an asymmetric magazine layout rather than five equal tiles. */
const collectionLayout = [
  "col-span-12 md:col-span-7 aspect-[4/5] md:aspect-[5/6]",
  "col-span-12 md:col-span-5 md:mt-40 aspect-[4/5]",
  "col-span-12 sm:col-span-6 md:col-span-4 aspect-[3/4]",
  "col-span-12 sm:col-span-6 md:col-span-4 md:mt-24 aspect-[3/4]",
  "col-span-12 md:col-span-4 aspect-[3/4]"
];

/* Project plates: staggered columns, alternating heights. */
const projectLayout = [
  "md:col-span-7 aspect-[4/3]",
  "md:col-span-4 md:col-start-9 md:mt-32 aspect-[3/4]",
  "md:col-span-5 md:col-start-2 aspect-[3/4]",
  "md:col-span-5 md:col-start-8 md:mt-20 aspect-[4/5]",
  "md:col-span-4 aspect-[3/4]",
  "md:col-span-7 md:col-start-6 md:mt-28 aspect-[4/3]"
];

export default function Home() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 90]);

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      {/* ═══ Cover ═══════════════════════════════════════════ */}
      <section className="frame pb-20 pt-10 md:pb-28 md:pt-16">
        <p className="reveal-fade t-small mb-8 text-charcoal/60 md:mb-12">
          Global luxury sourcing and materials studio
        </p>

        <h1 className="t-display">
          <span className="reveal-line"><span>25+ Years of Global Sourcing.</span></span>
          <span className="reveal-line md:pl-[16.66%]"><span>Now, Built Around Your Project.</span></span>
        </h1>

        <div className="grid-12 mt-12 gap-y-10 md:mt-16">
          <div className="reveal-plate plate col-span-12 aspect-[4/3] md:col-span-8 md:aspect-[16/10]">
            <motion.div className="absolute inset-[-8%_0]" style={{ y: heroY }}>
              <Image
                src={heroImage}
                alt="Refined architectural interior with stone and warm light"
                fill
                priority
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="reveal-fade col-span-12 flex flex-col justify-end md:col-span-4">
            <p className="t-lead dropcap text-charcoal/80">
              For more than 25 years, we have been buying, sourcing and importing finishing materials for projects across India and overseas.
            </p>
            <div className="mt-10 flex flex-col gap-3">
              <Link href="/contact-us" className="btn">
                Discuss Your Project <ArrowUpRight size={16} />
              </Link>
              <Link href="/projects" className="btn btn--ghost">
                View Projects <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Statement ═══════════════════════════════════════ */}
      <section className="border-t border-charcoal/12">
        <div className="frame grid-12 spread gap-y-8">
          <div className="col-span-12 md:col-span-3">
            <RunHead n="i">Material intelligence</RunHead>
          </div>
          <h2 className="t-h1 col-span-12 md:col-span-9">
            Materials shape atmosphere, emotion, and identity.
          </h2>
        </div>
      </section>

      {/* ═══ About ═══════════════════════════════════════════ */}
      <section id="studio" className="frame grid-12 gap-y-14 pb-24 md:pb-36">
        <figure className="col-span-12 self-start md:sticky md:top-10 md:col-span-5">
          <div className="plate aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=88"
              alt="Luxury interior architectural detail"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>

        <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-6">
          <RunHead n="ii">About Terra Nova</RunHead>
          <h2 className="t-h2 mt-8">
            We don&apos;t sell what we have. We source what the project needs.
          </h2>
          <p className="t-body measure mt-8">
            TerraNova Finishing Materials is a dedicated platform for strategic project sourcing and procurement. We begin with the project requirement and work backwards to identify the appropriate product, manufacturing partner, country of origin and procurement route.
          </p>

          <ol className="mt-12 border-t border-charcoal/12">
            {lineage.map(([n, name, copy]) => (
              <li key={name} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-charcoal/12 py-6 sm:grid-cols-[3rem_10rem_1fr]">
                <span className="numeral text-2xl text-bronze">{n}</span>
                <span className="t-h4">{name}</span>
                <span className="t-body col-start-2 mt-1 sm:col-start-3 sm:mt-0">{copy}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <p className="font-serif text-[1.35rem] italic leading-snug text-charcoal/80">
              Start with one requirement. Grow with the project.
            </p>
            <Link href="/about-us" className="link-u">
              Explore About Us <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Sourcing network + collections ══════════════════ */}
      <section id="collections" className="bg-paper">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3">
              <RunHead n="iii">Our sourcing network</RunHead>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="t-h1">Multi-Product. Multi-Factory. Multi-Country.</h2>
              <p className="t-body measure-wide mt-8">
                Our sourcing network enables us to evaluate manufacturing partners and sourcing markets based on the requirements of each project. The objective is not simply to find a supplier. It is to build the right procurement solution for the project.
              </p>
            </div>
          </div>

          <div className="grid-12 mt-16 gap-y-10 border-t border-charcoal/14 pt-10 md:mt-20">
            {network.map(([name, copy], i) => (
              <div key={name} className={`col-span-12 md:col-span-3 ${i === 0 ? "md:col-start-4" : ""}`}>
                <h3 className="t-h4">{name}</h3>
                <p className="t-body mt-3">{copy}</p>
              </div>
            ))}
          </div>

          <div className="grid-12 mt-24 gap-y-14 md:mt-32">
            {collections.slice(0, 5).map((collection, i) => (
              <Link
                key={collection.slug}
                href={`/products/${collection.slug}`}
                className={`group block ${collectionLayout[i].split(" ").filter((c) => !c.startsWith("aspect")).join(" ")}`}
              >
                <div className={`plate ${collectionLayout[i].split(" ").filter((c) => c.startsWith("aspect")).join(" ")}`}>
                  <Image
                    src={collection.image}
                    alt={`${collection.name} material atmosphere`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="t-small text-charcoal/50">Collection</span>
                    <h3 className="t-h3">{collection.name}</h3>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-bronze transition-transform duration-500 ease-luxury group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link href="/products" className="btn btn--ghost">
              View All Collections <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Projects ════════════════════════════════════════ */}
      <section id="projects" className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3">
            <RunHead n="iv">Featured projects</RunHead>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-display">Some of Our Projects</h2>
            <p className="t-body measure-wide mt-8">
              Featured work across Grand Hyatt Goa, Taj Convention Goa, Cheval Blanc Maldives, Piramal Realty Mumbai, Hiranandani, Kalpataru, Awfis (Multiple Locations), and many more projects over 25+ years.
            </p>
          </div>
        </div>

        <div className="grid-12 mt-20 gap-y-16 md:mt-28 md:gap-y-24">
          {projects.slice(0, 6).map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group col-span-12 block ${projectLayout[i].split(" ").filter((c) => !c.startsWith("aspect")).join(" ")}`}
            >
              <div className={`plate ${projectLayout[i].split(" ").filter((c) => c.startsWith("aspect")).join(" ")}`}>
                <Image
                  src={project.image}
                  alt={`${project.name} architectural project`}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="caption">
                <span>{project.location}</span>
                <span>{project.productUsed}</span>
              </div>
              <h3 className="t-h3 mt-3 transition-colors duration-500 group-hover:text-bronze">
                {project.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <Link href="/projects" className="btn btn--ghost">
            View All Projects <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══ Priorities ══════════════════════════════════════ */}
      <section className="on-dark relative overflow-hidden bg-charcoal text-ivory">
        <div className="frame spread">
          <div className="grid-12 gap-y-10">
            <div className="col-span-12 md:col-span-3">
              <RunHead n="v">Global Sourcing</RunHead>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="t-h1 max-w-4xl">Built Around Three Project Priorities</h2>
              <p className="t-body measure mt-8">
                Every project has different stakeholders and different objectives. Our role is to bring these priorities together through strategic sourcing.
              </p>
            </div>
          </div>

          <div className="my-12 md:my-16" aria-hidden="true">
            <svg viewBox="0 0 900 400" className="h-auto w-full">
              <path d="M92 195C151 134 205 110 282 126C350 140 364 77 437 87C514 98 554 157 641 122C720 90 769 126 817 181" fill="none" stroke="rgba(245,241,235,0.14)" strokeWidth="1" />
              <path d="M152 280C241 231 318 272 400 241C474 213 505 259 584 243C662 228 702 276 790 257" fill="none" stroke="rgba(245,241,235,0.12)" strokeWidth="1" />
              <path className="map-line" d="M166 214C312 103 469 113 725 202" fill="none" stroke="#A67C52" strokeWidth="1.4" />
              <path className="map-line" d="M228 280C384 181 523 196 760 135" fill="none" stroke="#D9CFC2" strokeWidth="1.1" />
              <path className="map-line" d="M126 160C279 255 487 307 814 247" fill="none" stroke="#8B8B8B" strokeWidth="1" />
              {[[166, 214], [312, 103], [469, 113], [725, 202], [228, 280], [760, 135], [814, 247]].map(([cx, cy]) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="3.5" fill="#F5F1EB" />
                  <circle cx={cx} cy={cy} r="15" fill="none" stroke="rgba(166,124,82,0.38)" />
                </g>
              ))}
            </svg>
          </div>

          <div className="grid-12 gap-y-10 border-t border-ivory/15 pt-10">
            {priorities.map(([name, copy]) => (
              <div key={name} className="col-span-12 md:col-span-4">
                <h3 className="t-h3 text-sand">{name}</h3>
                <p className="t-body mt-4 max-w-sm">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Procurement scope ═══════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3">
            <RunHead n="vi">Procurement Scope</RunHead>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1">From Source to Project</h2>
            <p className="t-body measure mt-8">
              Our involvement can extend across the complete procurement journey. The scope depends on the requirement. You may need us for one stage or the complete journey.
            </p>
          </div>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 border-t border-charcoal/14 sm:grid-cols-2 lg:grid-cols-8 md:mt-24">
          {scope.map((step, i) => (
            <li
              key={step}
              className="relative border-b border-charcoal/12 py-6 pr-4 sm:odd:border-r sm:even:pl-5 lg:border-b-0 lg:border-r lg:py-0 lg:pl-5 lg:pt-8 lg:last:border-r-0"
            >
              <span className="absolute -top-[5px] left-5 hidden h-[9px] w-[9px] rounded-full bg-bronze lg:block" />
              <span className="numeral block text-[2.6rem] leading-none text-bronze">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-4 block text-sm leading-snug text-charcoal/80 lg:min-h-[3.2em]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══ Contact ═════════════════════════════════════════ */}
      <section id="contact" className="bg-sand/45">
        <div className="frame grid-12 spread gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <RunHead n="vii">Contact</RunHead>
            <h2 className="t-h1 mt-8">Let&apos;s Start With Your Requirement</h2>
            <p className="t-body measure mt-8">
              Start with a product requirement, specification, BOQ, drawing, reference or simply a project need.
            </p>
          </div>
          <form className="col-span-12 grid gap-8 md:col-span-6 md:col-start-7 md:pt-4">
            {["Name", "Email", "Project Location"].map((label) => (
              <label key={label} className="block">
                <span className="field-label">{label}</span>
                <input className="field" type={label === "Email" ? "email" : "text"} name={label.toLowerCase().replace(/\s/g, "-")} />
              </label>
            ))}
            <label className="block">
              <span className="field-label">Material Intent</span>
              <textarea rows={3} className="field" name="material-intent" />
            </label>
            <button type="submit" className="btn mt-2 w-full sm:w-fit">
              Send Inquiry <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
