import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StageJourney from "@/components/StageJourney";
import { RunHead } from "@/components/Editorial";
import { Magnetic, Marquee, ProgressRail, Reveal, ScrollWords, SplitText, Stagger } from "@/components/motion";

const stages = [
  { number: "01", label: "Project requirement", heading: "We start with understanding the project.", copy: "Every project begins with a requirement. We study the BOQ, design intent, technical specifications, quantities, project timelines and commercial objectives to understand what the project actually needs.", note: "From this, we build the appropriate sourcing and procurement approach.", tags: ["BOQ", "Design intent", "Technical specification", "Quantity", "Timeline", "Commercial objective"] },
  { number: "02", label: "Global sourcing", heading: "The right product. The right source. The right market.", copy: "Our international sourcing experience spans 12+ countries, with manufacturing relationships across China, Indonesia, Vietnam, Malaysia, Thailand and selected European markets.", note: "The objective is to identify the most appropriate sourcing solution for the project.", tags: ["Product", "Factory", "Country of origin", "Quality", "Capacity", "Commercials", "Lead time"] },
  { number: "03", label: "OEM and custom manufacturing", heading: "When the requirement does not exist, we develop it.", copy: "Where an existing product does not meet the project requirement, we work with suitable manufacturing partners to develop products through OEM and custom manufacturing.", note: "This allows project specific requirements to be translated into manufacturable solutions.", tags: ["Design", "Dimensions", "Materials", "Finish", "Construction", "Performance", "Quantity"] },
  { number: "04", label: "Factory and supplier evaluation", heading: "Manufacturing capability matters.", copy: "We evaluate manufacturing partners based on product capability, production capacity, quality systems, experience, certifications, consistency and their ability to meet project specific requirements.", note: "The objective is not simply to find a supplier, but to identify the manufacturing partner most appropriate for the project.", tags: ["Product capability", "Capacity", "Quality", "Experience", "Consistency"] },
  { number: "05", label: "Production and quality control", heading: "From approved specification to finished product.", copy: "Once the manufacturing source and product are approved, we coordinate with the factory through production.", note: "Quality control remains integrated throughout the procurement process.", tags: ["Approved specification", "Production", "Quality", "Packaging", "Dispatch"] },
  { number: "06", label: "International procurement and import", heading: "Managing the international procurement journey.", copy: "International sourcing involves more than identifying a factory. We manage commercial negotiation, order placement, production coordination, documentation, logistics and import.", note: "Our experience across international markets allows us to evaluate the appropriate procurement route for each project.", tags: ["Commercial negotiation", "Order placement", "Documentation", "Logistics", "Shipping", "Customs", "Import", "Delivery"] },
  { number: "07", label: "Logistics and project delivery", heading: "From factory to project site.", copy: "We coordinate the movement of materials from the manufacturing source to the project, managing the international logistics and delivery process.", note: "The objective is to ensure that material arrives as specified, in the required quantity and within the planned project schedule.", tags: ["Source", "Logistics", "Delivery", "Project site"] },
  { number: "08", label: "Project execution", heading: "Procurement does not end at delivery.", copy: "Where required, TerraNova can extend its involvement beyond procurement into project execution and installation.", note: "This provides continuity between the approved product, the supplied material and its application at site.", tags: ["Supply", "Installation", "Project execution"] }
];

const process = [
  ["Requirement", "Understand the project and its objectives."],
  ["Source", "Identify suitable products, factories and markets."],
  ["Develop", "Customise or develop where required."],
  ["Manufacture", "Manage production against approved specifications."],
  ["Control", "Monitor quality and compliance."],
  ["Procure and import", "Manage commercial procurement, logistics and import."],
  ["Deliver", "Coordinate material delivery to the project."],
  ["Execute", "Support installation and project execution where required."]
];

const objectives = [
  ["Design intent", "Preserve the design vision of the project."],
  ["Technical performance", "Meet the technical and quality requirements."],
  ["Project economics", "Achieve the commercial objectives of the project."]
];

