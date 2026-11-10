"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { collections, heroImage, projects } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";
import { useIntroDelay } from "@/components/PageTransition";
import { Chapter, RouteCanvas } from "@/components/Route";
import { KineticRows, PinnedProjects } from "@/components/Kinetic";
import SourcingPlot from "@/components/SourcingPlot";
import {
  ClipImage,
  Counter,
  HorizontalScroll,
  Magnetic,
  Reveal,
  ScrollWords,
  SplitText,
  StackCards,
  ease
} from "@/components/motion";

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
  { kicker: "01", title: "Design Intent", body: "Understanding and preserving the design vision of the architect and designer." },
  { kicker: "02", title: "Technical Requirements", body: "Meeting specified technical parameters, quality standards and performance requirements of the project team and PMC." },
  { kicker: "03", title: "Project Economics", body: "Working towards the commercial objectives of the project, including CapEx optimisation and overall project viability." }
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

/** A station marker: the route's dot lands just left of this running head. */
function Station({ name, n, children }: { name: string; n: string; children: React.ReactNode }) {
  return (
    <div data-route-stop={name}>
      <RunHead n={n}>
        <span className="text-bronze">{name}</span>
        <span className="mx-2 opacity-40">/</span>
        {children}
      </RunHead>
    </div>
  );
}

function ScopeLine({ step, i }: { step: string; i: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "start 0.55"] });
  const o = useTransform(scrollYProgress, [0, 1], [0.12, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "0%"]);
  return (
    <motion.li
      ref={ref}
      style={reduce ? undefined : { opacity: o, x }}
      className="group flex items-baseline gap-5 border-b border-charcoal/12 py-3 md:gap-10 md:py-4"
    >
      <span className="numeral w-10 shrink-0 text-xl text-bronze md:w-16 md:text-3xl">{String(i + 1).padStart(2, "0")}</span>
      <span className="font-serif text-[clamp(1.9rem,5.6vw,5.4rem)] leading-[1] tracking-[-0.025em] transition-[font-style,transform] duration-500 group-hover:translate-x-3 group-hover:italic">
        {step}
      </span>
    </motion.li>
  );
}

