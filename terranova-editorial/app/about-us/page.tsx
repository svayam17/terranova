import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";

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

export const metadata = {
  title: "About Us | Terra Nova",
  description: "Terra Nova is a project-led sourcing platform built on 25+ years of buyer experience, international trade, and a requirement-first approach to procurement."
};

export default function AboutUsPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      {/* ═══ Opening ═════════════════════════════════════════ */}
      <section className="frame pb-20 pt-10 md:pb-28 md:pt-16">
        <RunHead n="i">About TerraNova</RunHead>
        <h1 className="t-display mt-10">
          <span className="reveal-line"><span>We don&apos;t sell what we have.</span></span>
          <span className="reveal-line md:pl-[16.66%]"><span>We source what the project needs.</span></span>
        </h1>
        <div className="grid-12 mt-12">
          <p className="reveal-fade t-lead col-span-12 text-charcoal/75 md:col-span-5 md:col-start-8">
            TerraNova Finishing Materials was created from more than 25 years of experience in international trade, project procurement and sourcing.
          </p>
        </div>
      </section>

      {/* ═══ Buyer's perspective ═════════════════════════════ */}
      <section className="frame grid-12 gap-y-12 pb-24 md:pb-36">
        <figure className="reveal-plate plate col-span-12 aspect-[4/3] md:col-span-6 md:aspect-[5/6]">
          <Image
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=88"
            alt="Architectural sourcing and procurement planning"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div className="col-span-12 flex flex-col justify-end md:col-span-5 md:col-start-8">
          <RunHead n="ii">TerraNova was created around the project buyer&apos;s perspective</RunHead>
          <h2 className="t-h2 mt-8">A sourcing platform built from being buyers ourselves.</h2>
          <p className="t-body measure dropcap mt-8">
            We recognised that projects need more than an available product. They need a partner who can understand the requirement, identify the appropriate source and take responsibility through to delivery.
          </p>
        </div>
      </section>

      {/* ═══ Journey ═════════════════════════════════════════ */}
      <section className="bg-paper">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><RunHead n="iii">Our journey</RunHead></div>
            <h2 className="t-h1 col-span-12 md:col-span-9">From international trade to project led sourcing.</h2>
          </div>

          <ol className="mt-16 grid border-t border-charcoal/14 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
            {journey.map(([year, name, text]) => (
              <li key={name} className="border-b border-charcoal/12 py-8 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0">
                <p className="numeral text-[clamp(3.2rem,5vw,5.2rem)] leading-none text-bronze">{year}</p>
                <h3 className="t-h4 mt-8">{name}</h3>
                <p className="t-body mt-3 max-w-xs">{text}</p>
              </li>
            ))}
          </ol>

          <div className="grid-12 mt-14">
            <p className="t-lead col-span-12 text-charcoal/80 md:col-span-7 md:col-start-6">
              Our sourcing journey expanded from China to Indonesia, Vietnam, Malaysia, Thailand and selected European markets, building manufacturing relationships, product expertise and procurement capabilities across 12+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ The gap ═════════════════════════════════════════ */}
      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><RunHead n="iv">The gap we saw</RunHead></div>
            <h2 className="t-h1 col-span-12 md:col-span-9">Three priorities. One project.</h2>
          </div>

          <ol className="grid-12 mt-16 gap-y-10 border-t border-ivory/15 pt-10 md:mt-20">
            {priorities.map(([n, name, text]) => (
              <li key={name} className="col-span-12 md:col-span-4">
                <span className="numeral text-3xl text-sand">{n}</span>
                <h3 className="t-h3 mt-5">{name}</h3>
                <p className="t-body mt-4 max-w-sm">{text}</p>
              </li>
            ))}
          </ol>

          <blockquote className="grid-12 mt-24 md:mt-32">
            <div className="col-span-12 border-l border-bronze pl-6 md:col-span-10 md:col-start-2 md:pl-10">
              <p className="t-h1">
                The challenge is not simply finding a product. The challenge is finding a solution that brings all three together.
              </p>
              <p className="t-body measure-wide mt-8">
                Our own experience as buyers made us recognise this gap and the need for a more requirement-led approach to sourcing.
              </p>
            </div>
          </blockquote>
        </div>
      </section>

      {/* ═══ Approach ════════════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><RunHead n="v">The TerraNova approach</RunHead></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1">Requirement first. Sourcing second.</h2>
            <p className="t-body measure mt-8">
              TerraNova begins with understanding the project rather than beginning with a predetermined product or supplier.
            </p>
          </div>
        </div>

        <div className="grid-12 mt-16 gap-y-12 md:mt-24">
          {[
            ["Stage 01", "We evaluate", evaluate],
            ["Stage 02", "Then we source", source]
          ].map(([stage, verb, items], idx) => (
            <div key={stage as string} className={`col-span-12 md:col-span-4 ${idx === 0 ? "md:col-start-4" : "md:col-start-9"}`}>
              <p className="t-small text-charcoal/55">{stage as string}</p>
              <h3 className="t-h2 mt-3">{verb as string}</h3>
              <ul className="mt-8 border-t border-charcoal/14">
                {(items as string[]).map((item) => (
                  <li key={item} className="border-b border-charcoal/10 py-3 text-[0.95rem] text-charcoal/75">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid-12 mt-16">
          <p className="t-lead col-span-12 text-charcoal/70 md:col-span-9 md:col-start-4">
            Where required, we can develop or customise the product through OEM manufacturing and manage the process through production, quality control, international procurement, import, delivery and project execution.
          </p>
        </div>
      </section>

      {/* ═══ Global perspective ══════════════════════════════ */}
      <section className="bg-sand/45">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><RunHead n="vi">Global perspective</RunHead></div>
            <h2 className="t-h1 col-span-12 md:col-span-9">Multi-Product. Multi-Factory. Multi-Country.</h2>
          </div>

          <div className="grid-12 mt-16 gap-y-10 md:mt-20">
            <div className="col-span-6 md:col-span-4 md:col-start-4">
              <p className="font-serif text-[clamp(5rem,12vw,11rem)] leading-[0.8] tracking-[-0.04em] text-bronze">25+</p>
              <p className="t-small mt-5 text-charcoal/65">Years of international trade</p>
            </div>
            <div className="col-span-6 md:col-span-4">
              <p className="font-serif text-[clamp(5rem,12vw,11rem)] leading-[0.8] tracking-[-0.04em] text-bronze">12+</p>
              <p className="t-small mt-5 text-charcoal/65">Countries of sourcing experience</p>
            </div>
          </div>

          <div className="grid-12 mt-16 gap-y-8 border-t border-charcoal/14 pt-10">
            <p className="t-body col-span-12 md:col-span-5 md:col-start-4">
              Our 25+ years of international trade experience has developed into sourcing relationships across 12+ countries and multiple finishing-material categories. We are not restricted to a single product range or manufacturing source.
            </p>
            <ul className="col-span-12 space-y-3 md:col-span-3 md:col-start-10">
              {["Existing product", "Customised solution", "Manufacturing partner", "Country of origin"].map((item) => (
                <li key={item} className="border-l border-bronze pl-4 text-sm text-charcoal/75">{item}</li>
              ))}
            </ul>
            <p className="t-h2 col-span-12 mt-6 md:col-span-9 md:col-start-4">
              The project requirement determines the sourcing strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ What we bring ═══════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><RunHead n="vii">What we bring to a project</RunHead></div>
          <h2 className="t-h1 col-span-12 md:col-span-9">
            International sourcing experience. Manufacturing access. Project understanding.
          </h2>
        </div>

        <ol className="mt-16 grid border-t border-charcoal/14 md:mt-20 md:grid-cols-2 md:gap-x-16">
          {capabilities.map((item, index) => (
            <li key={item} className="grid grid-cols-[3.5rem_1fr] items-baseline border-b border-charcoal/12 py-6">
              <span className="numeral text-2xl text-bronze">{String(index + 1).padStart(2, "0")}</span>
              <span className="t-h3">{item}</span>
            </li>
          ))}
        </ol>
        <p className="t-lead mt-10 italic text-charcoal/70">All brought together around the requirements of the project.</p>
      </section>

      {/* ═══ Legacy ══════════════════════════════════════════ */}
      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><RunHead n="viii">Our group legacy</RunHead></div>
            <h2 className="t-h1 col-span-12 md:col-span-9">TerraNova is new. The experience behind it is not.</h2>
          </div>

          <div className="grid-12 mt-16 gap-y-12 md:mt-20">
            <div className="col-span-12 md:col-span-4 md:col-start-4">
              <ol className="flex flex-wrap items-baseline gap-x-3 font-serif text-2xl text-sand">
                <li>GS Stones</li>
                <li aria-hidden="true" className="text-ivory/30">/</li>
                <li>GS Woods</li>
                <li aria-hidden="true" className="text-ivory/30">/</li>
                <li>TerraNova</li>
              </ol>
              <p className="t-body mt-8">
                TerraNova Finishing Materials is part of the group that includes GS Stones Pvt. Ltd. and GS Woods Pvt. Ltd. The project experience, international relationships and procurement expertise developed through these businesses form the foundation on which TerraNova has been built.
              </p>
              <p className="t-body mt-5">
                The earlier businesses have delivered projects across hospitality, real estate, commercial and private developments.
              </p>
            </div>
            <blockquote className="col-span-12 border-l border-bronze pl-6 md:col-span-4 md:col-start-9 md:pl-8">
              <p className="t-h2">We bring 25 years of being the buyer to every project we source for.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══ Philosophy ══════════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-3"><RunHead n="ix">Our philosophy</RunHead></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1">We don&apos;t sell what we have. We source what the project needs.</h2>
            <div className="grid-12 mt-12 gap-y-8">
              <p className="t-body col-span-12 md:col-span-6">
                We believe sourcing should begin with the requirement, not the available inventory. Our role is to understand what the project needs, look across global manufacturing possibilities, and build a procurement solution that aligns design intent, technical requirements and project economics.
              </p>
              <p className="t-h3 col-span-12 italic md:col-span-5 md:col-start-8">
                Architecting Project Profits through Strategic Sourcing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-8 border-t border-charcoal/14 pt-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="t-small text-charcoal/55">Next step</p>
            <h3 className="t-h1 mt-4 max-w-3xl">Talk to TerraNova about your project.</h3>
          </div>
          <Link href="/contact-us" className="btn w-fit">
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
