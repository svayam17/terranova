import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const journey = [
  ["2001", "International procurement & sourcing", "The international trade journey began with procurement and sourcing for projects."],
  ["2008", "GS Stones", "Finishing-material sourcing and importing for projects and clients."],
  ["Evolution", "GS Woods", "International sourcing, OEM manufacturing and project-specific procurement."],
  ["Today", "TerraNova", "A dedicated platform for project-led sourcing and procurement."]
];
const priorities = [
  ["01", "Design intent", "The architect and designer have a defined vision for the material, finish, appearance and overall design language of the project."],
  ["02", "Technical requirements", "The technical team and PMC require specified parameters, performance standards, quality and durability."],
  ["03", "Project economics", "The project owner needs procurement to support required CapEx, cost objectives and overall commercial viability."]
];
const evaluate = ["Design", "Technical specification", "Quantity", "Timeline", "Quality", "Budget", "Commercial objective"];
const source = ["Product", "Manufacturing partner", "Country", "Manufacturing approach", "Procurement route"];
const capabilities = ["25+ years of international trade experience", "12+ countries of sourcing experience", "Multi-product procurement capabilities", "OEM and custom manufacturing", "Manufacturing partner evaluation", "Production and quality control", "International procurement and import", "Project delivery and execution"];

export const metadata = { title: "About Us | Terra Nova", description: "Terra Nova is a project-led sourcing platform built on 25+ years of buyer experience, international trade, and a requirement-first approach to procurement." };