export default function Home() {
  const reduce = useReducedMotion();
  const intro = useIntroDelay();
  const hero = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const veil = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="dark" />

      {/* ═══ Hero ════════════════════════════════════════════ */}
      <section ref={hero} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-charcoal text-ivory">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { clipPath: "inset(14% 22% 14% 22%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: Math.max(0, intro - 0.55) }}
        >
          <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: imgScale, y: imgY }}>
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.35 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.6, ease, delay: Math.max(0, intro - 0.55) }}
            >
              <Image src={heroImage} alt="Refined architectural interior with stone and warm light" fill priority sizes="100vw" className="object-cover" />
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.62)_0%,rgba(17,17,17,0.22)_32%,rgba(17,17,17,0.42)_62%,rgba(17,17,17,0.9)_100%)]" />
          <motion.div className="absolute inset-0 bg-charcoal" style={{ opacity: veil }} />
        </motion.div>

        <motion.div className="frame relative z-10 flex h-full flex-col justify-end pb-10 md:pb-14" style={reduce ? undefined : { y: textY, opacity: fade }}>
          <motion.p
            className="t-small mb-6 flex items-center gap-3 text-sand md:mb-8"
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: intro + 0.2 }}
          >
            <span className="h-px w-10 bg-sand/70" /> Global luxury sourcing and materials studio
          </motion.p>

          <h1 className="font-serif text-[clamp(3rem,8.6vw,10rem)] font-normal leading-[0.86] tracking-[-0.03em]">
            <SplitText
              immediate
              delay={intro + 0.1}
              text={["25+ Years of Global Sourcing.", "Now, Built Around Your Project."]}
              lineClassName="[&:nth-child(2)]:md:pl-[12%] [&:nth-child(2)]:italic"
            />
          </h1>

          <motion.div
            className="mt-10 grid gap-8 border-t border-ivory/20 pt-8 md:grid-cols-12 md:items-end"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: intro + 0.8 }}
          >
            <p className="max-w-md text-[1rem] leading-[1.75] text-ivory/80 md:col-span-5">
              For more than 25 years, we have been buying, sourcing and importing finishing materials for projects across India and overseas.
            </p>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:col-start-7 md:justify-end">
              <Magnetic>
                <Link href="/contact-us" className="btn btn--light rounded-full !px-6">
                  Discuss Your Project <ArrowUpRight size={16} />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/projects" className="btn btn--outline-light rounded-full !px-6">
                  View Projects <ArrowUpRight size={16} />
                </Link>
              </Magnetic>
            </div>
            <div className="hidden items-center justify-end gap-3 text-xs text-ivory/60 md:col-span-1 md:flex">
              <span className="relative block h-12 w-px overflow-hidden bg-ivory/20">
                <span className="scroll-cue absolute inset-0 bg-ivory" />
              </span>
              <ArrowDown size={14} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <RouteCanvas>
        {/* ═══ 01 Requirement ═══════════════════════════════ */}
        <Chapter>
          <div className="frame spread">
            <Station name="Requirement" n="01">Material intelligence</Station>
            <ScrollWords
              text="Materials shape atmosphere, emotion, and identity."
              className="mt-10 max-w-[14ch] font-serif text-[clamp(3.2rem,9.4vw,10.5rem)] leading-[0.86] tracking-[-0.035em] md:ml-[8.33%]"
            />

            <div className="grid-12 mt-24 gap-y-16 md:mt-36">
              <div className="relative col-span-12 md:col-span-6">
                <ClipImage
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=88"
                  alt="Luxury interior architectural detail"
                  className="aspect-[4/5] w-[84%]"
                  sizes="(min-width: 768px) 45vw, 90vw"
                  parallax={12}
                />
                <ClipImage
                  src={collections[8].image}
                  alt="Marbles and stones material detail"
                  className="absolute -bottom-14 right-0 aspect-[3/4] w-[44%] border-[10px] border-ivory"
                  sizes="(min-width: 768px) 20vw, 40vw"
                  parallax={26}
                  from="right"
                  delay={0.25}
                />
              </div>
              <div className="col-span-12 pt-8 md:col-span-5 md:col-start-8 md:pt-24">
                <p className="t-small text-charcoal/55">About Terra Nova</p>
                <h2 className="t-h1 mt-6">
                  <SplitText text="We don't sell what we have. We source what the project needs." stagger={0.035} />
                </h2>
                <Reveal delay={0.15}>
                  <p className="t-body mt-8">
                    TerraNova Finishing Materials is a dedicated platform for strategic project sourcing and procurement. We begin with the project requirement and work backwards to identify the appropriate product, manufacturing partner, country of origin and procurement route.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Lineage */}
            <div className="mt-40 md:mt-60">
              <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
                {lineage.map(([n, name, copy], i) => (
                  <Reveal key={name} as="li" delay={i * 0.12} className="border-t border-charcoal/15 pt-6">
                    <span className="numeral block text-[clamp(4rem,7vw,7rem)] leading-[0.8] text-bronze/85">{n}</span>
                    <h3 className="t-h2 mt-6">{name}</h3>
                    <p className="t-body mt-3 max-w-xs">{copy}</p>
                  </Reveal>
                ))}
              </ol>
              <Reveal className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] italic leading-snug">Start with one requirement. Grow with the project.</p>
                <Link href="/about-us" className="link-u w-fit">
                  Explore About Us <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            </div>
          </div>
        </Chapter>

        {/* ═══ 02 Source country ════════════════════════════ */}
        <Chapter tone="paper">
          <div className="frame pt-24 md:pt-36">
            <Station name="Source country" n="02">Our sourcing network</Station>
          </div>
          <KineticRows
            className="mt-10 font-serif leading-[0.92] tracking-[-0.035em]"
            rows={[
              { text: "Multi-Product. Multi-Factory.", className: "text-[clamp(3.4rem,11vw,12rem)]" },
              { text: "Multi-Country. Multi-Product.", className: "text-[clamp(3.4rem,11vw,12rem)] italic text-bronze" }
            ]}
          />
          <div className="frame pb-24 md:pb-36">
            <div className="grid-12 mt-16 gap-y-12 md:mt-24">
              <div className="col-span-12 md:col-span-4">
                <Reveal>
                  <p className="t-body">
                    Our sourcing network enables us to evaluate manufacturing partners and sourcing markets based on the requirements of each project. The objective is not simply to find a supplier. It is to build the right procurement solution for the project.
                  </p>
                </Reveal>
                <div className="mt-12 grid grid-cols-2 gap-6 border-t border-charcoal/15 pt-8">
                  <div>
                    <p className="font-serif text-[clamp(4rem,7vw,7rem)] leading-[0.8] tracking-[-0.04em] text-bronze"><Counter to={25} suffix="+" /></p>
                    <p className="t-small mt-3 text-charcoal/60">Years of global sourcing</p>
                  </div>
                  <div>
                    <p className="font-serif text-[clamp(4rem,7vw,7rem)] leading-[0.8] tracking-[-0.04em] text-bronze"><Counter to={12} suffix="+" /></p>
                    <p className="t-small mt-3 text-charcoal/60">Countries</p>
                  </div>
                </div>
              </div>
              <Reveal className="col-span-12 md:col-span-8" y={50}>
                <figure className="bg-ivory/70 p-4 md:p-6">
                  <SourcingPlot />
                  <figcaption className="t-small mt-3 border-t border-charcoal/12 pt-3 text-charcoal/60">
                    Named sourcing markets shown. Sourcing experience spans 12+ countries in total.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <ol className="mt-16 grid gap-10 border-t border-charcoal/15 pt-10 md:grid-cols-3 md:gap-8">
              {network.map(([name, copy], i) => (
                <Reveal key={name} as="li" delay={i * 0.1}>
                  <h3 className="t-h3">{name}</h3>
                  <p className="t-body mt-3 text-[0.95rem]">{copy}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Chapter>

        {/* ═══ 03 Factory — pinned collections ═════════════ */}
        <Chapter tone="paper">
          <div className="frame pb-4 pt-8">
            <Station name="Factory" n="03">Collection</Station>
          </div>
          <div className="bg-paper">
            <HorizontalScroll className="items-stretch gap-6 px-[var(--gutter)] md:gap-8">
              <div className="flex w-[80vw] shrink-0 flex-col justify-between pr-6 sm:w-[46vw] lg:w-[32vw]">
                <h2 className="t-display">Material collections for resolved spaces.</h2>
                <Link href="/products" className="link-u mt-10 w-fit">
                  View All Collections <ArrowUpRight size={14} />
                </Link>
              </div>
              {collections.map((c, i) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  data-cursor="Explore"
                  className={`group relative block w-[78vw] shrink-0 sm:w-[46vw] lg:w-[26vw] ${i % 2 ? "lg:mt-20" : ""}`}
                >
                  <div className="relative h-[52vh] overflow-hidden bg-sand md:h-[58vh]">
                    <Image
                      src={c.image}
                      alt={`${c.name} material atmosphere`}
                      fill
                      sizes="(min-width: 1024px) 26vw, 78vw"
                      loading="eager"
                      className="object-cover transition-transform duration-[1.6s] ease-luxury group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/5 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
                    <span className="numeral absolute left-5 top-4 text-2xl text-ivory/90">{String(i + 1).padStart(2, "0")}</span>
                    {c.subCollections.length > 0 && (
                      <ul className="absolute inset-x-5 bottom-5 translate-y-4 space-y-1 text-[0.8rem] text-ivory/90 opacity-0 transition-all duration-700 ease-luxury group-hover:translate-y-0 group-hover:opacity-100">
                        {c.subCollections.slice(0, 4).map((s) => <li key={s}>{s}</li>)}
                      </ul>
                    )}
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="t-h3">{c.name}</h3>
                    <ArrowUpRight size={18} className="shrink-0 text-bronze transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </HorizontalScroll>
          </div>
        </Chapter>

        {/* ═══ 04 QC — the three priorities ═════════════════ */}
        <Chapter tone="dark" open>
          <div className="frame grid-12 gap-y-14 py-28 md:py-40">
            <div className="col-span-12 md:col-span-5">
              <div className="md:sticky md:top-[16vh]">
                <Station name="Quality control" n="04">Global Sourcing</Station>
                <h2 className="t-display mt-8"><SplitText text="Built Around Three Project Priorities" /></h2>
                <Reveal delay={0.2}>
                  <p className="t-body mt-8 max-w-md">
                    Every project has different stakeholders and different objectives. Our role is to bring these priorities together through strategic sourcing.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <StackCards cards={priorities} dark />
            </div>
          </div>
        </Chapter>

        {/* ═══ 05 Import — procurement scope ═══════════════ */}
        <Chapter>
          <div className="frame spread">
            <div className="grid-12 gap-y-8">
              <div className="col-span-12 md:col-span-4">
                <Station name="Import" n="05">Procurement Scope</Station>
                <h2 className="t-h1 mt-8"><SplitText text="From Source to Project" /></h2>
                <Reveal delay={0.15}>
                  <p className="t-body mt-8">
                    Our involvement can extend across the complete procurement journey. The scope depends on the requirement. You may need us for one stage or the complete journey.
                  </p>
                </Reveal>
              </div>
              <ol className="col-span-12 border-t border-charcoal/12 md:col-span-8">
                {scope.map((s, i) => (
                  <ScopeLine key={s} step={s} i={i} />
                ))}
              </ol>
            </div>
          </div>
        </Chapter>

        {/* ═══ 06 Site — projects ══════════════════════════ */}
        <Chapter>
          <div className="frame pb-16 md:pb-24">
            <Station name="Site" n="06">Featured projects</Station>
            <div className="grid-12 mt-10 gap-y-8">
              <h2 className="t-display col-span-12 md:col-span-8"><SplitText text="Some of Our Projects" /></h2>
              <Reveal className="col-span-12 self-end md:col-span-4">
                <p className="t-body">
                  Featured work across Grand Hyatt Goa, Taj Convention Goa, Cheval Blanc Maldives, Piramal Realty Mumbai, Hiranandani, Kalpataru, Awfis (Multiple Locations), and many more projects over 25+ years.
                </p>
              </Reveal>
            </div>
          </div>
          <PinnedProjects projects={projects.slice(0, 6)} />
          <div className="frame flex justify-center py-16">
            <Magnetic>
              <Link href="/projects" className="btn btn--ghost rounded-full !px-7">
                View All Projects <ArrowUpRight size={16} />
              </Link>
            </Magnetic>
          </div>
        </Chapter>
      </RouteCanvas>

      {/* ═══ Contact ═════════════════════════════════════════ */}
      <section id="contact" className="bg-sand/50">
        <div className="frame grid-12 spread gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <RunHead n="07">Contact</RunHead>
            <h2 className="t-display mt-8"><SplitText text="Let's Start With Your Requirement" /></h2>
            <Reveal delay={0.2}>
              <p className="t-body measure mt-8">
                Start with a product requirement, specification, BOQ, drawing, reference or simply a project need.
              </p>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-6 md:col-start-7 md:pt-4">
            <form className="grid gap-9">
              {["Name", "Email", "Project Location"].map((label, i) => (
                <label key={label} className="block">
                  <span className="field-label flex items-baseline gap-3">
                    <span className="numeral text-base text-bronze">{String(i + 1).padStart(2, "0")}</span>
                    {label}
                  </span>
                  <input className="field" type={label === "Email" ? "email" : "text"} name={label.toLowerCase().replace(/\s/g, "-")} />
                </label>
              ))}
              <label className="block">
                <span className="field-label flex items-baseline gap-3">
                  <span className="numeral text-base text-bronze">04</span>
                  Material Intent
                </span>
                <textarea rows={3} className="field" name="material-intent" />
              </label>
              <Magnetic className="mt-2 w-fit">
                <button type="submit" className="btn rounded-full !px-7">
                  Send Inquiry <ArrowUpRight size={16} />
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer cta={false} />
    </main>
  );
}
