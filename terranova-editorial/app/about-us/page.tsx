import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { RunHead } from "@/components/Editorial";
import {
  ClipImage,
  Counter,
  HorizontalScroll,
  Magnetic,
  Marquee,
  Reveal,
  ScrollWords,
  SplitText,
  StackCards,
  Stagger
} from "@/components/motion";
import { collections } from "@/lib/content";

const journey = [
  ["2001", "International procurement & sourcing", "The international trade journey began with procurement and sourcing for projects."],
  ["2008", "GS Stones", "Finishing-material sourcing and importing for projects and clients."],
  ["Evolution", "GS Woods", "International sourcing, OEM manufacturing and project-specific procurement."],
  ["Today", "TerraNova", "A dedicated platform for project-led sourcing and procurement."]
];
const journeyImages = [collections[8].image, collections[6].image, collections[0].image, collections[3].image];
const priorities = [
  { kicker: "01", title: "Design intent", body: "The architect and designer have a defined vision for the material, finish, appearance and overall design language of the project." },
  { kicker: "02", title: "Technical requirements", body: "The technical team and PMC require specified parameters, performance standards, quality and durability." },
  { kicker: "03", title: "Project economics", body: "The project owner needs procurement to support required CapEx, cost objectives and overall commercial viability." }
];
const evaluate = ["Design", "Technical specification", "Quantity", "Timeline", "Quality", "Budget", "Commercial objective"];
const source = ["Product", "Manufacturing partner", "Country", "Manufacturing approach", "Procurement route"];
const capabilities = ["25+ years of international trade experience", "12+ countries of sourcing experience", "Multi-product procurement capabilities", "OEM and custom manufacturing", "Manufacturing partner evaluation", "Production and quality control", "International procurement and import", "Project delivery and execution"];

export const metadata = {
  title: "About Us | Terra Nova",
  description: "Terra Nova is a project-led sourcing platform built on 25+ years of buyer experience, international trade, and a requirement-first approach to procurement."
};

