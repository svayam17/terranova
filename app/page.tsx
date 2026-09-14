"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2, Send } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { collections, heroImage, projects } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, shouldReduceMotion ? 0 : 72]);
  const heroScale = useTransform(scrollY, [0, 900], [1.04, shouldReduceMotion ? 1.04 : 1.09]);

  return (
    <main className="overflow-hidden bg-ivory text-charcoal">
      <section className="relative min-h-screen overflow-hidden bg-charcoal text-ivory">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <Image
            src={heroImage}
            alt="Refined architectural interior with stone and warm light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.76),rgba(17,17,17,0.22)_48%,rgba(17,17,17,0.52)),linear-gradient(180deg,rgba(17,17,17,0.15),rgba(17,17,17,0.76))]" />

        <Header variant="dark" />

        <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-end px-5 pb-10 md:px-12 md:pb-16 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 52 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <p className="mb-5 max-w-xs text-[10px] uppercase leading-5 tracking-[0.26em] text-sand md:mb-7 md:max-w-none md:text-[11px]">
              Global luxury sourcing and materials studio
            </p>
            <h1 className="max-w-5xl font-serif text-[clamp(3.15rem,8.4vw,9.6rem)] font-medium leading-[0.86] tracking-normal">
              25+ Years of Global Sourcing.
              <span className="block">Now, Built Around Your Project.</span>
            </h1>
            <div className="mt-9 flex max-w-3xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-base leading-8 text-ivory/78 md:text-lg">
                For more than 25 years, we have been buying, sourcing and importing finishing materials for projects across India and overseas.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link className="group inline-flex items-center justify-between gap-3 border border-ivory/80 px-5 py-4 text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ease-luxury hover:bg-ivory hover:text-charcoal md:px-6" href="/contact-us">
                  Discuss Your Project
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link className="group inline-flex items-center justify-between gap-3 border border-ivory/25 px-5 py-4 text-[11px] uppercase tracking-[0.2em] text-ivory/82 transition-all duration-500 ease-luxury hover:border-ivory hover:text-ivory md:px-6" href="/projects">
                  View Projects
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-24 lg:px-16">
        <motion.div {...fadeUp} className="mx-auto max-w-5xl text-center">
          <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-bronze">
            Material intelligence
          </p>
          <h2 className="font-serif text-[clamp(3.2rem,7vw,8.4rem)] font-medium leading-[0.9] tracking-normal">
            Materials shape atmosphere, emotion, and identity.
          </h2>
        </motion.div>
      </section>

      <section id="studio" className="px-5 pb-16 md:px-12 md:pb-24 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <motion.div {...fadeUp} className="relative min-h-[360px] overflow-hidden md:min-h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=88"
              alt="Luxury interior architectural detail"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover transition-transform duration-[1800ms] ease-luxury hover:scale-105"
            />
          </motion.div>
          <motion.div {...fadeUp} className="lg:pl-10">
            <p className="mb-7 text-[11px] uppercase tracking-[0.28em] text-bronze">
              About Terra Nova
            </p>
            <h2 className="max-w-3xl font-serif text-[clamp(3rem,5vw,6.8rem)] font-medium leading-[0.92] tracking-normal">
              We don&apos;t sell what we have. We source what the project needs.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-charcoal/64">
              TerraNova Finishing Materials is a dedicated platform for strategic project sourcing and procurement. We begin with the project requirement and work backwards to identify the appropriate product, manufacturing partner, country of origin and procurement route.
            </p>

            <div className="tn-timeline mt-9 grid border-y border-charcoal/12 py-6 sm:grid-cols-3 sm:gap-0">
              {[
                ["01", "GS Stones", "Bringing international products to Indian projects."],
                ["02", "GS Woods", "Sourcing and developing products around specific project requirements."],
                ["03", "TerraNova", "Making project procurement our business."]
              ].map(([number, title, copy], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="tn-timeline-item relative py-4 sm:px-5 sm:py-0 first:sm:pl-0 last:sm:pr-0"
                >
                  <span className="mb-5 block text-[10px] tracking-[0.2em] text-stone">{number}</span>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">{title}</h4>
                  <p className="mt-2 max-w-[15rem] text-sm leading-6 text-charcoal/68">{copy}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">Start with one requirement. Grow with the project.</p>
              <Link href="/about-us" className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-bronze">Explore About Us <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="collections" className="bg-sand/38 px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <motion.div {...fadeUp} className="mb-10">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
            Our sourcing network
          </p>
          <h2 className="max-w-4xl font-serif text-[clamp(3.4rem,6vw,7.4rem)] font-medium leading-[0.9] tracking-normal">
            Multi-Product. Multi-Factory. Multi-Country.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal/60">
            Our sourcing network enables us to evaluate manufacturing partners and sourcing markets based on the requirements of each project. The objective is not simply to find a supplier. It is to build the right procurement solution for the project.
          </p>
          <div className="mt-10 grid gap-8 border-t border-charcoal/12 pt-8 sm:grid-cols-3">
            <div className="tn-network-item group">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-bronze font-semibold">Multiple Products</h4>
              <p className="mt-3 text-sm leading-6 text-charcoal/64">Flooring, carpets, decking and selected architectural and finishing materials.</p>
            </div>
            <div className="tn-network-item group">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-bronze font-semibold">Multiple Factories</h4>
              <p className="mt-3 text-sm leading-6 text-charcoal/64">Specialised manufacturing partners selected according to product, specification, quantity and quality requirements.</p>
            </div>
            <div className="tn-network-item group">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-bronze font-semibold">Multiple Countries</h4>
              <p className="mt-3 text-sm leading-6 text-charcoal/64">Sourcing experience across 12+ countries, including China, Indonesia, Vietnam, Malaysia, Thailand and selected European markets.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {collections.slice(0, 5).map((collection) => (
            <motion.div
              key={collection.name}
              {...fadeUp}
              className="group relative min-h-[390px] overflow-hidden bg-charcoal text-left sm:min-h-[430px] xl:min-h-[520px]"
            >
              <Link
                href={`/products/${collection.slug}`}
                className="absolute inset-0"
              >
                <Image
                  src={collection.image}
                  alt={`${collection.name} material atmosphere`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-[0.88] transition-transform duration-[1800ms] ease-luxury group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 md:p-9">
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.26em] text-sand">
                      Collection
                    </p>
                    <h3 className="font-serif text-4xl font-medium text-ivory md:text-5xl">
                      {collection.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="text-ivory/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="group relative isolate inline-flex items-center gap-3 overflow-hidden border border-charcoal px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-all duration-700 ease-luxury before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-charcoal before:transition-transform before:duration-700 before:ease-luxury hover:-translate-y-0.5 hover:text-ivory hover:before:scale-x-100"
          >
            View All Collections
            <ArrowUpRight size={15} className="transition-transform duration-700 ease-luxury group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </section>

      <section id="projects" className="px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <motion.div {...fadeUp} className="mb-10 max-w-5xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
            Featured projects
          </p>
          <h2 className="font-serif text-[clamp(3.4rem,7vw,8rem)] font-medium leading-[0.9] tracking-normal">
            Some of Our Projects
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/60">
            Featured work across Grand Hyatt Goa, Taj Convention Goa, Cheval Blanc Maldives, Piramal Realty Mumbai, Hiranandani, Kalpataru, Awfis (Multiple Locations), and many more projects over 25+ years.
          </p>
        </motion.div>
        <div className="grid items-start gap-x-7 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <motion.div
              key={project.name}
              {...fadeUp}
              className="group text-left"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative h-[420px] overflow-hidden bg-sand md:h-[520px]">
                  <Image
                    src={project.image}
                    alt={`${project.name} architectural project`}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover transition-transform duration-[1800ms] ease-luxury group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 border-t border-charcoal/12 pt-5">
                  <h3 className="font-serif text-3xl font-medium transition-transform duration-500 ease-luxury group-hover:translate-x-1 md:text-4xl">
                    {project.name}
                  </h3>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-bronze opacity-0 transition-all duration-500 ease-luxury group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group relative isolate inline-flex items-center gap-3 overflow-hidden border border-charcoal px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-all duration-700 ease-luxury before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-charcoal before:transition-transform before:duration-700 before:ease-luxury hover:-translate-y-0.5 hover:text-ivory hover:before:scale-x-100"
          >
            View All Projects
            <ArrowUpRight size={15} className="transition-transform duration-700 ease-luxury group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-charcoal px-5 py-16 text-ivory md:px-12 md:py-28 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(166,124,82,0.22),transparent_38%)]" />
        <div className="relative grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-sand">
              <Globe2 size={16} />
              Global Sourcing
            </p>
            <h2 className="font-serif text-[clamp(3.2rem,5.8vw,7.2rem)] font-medium leading-[0.9] tracking-normal">
              Built Around Three Project Priorities
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-ivory/62">
              Every project has different stakeholders and different objectives. Our role is to bring these priorities together through strategic sourcing.
            </p>

            <div className="mt-10 space-y-3">
              <div className="tn-priority group py-3">
                <h4 className="text-[11px] uppercase tracking-[0.22em] text-sand font-semibold">Design Intent</h4>
                <p className="mt-2 text-sm leading-6 text-ivory/62">Understanding and preserving the design vision of the architect and designer.</p>
              </div>
              <div className="tn-priority group border-t border-ivory/10 pt-4">
                <h4 className="text-[11px] uppercase tracking-[0.22em] text-sand font-semibold">Technical Requirements</h4>
                <p className="mt-2 text-sm leading-6 text-ivory/62">Meeting specified technical parameters, quality standards and performance requirements of the project team and PMC.</p>
              </div>
              <div className="tn-priority group border-t border-ivory/10 pt-4">
                <h4 className="text-[11px] uppercase tracking-[0.22em] text-sand font-semibold">Project Economics</h4>
                <p className="mt-2 text-sm leading-6 text-ivory/62">Working towards the commercial objectives of the project, including CapEx optimisation and overall project viability.</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative min-h-[460px]">
            <svg viewBox="0 0 900 520" className="h-full min-h-[460px] w-full">
              <path d="M92 245C151 184 205 160 282 176C350 190 364 127 437 137C514 148 554 207 641 172C720 140 769 176 817 231" fill="none" stroke="rgba(245,241,235,0.14)" strokeWidth="1" />
              <path d="M152 330C241 281 318 322 400 291C474 263 505 309 584 293C662 278 702 326 790 307" fill="none" stroke="rgba(245,241,235,0.12)" strokeWidth="1" />
              <path className="map-line" d="M166 264C312 153 469 163 725 252" fill="none" stroke="#A67C52" strokeWidth="1.4" />
              <path className="map-line" d="M228 330C384 231 523 246 760 185" fill="none" stroke="#D9CFC2" strokeWidth="1.1" />
              <path className="map-line" d="M126 210C279 305 487 357 814 297" fill="none" stroke="#8B8B8B" strokeWidth="1" />
              {[
                [166, 264],
                [312, 153],
                [469, 163],
                [725, 252],
                [228, 330],
                [760, 185],
                [814, 297]
              ].map(([cx, cy]) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="4" fill="#F5F1EB" />
                  <circle cx={cx} cy={cy} r="16" fill="none" stroke="rgba(166,124,82,0.34)" />
                </g>
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
            Procurement Scope
          </p>
          <h2 className="font-serif text-[clamp(3rem,6vw,7.2rem)] font-medium leading-[0.9] tracking-normal mb-8">
            From Source to Project
          </h2>
          <p className="max-w-2xl text-base leading-8 text-charcoal/70 mb-12">
            Our involvement can extend across the complete procurement journey. The scope depends on the requirement. You may need us for one stage or the complete journey.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-charcoal/10 pt-8 sm:grid-cols-4 lg:grid-cols-8">
            {[
              { step: "01", name: "Sourcing" },
              { step: "02", name: "OEM & Custom Manufacturing" },
              { step: "03", name: "Production" },
              { step: "04", name: "Quality Control" },
              { step: "05", name: "International Procurement" },
              { step: "06", name: "Import & Logistics" },
              { step: "07", name: "Project Supply" },
              { step: "08", name: "Installation & Execution" }
            ].map((item, index) => (
              <div key={item.name} className="tn-process-item group relative py-3">
                <p className="font-serif text-lg text-bronze leading-none mb-3">{item.step}</p>
                <h4 className="text-[11px] uppercase tracking-[0.16em] leading-normal font-semibold text-charcoal">
                  {item.name}
                </h4>
                {index < 7 && (
                  <span className="hidden lg:block absolute right-2 top-0 text-charcoal/20 font-light">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="bg-sand/40 px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div {...fadeUp}>
            <p className="mb-7 text-[11px] uppercase tracking-[0.28em] text-bronze">
              Contact
            </p>
            <h2 className="font-serif text-[clamp(3.4rem,6vw,7.2rem)] font-medium leading-[0.9] tracking-normal">
              Let&apos;s Start With Your Requirement
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-charcoal/62">
              Start with a product requirement, specification, BOQ, drawing, reference or simply a project need.
            </p>
          </motion.div>
          <motion.form {...fadeUp} className="grid gap-5">
            {["Name", "Email", "Project Location"].map((label) => (
              <label key={label} className="block">
                <span className="text-[10px] uppercase tracking-[0.24em] text-stone">
                  {label}
                </span>
                <input className="mt-3 w-full border-0 border-b border-charcoal/22 bg-transparent px-0 py-3 text-lg outline-none transition-all duration-300 focus:border-bronze focus:pl-1" />
              </label>
            ))}
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.24em] text-stone">
                Material Intent
              </span>
              <textarea rows={3} className="mt-3 w-full resize-none border-0 border-b border-charcoal/22 bg-transparent px-0 py-3 text-lg outline-none transition-all duration-300 focus:border-bronze focus:pl-1" />
            </label>
            <button className="mt-4 inline-flex w-fit items-center gap-3 border border-charcoal px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-all duration-500 ease-luxury hover:bg-charcoal hover:text-ivory">
              Send Inquiry
              <Send size={15} />
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
