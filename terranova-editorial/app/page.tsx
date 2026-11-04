"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { collections, heroImage, projects } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";
import { useIntroDelay } from "@/components/PageTransition";
import {
  ClipImage,
  Counter,
  HorizontalScroll,
  HoverList,
  Magnetic,
  Marquee,
  ProgressRail,
  Reveal,
  ScrollScaleImage,
  ScrollWords,
  SplitText,
  StackCards,
  Stagger,
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

const countries = ["China", "Indonesia", "Vietnam", "Malaysia", "Thailand", "Selected European markets"];

export default function Home() {
  const reduce = useReducedMotion();
  const intro = useIntroDelay();
  const hero = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="dark" />

      {/* ═══ Hero ════════════════════════════════════════════ */}
      <section ref={hero} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-charcoal text-ivory">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { scale: imgScale }}
          initial={reduce ? false : { scale: 1.3, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease, delay: intro - 0.5 }}
        >
          <Image src={heroImage} alt="Refined architectural interior with stone and warm light" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.6)_0%,rgba(17,17,17,0.25)_30%,rgba(17,17,17,0.45)_60%,rgba(17,17,17,0.88)_100%)]" />

        <motion.div
          className="frame relative z-10 flex h-full flex-col justify-end pb-10 md:pb-14"
          style={reduce ? undefined : { y: textY, opacity: fade }}
        >
          <motion.p
            className="t-small mb-6 flex items-center gap-3 text-sand md:mb-8"
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: intro }}
          >
            <span className="h-px w-10 bg-sand/70" /> Global luxury sourcing and materials studio
          </motion.p>

          <h1 className="font-serif text-[clamp(3rem,8.4vw,9.6rem)] font-normal leading-[0.86] tracking-[-0.03em]">
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
            transition={{ duration: 1.2, ease, delay: intro + 0.7 }}
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

      {/* ═══ Collections ribbon ══════════════════════════════ */}
      <section className="border-b border-charcoal/10 py-8 md:py-12" aria-label="Collections">
        <Marquee
          items={collections.map((c) => c.name)}
          speed={55}
          itemClassName="font-serif text-[clamp(2.6rem,6vw,6rem)] italic leading-none tracking-[-0.02em]"
          altClassName="t-outline not-italic"
        />
      </section>

      {/* ═══ Statement ═══════════════════════════════════════ */}
      <section className="frame spread">
        <Reveal><RunHead n="i">Material intelligence</RunHead></Reveal>
        <ScrollWords
          text="Materials shape atmosphere, emotion, and identity."
          className="mt-10 max-w-[15ch] font-serif text-[clamp(3.2rem,9vw,10rem)] leading-[0.88] tracking-[-0.03em] md:ml-[16%]"
        />
      </section>

      {/* ═══ About ═══════════════════════════════════════════ */}
      <section id="studio" className="frame pb-24 md:pb-40">
        <div className="grid-12 gap-y-16">
          <div className="relative col-span-12 md:col-span-6">
            <ClipImage
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=88"
              alt="Luxury interior architectural detail"
              className="aspect-[4/5] w-[86%]"
              sizes="(min-width: 768px) 45vw, 90vw"
              parallax={10}
            />
            <ClipImage
              src={collections[8].image}
              alt="Marbles and stones material detail"
              className="absolute -bottom-12 right-0 aspect-[3/4] w-[42%] border-[10px] border-ivory md:-bottom-16"
              sizes="(min-width: 768px) 20vw, 40vw"
              parallax={22}
              from="right"
              delay={0.3}
            />
          </div>

          <div className="col-span-12 pt-10 md:col-span-6 md:col-start-7 md:pt-0">
            <Reveal><RunHead n="ii">About Terra Nova</RunHead></Reveal>
            <h2 className="t-h1 mt-8">
              <SplitText text="We don't sell what we have. We source what the project needs." stagger={0.035} />
            </h2>
            <Reveal delay={0.2}>
              <p className="t-body measure mt-8">
                TerraNova Finishing Materials is a dedicated platform for strategic project sourcing and procurement. We begin with the project requirement and work backwards to identify the appropriate product, manufacturing partner, country of origin and procurement route.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Lineage timeline */}
        <div className="relative mt-28 md:mt-40">
          <motion.div
            className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-bronze/60 md:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.8, ease }}
          />
          <Stagger className="grid gap-12 md:grid-cols-3 md:gap-8" gap={0.18}>
            {lineage.map(([n, name, copy]) => (
              <div key={name} className="relative">
                <span className="block h-[15px] w-[15px] rounded-full border border-bronze bg-ivory" />
                <span className="numeral mt-8 block text-[clamp(4rem,7vw,6.5rem)] leading-[0.8] text-bronze/90">{n}</span>
                <h3 className="t-h2 mt-6">{name}</h3>
                <p className="t-body mt-3 max-w-xs">{copy}</p>
              </div>
            ))}
          </Stagger>

          <Reveal className="mt-16 flex flex-col gap-6 border-t border-charcoal/12 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] italic leading-snug">Start with one requirement. Grow with the project.</p>
            <Link href="/about-us" className="link-u w-fit">
              Explore About Us <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ Sourcing network ════════════════════════════════ */}
      <section className="on-dark overflow-hidden bg-charcoal text-ivory">
        <div className="frame spread">
          <div className="grid-12 gap-y-10">
            <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="iii">Our sourcing network</RunHead></Reveal></div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="t-h1">
                <SplitText text={["Multi-Product.", "Multi-Factory.", "Multi-Country."]} lineClassName="[&:nth-child(2)]:pl-[8%] [&:nth-child(3)]:pl-[16%]" />
              </h2>
              <Reveal delay={0.15}>
                <p className="t-body measure-wide mt-10">
                  Our sourcing network enables us to evaluate manufacturing partners and sourcing markets based on the requirements of each project. The objective is not simply to find a supplier. It is to build the right procurement solution for the project.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid-12 mt-20 gap-y-14 border-t border-ivory/15 pt-14">
            <div className="col-span-6 md:col-span-3">
              <p className="font-serif text-[clamp(4.5rem,10vw,9.5rem)] leading-[0.8] tracking-[-0.04em] text-sand">
                <Counter to={25} suffix="+" />
              </p>
              <p className="t-small mt-4 text-ivory/55">Years of global sourcing</p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="font-serif text-[clamp(4.5rem,10vw,9.5rem)] leading-[0.8] tracking-[-0.04em] text-sand">
                <Counter to={12} suffix="+" />
              </p>
              <p className="t-small mt-4 text-ivory/55">Countries</p>
            </div>
            <Stagger className="col-span-12 grid gap-10 md:col-span-6 md:grid-cols-3 md:gap-6" gap={0.12}>
              {network.map(([name, copy]) => (
                <div key={name}>
                  <h3 className="t-h4 text-ivory">{name}</h3>
                  <p className="t-body mt-3 text-[0.9rem]">{copy}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </div>
        <div className="border-t border-ivory/10 py-8">
          <Marquee
            items={countries}
            speed={35}
            reverse
            itemClassName="font-serif text-[clamp(1.8rem,3.5vw,3.2rem)] leading-none text-ivory/80"
          />
        </div>
      </section>

      {/* ═══ Collections — pinned horizontal travel ══════════ */}
      <section id="collections" className="bg-paper">
        <HorizontalScroll className="items-stretch gap-6 pl-[var(--gutter)] pr-[var(--gutter)] md:gap-8">
          <div className="flex w-[78vw] shrink-0 flex-col justify-between pr-6 sm:w-[46vw] lg:w-[30vw]">
            <div>
              <RunHead n="iv">Collection</RunHead>
              <h2 className="t-h1 mt-8">Material collections for resolved spaces.</h2>
            </div>
            <Link href="/products" className="link-u mt-10 w-fit">
              View All Collections <ArrowUpRight size={14} />
            </Link>
          </div>
          {collections.map((c, i) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              data-cursor="Explore"
              className="group relative block w-[78vw] shrink-0 sm:w-[46vw] lg:w-[27vw]"
            >
              <div className="relative h-[52vh] overflow-hidden bg-sand md:h-[58vh]">
                <Image
                  src={c.image}
                  alt={`${c.name} material atmosphere`}
                  fill
                  sizes="(min-width: 1024px) 27vw, 78vw"
                  loading="eager"
                  className="object-cover transition-transform duration-[1.6s] ease-luxury group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="numeral absolute left-5 top-4 text-2xl text-ivory/90">{String(i + 1).padStart(2, "0")}</span>
                <div className="absolute inset-x-5 bottom-5 translate-y-3 text-ivory opacity-0 transition-all duration-700 ease-luxury group-hover:translate-y-0 group-hover:opacity-100">
                  {c.subCollections.length > 0 && (
                    <ul className="space-y-1 text-[0.8rem] text-ivory/85">
                      {c.subCollections.slice(0, 4).map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  )}
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="t-h3">{c.name}</h3>
                <ArrowUpRight size={18} className="shrink-0 text-bronze transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </HorizontalScroll>
      </section>

      {/* ═══ Projects ════════════════════════════════════════ */}
      <section id="projects" className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="v">Featured projects</RunHead></Reveal></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-display"><SplitText text="Some of Our Projects" /></h2>
            <Reveal delay={0.15}>
              <p className="t-body measure-wide mt-8">
                Featured work across Grand Hyatt Goa, Taj Convention Goa, Cheval Blanc Maldives, Piramal Realty Mumbai, Hiranandani, Kalpataru, Awfis (Multiple Locations), and many more projects over 25+ years.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 md:mt-24">
          <HoverList
            items={projects.slice(0, 6).map((p) => ({
              href: `/projects/${p.slug}`,
              title: p.name,
              image: p.image,
              meta: p.location,
              aside: p.productUsed
            }))}
          />
        </Reveal>

        <div className="mt-14 flex justify-center">
          <Magnetic>
            <Link href="/projects" className="btn btn--ghost rounded-full !px-7">
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </Magnetic>
        </div>
      </section>

      <ScrollScaleImage src={projects[0].image} alt="Cheval Blanc Randheli stone flooring" />

      {/* ═══ Priorities — sticky title, stacking cards ═══════ */}
      <section className="on-dark relative bg-charcoal text-ivory">
        <div className="frame grid-12 gap-y-14 py-24 md:py-36">
          <div className="col-span-12 md:col-span-5">
            <div className="md:sticky md:top-[16vh]">
              <Reveal><RunHead n="vi">Global Sourcing</RunHead></Reveal>
              <h2 className="t-h1 mt-8"><SplitText text="Built Around Three Project Priorities" /></h2>
              <Reveal delay={0.2}>
                <p className="t-body measure mt-8">
                  Every project has different stakeholders and different objectives. Our role is to bring these priorities together through strategic sourcing.
                </p>
              </Reveal>
              <svg viewBox="0 0 900 400" className="mt-10 h-auto w-full max-w-lg" aria-hidden="true">
                <path d="M92 195C151 134 205 110 282 126C350 140 364 77 437 87C514 98 554 157 641 122C720 90 769 126 817 181" fill="none" stroke="rgba(245,241,235,0.14)" strokeWidth="1" />
                <path d="M152 280C241 231 318 272 400 241C474 213 505 259 584 243C662 228 702 276 790 257" fill="none" stroke="rgba(245,241,235,0.12)" strokeWidth="1" />
                <path className="map-line" d="M166 214C312 103 469 113 725 202" fill="none" stroke="#A67C52" strokeWidth="1.6" />
                <path className="map-line" d="M228 280C384 181 523 196 760 135" fill="none" stroke="#D9CFC2" strokeWidth="1.2" />
                <path className="map-line" d="M126 160C279 255 487 307 814 247" fill="none" stroke="#8B8B8B" strokeWidth="1" />
                {[[166, 214], [312, 103], [469, 113], [725, 202], [228, 280], [760, 135], [814, 247]].map(([cx, cy]) => (
                  <g key={`${cx}-${cy}`}>
                    <circle cx={cx} cy={cy} r="4" fill="#F5F1EB" />
                    <circle cx={cx} cy={cy} r="16" fill="none" stroke="rgba(166,124,82,0.4)" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <StackCards cards={priorities} dark />
          </div>
        </div>
      </section>

      {/* ═══ Procurement scope — scroll-driven rail ══════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="vii">Procurement Scope</RunHead></Reveal></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1"><SplitText text="From Source to Project" /></h2>
            <Reveal delay={0.15}>
              <p className="t-body measure mt-8">
                Our involvement can extend across the complete procurement journey. The scope depends on the requirement. You may need us for one stage or the complete journey.
              </p>
            </Reveal>
          </div>
        </div>
        <ProgressRail steps={scope} className="mt-20 md:mt-28" />
      </section>

      {/* ═══ Contact ═════════════════════════════════════════ */}
      <section id="contact" className="bg-sand/50">
        <div className="frame grid-12 spread gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <Reveal><RunHead n="viii">Contact</RunHead></Reveal>
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
                <label key={label} className="group block">
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