export default function AboutUsPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <PageHero
        label="About TerraNova"
        lines={["We don't sell what we have.", "We source what the project needs."]}
        aside={
          <p className="t-lead text-charcoal/75">
            TerraNova Finishing Materials was created from more than 25 years of experience in international trade, project procurement and sourcing.
          </p>
        }
        image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=88"
        imageAlt="Architectural sourcing and procurement planning"
      />

      {/* ═══ Buyer's perspective ═════════════════════════════ */}
      <section className="frame spread">
        <Reveal><RunHead n="ii">TerraNova was created around the project buyer&apos;s perspective</RunHead></Reveal>
        <ScrollWords
          text="A sourcing platform built from being buyers ourselves."
          className="mt-10 max-w-[18ch] font-serif text-[clamp(2.8rem,7.4vw,8rem)] leading-[0.9] tracking-[-0.03em]"
        />
        <div className="grid-12 mt-14">
          <Reveal className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="t-body dropcap">
              We recognised that projects need more than an available product. They need a partner who can understand the requirement, identify the appropriate source and take responsibility through to delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Journey — pinned horizontal timeline ════════════ */}
      <section className="bg-paper">
        <HorizontalScroll className="items-stretch gap-6 px-[var(--gutter)] md:gap-10">
          <div className="flex w-[82vw] shrink-0 flex-col justify-center sm:w-[50vw] lg:w-[34vw]">
            <RunHead n="iii">Our journey</RunHead>
            <h2 className="t-h1 mt-8">From international trade to project led sourcing.</h2>
          </div>
          {journey.map(([year, name, text], i) => (
            <article key={name} className="grid w-[82vw] shrink-0 grid-rows-[auto_1fr] gap-6 border-l border-charcoal/14 pl-6 sm:w-[60vw] md:pl-10 lg:w-[44vw]">
              <p className="numeral text-[clamp(5rem,12vw,12rem)] leading-[0.8] tracking-[-0.03em] text-bronze">{year}</p>
              <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
                <div>
                  <h3 className="t-h2">{name}</h3>
                  <p className="t-body mt-4 max-w-sm">{text}</p>
                </div>
                <div className="relative hidden aspect-[3/4] overflow-hidden bg-sand md:block">
                  <Image src={journeyImages[i]} alt="" fill loading="eager" sizes="20vw" className="object-cover" />
                </div>
              </div>
            </article>
          ))}
        </HorizontalScroll>
        <div className="frame pb-24 md:pb-32">
          <div className="grid-12">
            <Reveal className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="t-lead text-charcoal/80">
                Our sourcing journey expanded from China to Indonesia, Vietnam, Malaysia, Thailand and selected European markets, building manufacturing relationships, product expertise and procurement capabilities across 12+ countries.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ The gap ═════════════════════════════════════════ */}
      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame grid-12 gap-y-14 py-24 md:py-36">
          <div className="col-span-12 md:col-span-5">
            <div className="md:sticky md:top-[16vh]">
              <Reveal><RunHead n="iv">The gap we saw</RunHead></Reveal>
              <h2 className="t-display mt-8"><SplitText text={["Three priorities.", "One project."]} /></h2>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <StackCards cards={priorities} dark />
          </div>
        </div>
        <div className="frame pb-24 md:pb-36">
          <div className="border-l border-bronze pl-6 md:ml-[16%] md:pl-12">
            <ScrollWords
              text="The challenge is not simply finding a product. The challenge is finding a solution that brings all three together."
              className="t-h1"
            />
            <Reveal>
              <p className="t-body measure-wide mt-10">
                Our own experience as buyers made us recognise this gap and the need for a more requirement-led approach to sourcing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ Approach ════════════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="v">The TerraNova approach</RunHead></Reveal></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1"><SplitText text={["Requirement first.", "Sourcing second."]} lineClassName="[&:nth-child(2)]:pl-[10%] [&:nth-child(2)]:italic" /></h2>
            <Reveal delay={0.15}>
              <p className="t-body measure mt-8">
                TerraNova begins with understanding the project rather than beginning with a predetermined product or supplier.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:mt-28 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          {[
            ["Stage 01", "We evaluate", evaluate, "bg-ivory border border-charcoal/14"],
            ["Stage 02", "Then we source", source, "bg-charcoal text-ivory on-dark"]
          ].map(([stage, verb, items, tone], idx) => (
            <Reveal key={stage as string} delay={idx * 0.2} className={`${idx === 1 ? "lg:col-start-3" : ""}`}>
              <div className={`h-full p-8 md:p-12 ${tone as string}`}>
                <p className={`t-small ${idx === 1 ? "text-sand" : "text-bronze"}`}>{stage as string}</p>
                <h3 className="t-h1 mt-4">{verb as string}</h3>
                <Stagger className="mt-10" gap={0.06} y={14}>
                  {(items as string[]).map((item) => (
                    <p key={item} className={`border-t py-3 text-[0.95rem] ${idx === 1 ? "border-ivory/12 text-ivory/75" : "border-charcoal/10 text-charcoal/75"}`}>{item}</p>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
          <div className="flex items-center justify-center py-2 lg:col-start-2 lg:row-start-1 lg:px-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bronze text-ivory">
              <ArrowRight size={20} className="rotate-90 lg:rotate-0" />
            </span>
          </div>
        </div>

        <div className="grid-12 mt-16">
          <Reveal className="col-span-12 md:col-span-9 md:col-start-4">
            <p className="t-lead text-charcoal/70">
              Where required, we can develop or customise the product through OEM manufacturing and manage the process through production, quality control, international procurement, import, delivery and project execution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Global perspective ══════════════════════════════ */}
      <section className="overflow-hidden bg-sand/50">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="vi">Global perspective</RunHead></Reveal></div>
            <h2 className="t-h1 col-span-12 md:col-span-9"><SplitText text="Multi-Product. Multi-Factory. Multi-Country." /></h2>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-8">
            <div className="border-t border-charcoal/16 pt-6">
              <p className="font-serif text-[clamp(7rem,18vw,17rem)] leading-[0.78] tracking-[-0.05em] text-bronze"><Counter to={25} suffix="+" /></p>
              <p className="t-small mt-6 text-charcoal/65">Years of international trade</p>
            </div>
            <div className="border-t border-charcoal/16 pt-6">
              <p className="font-serif text-[clamp(7rem,18vw,17rem)] leading-[0.78] tracking-[-0.05em] text-bronze"><Counter to={12} suffix="+" /></p>
              <p className="t-small mt-6 text-charcoal/65">Countries of sourcing experience</p>
            </div>
          </div>

          <div className="grid-12 mt-20 gap-y-10">
            <Reveal className="col-span-12 md:col-span-6">
              <p className="t-body">
                Our 25+ years of international trade experience has developed into sourcing relationships across 12+ countries and multiple finishing-material categories. We are not restricted to a single product range or manufacturing source.
              </p>
            </Reveal>
            <Stagger className="col-span-12 grid grid-cols-2 gap-4 md:col-span-5 md:col-start-8" gap={0.08}>
              {["Existing product", "Customised solution", "Manufacturing partner", "Country of origin"].map((item) => (
                <p key={item} className="border-l-2 border-bronze bg-ivory/60 px-4 py-4 text-sm text-charcoal/80">{item}</p>
              ))}
            </Stagger>
          </div>
        </div>
        <div className="border-y border-charcoal/12 py-6">
          <Marquee
            items={["The project requirement determines the sourcing strategy."]}
            speed={28}
            itemClassName="font-serif text-[clamp(2rem,4.4vw,4rem)] italic leading-none"
          />
        </div>
      </section>

      {/* ═══ What we bring ═══════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="vii">What we bring to a project</RunHead></Reveal></div>
          <h2 className="t-h1 col-span-12 md:col-span-9">
            <SplitText text="International sourcing experience. Manufacturing access. Project understanding." stagger={0.03} />
          </h2>
        </div>

        <Stagger className="mt-16 grid gap-px bg-charcoal/12 sm:grid-cols-2 lg:grid-cols-4 md:mt-24" gap={0.06}>
          {capabilities.map((item, index) => (
            <article key={item} className="group relative h-full min-h-[15rem] overflow-hidden bg-ivory p-7">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-charcoal transition-transform duration-700 ease-luxury group-hover:scale-y-100" />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <span className="numeral text-3xl text-bronze transition-colors duration-700 group-hover:text-sand">{String(index + 1).padStart(2, "0")}</span>
                <p className="t-h3 transition-colors duration-700 group-hover:text-ivory">{item}</p>
              </div>
            </article>
          ))}
        </Stagger>
        <Reveal><p className="t-lead mt-10 italic text-charcoal/70">All brought together around the requirements of the project.</p></Reveal>
      </section>

      {/* ═══ Legacy ══════════════════════════════════════════ */}
      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="viii">Our group legacy</RunHead></Reveal></div>
            <h2 className="t-h1 col-span-12 md:col-span-9"><SplitText text={["TerraNova is new.", "The experience behind it is not."]} lineClassName="[&:nth-child(2)]:italic" /></h2>
          </div>

          <div className="grid-12 mt-20 gap-y-14">
            <div className="col-span-12 md:col-span-5 md:col-start-4">
              <Stagger className="flex flex-wrap items-center gap-x-4 gap-y-2 font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] text-sand" gap={0.2} y={12}>
                <span>GS Stones</span>
                <ArrowRight size={18} className="text-ivory/40" />
                <span>GS Woods</span>
                <ArrowRight size={18} className="text-ivory/40" />
                <span>TerraNova</span>
              </Stagger>
              <Reveal>
                <p className="t-body mt-10">
                  TerraNova Finishing Materials is part of the group that includes GS Stones Pvt. Ltd. and GS Woods Pvt. Ltd. The project experience, international relationships and procurement expertise developed through these businesses form the foundation on which TerraNova has been built.
                </p>
                <p className="t-body mt-5">
                  The earlier businesses have delivered projects across hospitality, real estate, commercial and private developments.
                </p>
              </Reveal>
            </div>
            <blockquote className="col-span-12 border-l border-bronze pl-6 md:col-span-4 md:col-start-9 md:pl-8">
              <ScrollWords text="We bring 25 years of being the buyer to every project we source for." className="t-h2" />
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══ Philosophy ══════════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="ix">Our philosophy</RunHead></Reveal></div>
          <div className="col-span-12 md:col-span-9">
            <ScrollWords text="We don't sell what we have. We source what the project needs." className="t-h1" />
            <div className="grid-12 mt-14 gap-y-8">
              <Reveal className="col-span-12 md:col-span-6">
                <p className="t-body">
                  We believe sourcing should begin with the requirement, not the available inventory. Our role is to understand what the project needs, look across global manufacturing possibilities, and build a procurement solution that aligns design intent, technical requirements and project economics.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="col-span-12 md:col-span-5 md:col-start-8">
                <p className="t-h3 italic text-bronze">Architecting Project Profits through Strategic Sourcing.</p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-28 flex flex-col gap-10 border-t border-charcoal/14 pt-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="t-small text-bronze">Next step</p>
            <h3 className="t-display mt-6 max-w-4xl"><SplitText text="Talk to TerraNova about your project." /></h3>
          </div>
          <Magnetic>
            <Link
              href="/contact-us"
              data-cursor="Talk"
              className="group flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-charcoal text-sm text-ivory transition-colors duration-500 hover:bg-bronze md:h-44 md:w-44"
            >
              <span className="flex items-center gap-2">Contact Us <ArrowUpRight size={16} /></span>
            </Link>
          </Magnetic>
        </div>
      </section>

      <Footer cta={false} />
    </main>
  );
}