export default function AboutUsPage() {
  return <main className="bg-ivory text-charcoal">
    <Header variant="light" />
    <section className="px-5 pb-12 pt-8 md:px-12 md:pb-16 lg:px-16"><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">About TerraNova</p><h1 className="max-w-5xl font-serif text-[clamp(3.7rem,7.5vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.04em]">We don&apos;t sell what we have.<span className="block">We source what the project needs.</span></h1></div><p className="max-w-lg justify-self-end text-base leading-8 text-charcoal/70">TerraNova Finishing Materials was created from more than 25 years of experience in international trade, project procurement and sourcing.</p></div></section>

    <section className="px-5 pb-16 md:px-12 md:pb-20 lg:px-16"><div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div className="relative h-[360px] overflow-hidden bg-sand md:h-[470px]"><Image src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=88" alt="Architectural sourcing and procurement planning" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover transition-transform duration-[1800ms] ease-luxury hover:scale-105" /></div><div className="lg:pl-8"><p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">TerraNova was created around the project buyer&apos;s perspective</p><h2 className="max-w-3xl font-serif text-[clamp(2.8rem,5vw,5.7rem)] font-medium leading-[0.9] tracking-[-0.03em]">A sourcing platform built from being buyers ourselves.</h2><p className="mt-6 max-w-xl text-base leading-8 text-charcoal/68">We recognised that projects need more than an available product. They need a partner who can understand the requirement, identify the appropriate source and take responsibility through to delivery.</p></div></div></section>

    <section className="bg-sand/40 px-5 py-16 md:px-12 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">Our journey</p><h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em]">From international trade to project led sourcing.</h2><div className="mt-10 grid border-y border-charcoal/12 py-6 sm:grid-cols-2 lg:grid-cols-4">{journey.map(([year, title, text], index) => <article key={title} className="tn-about-timeline relative py-5 sm:px-6 sm:py-0 first:sm:pl-0 last:sm:pr-0"><p className="text-[10px] uppercase tracking-[0.24em] text-stone">{year}</p><h3 className="mt-5 font-serif text-3xl leading-none md:text-4xl">{title}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-charcoal/68">{text}</p>{index < journey.length - 1 && <span className="hidden lg:block absolute right-0 top-1/2 text-charcoal/35">→</span>}</article>)}</div><p className="mt-7 ml-auto max-w-3xl text-right text-base font-semibold leading-8 text-charcoal/78">Our sourcing journey expanded from China to Indonesia, Vietnam, Malaysia, Thailand and selected European markets, building manufacturing relationships, product expertise and procurement capabilities across 12+ countries.</p></div></section>

    <section className="bg-charcoal px-5 py-16 text-ivory md:px-12 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-sand">The gap we saw</p><h2 className="font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em]">Three priorities. One project.</h2><div className="mt-10 grid gap-px border border-ivory/15 bg-ivory/15 md:grid-cols-3">{priorities.map(([number, title, text]) => <article key={title} className="tn-about-priority group bg-charcoal p-7 md:p-8"><p className="font-serif text-xl text-sand">{number}</p><h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">{title}</h3><p className="mt-4 text-sm leading-7 text-ivory/68">{text}</p></article>)}</div><div className="mt-10 max-w-5xl border-l border-bronze pl-6 md:pl-9"><p className="font-serif text-[clamp(2.6rem,5vw,5.6rem)] font-medium leading-[0.88] tracking-[-0.03em]">The challenge is not simply finding a product. The challenge is finding a solution that brings all three together.</p><p className="mt-6 max-w-3xl text-base leading-8 text-ivory/65">Our own experience as buyers made us recognise this gap and the need for a more requirement-led approach to sourcing.</p></div></div></section>

    <section className="px-5 py-16 md:px-12 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">The TerraNova approach</p><h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em]">Requirement first. Sourcing second.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/68">TerraNova begins with understanding the project rather than beginning with a predetermined product or supplier.</p><div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch"><div className="border border-charcoal/12 p-7 md:p-8"><p className="text-[11px] uppercase tracking-[0.24em] text-bronze">Stage 01 — We evaluate</p><div className="mt-7 flex flex-wrap gap-2">{evaluate.map((item) => <span key={item} className="border border-charcoal/12 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-charcoal/70">{item}</span>)}</div></div><div className="flex items-center justify-center py-1 lg:py-0"><ArrowRight className="text-bronze" size={20} /></div><div className="border border-charcoal/12 bg-sand/48 p-7 md:p-8"><p className="text-[11px] uppercase tracking-[0.24em] text-charcoal/60">Stage 02 — Then we source</p><div className="mt-7 flex flex-wrap gap-2">{source.map((item) => <span key={item} className="border border-charcoal/12 bg-ivory/55 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-charcoal/70">{item}</span>)}</div></div></div>
          <p className="mt-7 max-w-4xl font-serif text-[clamp(1.25rem,2.4vw,1.6rem)] leading-7 text-charcoal/68">Where required, we can develop or customise the product through OEM manufacturing and manage the process through production, quality control, international procurement, import, delivery and project execution.</p>
        </div></section>

    <section className="bg-sand/35 px-5 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
        <div>
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">Global perspective</p>
          <h2 className="font-serif text-[clamp(3rem,5vw,6rem)] font-medium leading-[0.9] tracking-[-0.03em]">Multi-Product. Multi-Factory. Multi-Country.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-ivory p-7 border border-bronze/30">
            <p className="font-serif text-5xl leading-none text-bronze">25+</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-stone">Years of international trade</p>
          </div>
          <div className="bg-ivory p-7 border border-bronze/30">
            <p className="font-serif text-5xl leading-none text-bronze">12+</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-stone">Countries of sourcing experience</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-charcoal/12 pt-7">
        <p className="max-w-3xl text-base leading-8 text-charcoal/68">Our 25+ years of international trade experience has developed into sourcing relationships across 12+ countries and multiple finishing-material categories. We are not restricted to a single product range or manufacturing source.</p>
        <div className="mt-7 grid gap-2 sm:grid-cols-4">{["Existing product", "Customised solution", "Manufacturing partner", "Country of origin"].map((item) => <p key={item} className="border-l border-bronze pl-4 text-[10px] uppercase tracking-[0.18em] text-charcoal/70">{item}</p>)}</div>
        <p className="mt-7 font-serif text-3xl leading-none md:text-4xl">The project requirement determines the sourcing strategy.</p>
      </div>
    </section>

    <section className="px-5 py-16 md:px-12 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">What we bring to a project</p><h2 className="max-w-5xl font-serif text-[clamp(3rem,5vw,6rem)] font-medium leading-[0.9] tracking-[-0.03em]">International sourcing experience. Manufacturing access. Project understanding.</h2><div className="mt-10 grid gap-px border border-charcoal/12 bg-charcoal/12 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map((item, index) => <article key={item} className="tn-capability group bg-ivory p-6"><p className="font-serif text-lg text-bronze">0{index + 1}</p><p className="mt-7 font-serif text-[1.35rem] leading-[1.08] text-charcoal/80">{item}</p></article>)}</div><p className="mt-7 text-[11px] uppercase tracking-[0.22em] text-bronze">All brought together around the requirements of the project.</p></div></section>

    <section className="bg-charcoal px-5 py-16 text-ivory md:px-12 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-sand">Our group legacy</p><h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em]">TerraNova is new. The experience behind it is not.</h2><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]"><div><div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-sand"><span>GS Stones</span><span className="text-ivory/35">→</span><span>GS Woods</span><span className="text-ivory/35">→</span><span>TerraNova</span></div><p className="mt-7 max-w-xl text-base leading-8 text-ivory/70">TerraNova Finishing Materials is part of the group that includes GS Stones Pvt. Ltd. and GS Woods Pvt. Ltd. The project experience, international relationships and procurement expertise developed through these businesses form the foundation on which TerraNova has been built.</p><p className="mt-5 max-w-xl text-sm leading-7 text-ivory/58">The earlier businesses have delivered projects across hospitality, real estate, commercial and private developments.</p></div><p className="border-l border-bronze pl-7 font-serif text-[clamp(2.5rem,4vw,5rem)] leading-[0.9]">We bring 25 years of being the buyer to every project we source for.</p></div></div></section>

    <section className="px-5 py-16 md:px-12 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">Our philosophy</p><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><h2 className="font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em]">We don&apos;t sell what we have. We source what the project needs.</h2><div><p className="text-base leading-8 text-charcoal/68">We believe sourcing should begin with the requirement, not the available inventory. Our role is to understand what the project needs, look across global manufacturing possibilities, and build a procurement solution that aligns design intent, technical requirements and project economics.</p><p className="mt-7 font-serif text-[clamp(2rem,3vw,3.2rem)] leading-[0.95]">Architecting Project Profits through Strategic Sourcing.</p></div></div><div className="mt-10 flex flex-col gap-5 border-t border-charcoal/12 pt-7 md:flex-row md:items-end md:justify-between"><div><p className="text-[11px] uppercase tracking-[0.28em] text-bronze">Next step</p><h3 className="mt-4 font-serif text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.9]">Talk to TerraNova about your project.</h3></div><Link href="/contact-us" className="group inline-flex w-fit items-center gap-3 border border-charcoal bg-charcoal px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-ivory transition-all duration-500 hover:-translate-y-0.5 hover:bg-ivory hover:text-charcoal">Contact Us <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div></div></section>
    <Footer />
  </main>;
}
