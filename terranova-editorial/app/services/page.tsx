import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";

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

      {/* ═══ Opening ═════════════════════════════════════════ */}
      <section className="frame pb-20 pt-10 md:pb-28 md:pt-16">
        <RunHead n="i">Our services</RunHead>
        <h1 className="t-display mt-10">
          <span className="reveal-line"><span>From project requirement</span></span>
          <span className="reveal-line md:pl-[16.66%]"><span>to project execution.</span></span>
        </h1>

        <div className="reveal-fade grid-12 mt-14 gap-y-8">
          <p className="t-lead col-span-12 text-charcoal/80 md:col-span-5 md:col-start-2">
            TerraNova provides integrated sourcing and procurement solutions for finishing materials, built around the specific requirements of each project.
          </p>
          <p className="t-body col-span-12 border-l border-bronze pl-6 md:col-span-4 md:col-start-8">
            From identifying the right manufacturing source to custom product development, production, quality control, international procurement, import and project execution, we manage the procurement journey as an integrated process.
          </p>
        </div>

        <p className="reveal-fade mt-16 border-t border-charcoal/12 pt-6 font-serif text-[1.35rem] italic text-bronze md:text-[1.6rem]">
          One requirement. One procurement strategy. End to end execution.
        </p>
      </section>

      {/* ═══ The procurement journey — eight chapters ════════ */}
      <section className="bg-paper">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><RunHead n="ii">The procurement journey</RunHead></div>
            <h2 className="t-h1 col-span-12 md:col-span-9">One connected process, shaped around the project.</h2>
          </div>

          <ol className="mt-16 border-t border-charcoal/16 md:mt-24">
            {stages.map((stage) => (
              <li key={stage.number} className="grid-12 gap-y-6 border-b border-charcoal/12 py-12 md:py-16">
                <div className="col-span-12 md:col-span-3">
                  <span className="numeral block text-[clamp(4.5rem,8vw,8rem)] leading-[0.8] text-bronze">{stage.number}</span>
                  <p className="t-small mt-5 text-charcoal/60">{stage.label}</p>
                </div>
                <h3 className="t-h2 col-span-12 md:col-span-4">{stage.heading}</h3>
                <div className="col-span-12 md:col-span-4 md:col-start-9">
                  <p className="t-body">{stage.copy}</p>
                  <ul className="inline-list mt-6">
                    {stage.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <p className="mt-6 font-serif text-[1.2rem] italic leading-snug text-charcoal/85">{stage.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ Process ═════════════════════════════════════════ */}
      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><RunHead n="iii">The TerraNova process</RunHead></div>
            <h2 className="t-h1 col-span-12 md:col-span-9">
              One requirement.
              <span className="block">One connected procurement journey.</span>
            </h2>
          </div>

          <ol className="mt-16 grid border-t border-ivory/15 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
            {process.map(([name, text], index) => (
              <li key={name} className="border-b border-ivory/12 py-8 pr-6 sm:odd:border-r sm:even:pl-6 lg:pl-6 lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(4n+1)]:pl-0 lg:border-r">
                <span className="numeral text-3xl text-sand">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-6">{name}</h3>
                <p className="t-body mt-3">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ Scope ═══════════════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><RunHead n="iv">Procurement scope</RunHead></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1">One requirement or the complete procurement cycle.</h2>
            <div className="grid-12 mt-10 gap-y-6">
              <p className="t-body col-span-12 md:col-span-6">
                A project may engage TerraNova for a single sourcing requirement or for a broader procurement scope covering multiple stages.
              </p>
              <ul className="inline-list col-span-12 self-end md:col-span-6">
                {["Specification", "BOQ", "Drawing", "Product reference", "Design requirement"].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 border-y border-charcoal/14 py-10 md:mt-28">
          <ol className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[clamp(1.4rem,2.6vw,2.4rem)] leading-tight">
            {["Sourcing", "Manufacturing", "Quality", "Import", "Supply", "Execution"].map((item, index, all) => (
              <li key={item} className="flex items-baseline gap-4">
                {item}
                {index < all.length - 1 && <span aria-hidden="true" className="text-bronze">/</span>}
              </li>
            ))}
          </ol>
          <p className="t-lead mt-8 italic text-charcoal/75">
            You define the requirement. We build the procurement route.
          </p>
        </div>
      </section>

      {/* ═══ Objective ═══════════════════════════════════════ */}
      <section className="bg-sand/45">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><RunHead n="v">Our objective</RunHead></div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="t-h1">
                Design intent.
                <span className="block">Technical performance. Project economics.</span>
              </h2>
              <p className="t-body measure mt-8">
                Every service we provide is ultimately directed towards achieving three project objectives.
              </p>
            </div>
          </div>

          <div className="grid-12 mt-16 gap-y-10 border-t border-charcoal/14 pt-10">
            {objectives.map(([name, text], i) => (
              <article key={name} className={`col-span-12 md:col-span-3 ${i === 0 ? "md:col-start-4" : ""}`}>
                <h3 className="t-small text-bronze">{name}</h3>
                <p className="t-h3 mt-4">{text}</p>
              </article>
            ))}
          </div>

          <p className="t-h2 mt-20 md:ml-[25%]">That is how TerraNova approaches project procurement.</p>
        </div>
      </section>

      {/* ═══ Call to action ══════════════════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-3"><RunHead n="vi">Start with a requirement</RunHead></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-display">Have a project requirement?</h2>
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="t-body measure">
                You do not need to have the complete procurement plan ready. If you have a product requirement, specification, BOQ, drawing, reference or simply a project need, start there.
              </p>
              <Link href="/contact-us" className="btn w-fit shrink-0">
                Discuss your project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