export default function ServicesPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <PageHero
        label="Our services"
        lines={["From project requirement", "to project execution."]}
        aside={
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="t-lead text-charcoal/80">
              TerraNova provides integrated sourcing and procurement solutions for finishing materials, built around the specific requirements of each project.
            </p>
            <p className="t-body border-l border-bronze pl-6">
              From identifying the right manufacturing source to custom product development, production, quality control, international procurement, import and project execution, we manage the procurement journey as an integrated process.
            </p>
          </div>
        }
      />

      <div className="border-y border-charcoal/12 bg-charcoal py-6 text-ivory">
        <Marquee
          items={["One requirement.", "One procurement strategy.", "End to end execution."]}
          speed={30}
          itemClassName="font-serif text-[clamp(1.8rem,3.6vw,3.4rem)] italic leading-none"
          altClassName="text-sand not-italic"
        />
      </div>

      {/* ═══ Procurement journey ═════════════════════════════ */}
      <section className="bg-paper">
        <div className="frame spread">
          <div className="grid-12 mb-16 gap-y-8 md:mb-24">
            <div className="col-span-12 md:col-span-4"><Reveal><RunHead n="ii">The procurement journey</RunHead></Reveal></div>
            <h2 className="t-h1 col-span-12 md:col-span-8"><SplitText text="One connected process, shaped around the project." stagger={0.04} /></h2>
          </div>
          <StageJourney stages={stages} />
        </div>
      </section>

      {/* ═══ Process — dark tiles ════════════════════════════ */}
      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="iii">The TerraNova process</RunHead></Reveal></div>
            <h2 className="t-h1 col-span-12 md:col-span-9">
              <SplitText text={["One requirement.", "One connected procurement journey."]} lineClassName="[&:nth-child(2)]:italic [&:nth-child(2)]:text-sand" />
            </h2>
          </div>

          <Stagger className="mt-16 grid gap-px bg-ivory/12 sm:grid-cols-2 lg:grid-cols-4 md:mt-24" gap={0.07}>
            {process.map(([name, text], index) => (
              <article key={name} className="group relative h-full min-h-[17rem] overflow-hidden bg-charcoal p-7">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-bronze transition-transform duration-700 ease-luxury group-hover:scale-y-100" />
                <div className="relative flex h-full flex-col justify-between gap-10">
                  <span className="numeral text-5xl text-sand/80 transition-colors duration-500 group-hover:text-ivory">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="t-h3">{name}</h3>
                    <p className="mt-3 text-[0.92rem] leading-[1.7] text-ivory/60 transition-colors duration-500 group-hover:text-ivory/90">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ Scope ═══════════════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="iv">Procurement scope</RunHead></Reveal></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1"><SplitText text="One requirement or the complete procurement cycle." stagger={0.04} /></h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <Reveal>
                <p className="t-body">
                  A project may engage TerraNova for a single sourcing requirement or for a broader procurement scope covering multiple stages.
                </p>
              </Reveal>
              <Stagger className="flex flex-wrap gap-2" gap={0.05} y={10}>
                {["Specification", "BOQ", "Drawing", "Product reference", "Design requirement"].map((item) => (
                  <span key={item} className="inline-block rounded-full border border-charcoal/15 px-4 py-2 text-[0.8rem] text-charcoal/75">{item}</span>
                ))}
              </Stagger>
            </div>
          </div>
        </div>

        <ProgressRail
          steps={["Sourcing", "Manufacturing", "Quality", "Import", "Supply", "Execution"]}
          className="mt-20 md:mt-28"
        />
        <Reveal>
          <p className="t-h2 mt-20 italic md:ml-[25%]">You define the requirement. We build the procurement route.</p>
        </Reveal>
      </section>

      {/* ═══ Objective ═══════════════════════════════════════ */}
      <section className="bg-sand/50">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="v">Our objective</RunHead></Reveal></div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="t-h1">
                <SplitText text={["Design intent.", "Technical performance. Project economics."]} />
              </h2>
              <Reveal delay={0.15}>
                <p className="t-body measure mt-8">
                  Every service we provide is ultimately directed towards achieving three project objectives.
                </p>
              </Reveal>
            </div>
          </div>

          <Stagger className="mt-16 grid gap-5 md:grid-cols-3" gap={0.12}>
            {objectives.map(([name, text], i) => (
              <article
                key={name}
                className="group flex h-full min-h-[20rem] flex-col justify-between bg-ivory p-8 transition-all duration-700 ease-luxury hover:-translate-y-2 hover:bg-charcoal hover:text-ivory md:p-10"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="t-small text-bronze group-hover:text-sand">{name}</h3>
                  <span className="numeral text-2xl text-charcoal/25 group-hover:text-ivory/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="t-h2">{text}</p>
              </article>
            ))}
          </Stagger>

          <ScrollWords text="That is how TerraNova approaches project procurement." className="t-h1 mt-24 md:ml-[25%]" />
        </div>
      </section>

      {/* ═══ Call to action ══════════════════════════════════ */}
      <section className="frame spread">
        <Reveal><RunHead n="vi">Start with a requirement</RunHead></Reveal>
        <h2 className="t-display mt-10"><SplitText text="Have a project requirement?" /></h2>
        <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="t-body measure">
              You do not need to have the complete procurement plan ready. If you have a product requirement, specification, BOQ, drawing, reference or simply a project need, start there.
            </p>
          </Reveal>
          <Magnetic>
            <Link
              href="/contact-us"
              data-cursor="Talk"
              className="group flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-bronze text-center text-sm text-ivory transition-colors duration-500 hover:bg-charcoal md:h-48 md:w-48"
            >
              <span>
                Discuss your project
                <ArrowUpRight size={18} className="mx-auto mt-2 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </Link>
          </Magnetic>
        </div>
      </section>

      <Footer cta={false} />
    </main>
  );
}
