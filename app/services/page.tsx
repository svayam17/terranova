"use client";

// Images removed to keep page typography-led
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   DATA — unchanged
   ───────────────────────────────────────────── */

const stages = [
  { number: "01", label: "Project requirement", heading: "We start with understanding the project.", copy: "Every project begins with a requirement. We study the BOQ, design intent, technical specifications, quantities, project timelines and commercial objectives to understand what the project actually needs.", note: "From this, we build the appropriate sourcing and procurement approach.", tags: ["BOQ", "Design intent", "Technical specification", "Quantity", "Timeline", "Commercial objective"] },
  { number: "02", label: "Global sourcing", heading: "The right product. The right source. The right market.", copy: "Our international sourcing experience spans 12+ countries, with manufacturing relationships across China, Indonesia, Vietnam, Malaysia, Thailand and selected European markets.", note: "The objective is to identify the most appropriate sourcing solution for the project.", tags: ["Product", "Factory", "Country of origin", "Quality", "Capacity", "Commercials", "Lead time"] },
  { number: "03", label: "OEM and custom manufacturing", heading: "When the requirement does not exist, we develop it.", copy: "Where an existing product does not meet the project requirement, we work with suitable manufacturing partners to develop products through OEM and custom manufacturing.", note: "This allows project specific requirements to be translated into manufacturable solutions.", tags: ["Design", "Dimensions", "Materials", "Finish", "Construction", "Performance", "Quantity"] },
  { number: "04", label: "Factory and supplier evaluation", heading: "Manufacturing capability matters.", copy: "We evaluate manufacturing partners based on product capability, production capacity, quality systems, experience, certifications, consistency and their ability to meet project specific requirements.", note: "The objective is not simply to find a supplier, but to identify the manufacturing partner most appropriate for the project.", tags: ["Product capability", "Capacity", "Quality", "Experience", "Consistency"] },
  { number: "05", label: "Production and quality control", heading: "From approved specification to finished product.", copy: "Once the manufacturing source and product are approved, we coordinate with the factory through production.", note: "Quality control remains integrated throughout the procurement process.", tags: ["Approved specification", "Production", "Quality", "Packaging", "Dispatch"] },
  { number: "06", label: "International procurement and import", heading: "Managing the international procurement journey.", copy: "International sourcing involves more than identifying a factory. We manage commercial negotiation, order placement, production coordination, documentation, logistics and import.", note: "Our experience across international markets allows us to evaluate the appropriate procurement route for each project.", tags: ["Commercial negotiation", "Order placement", "Documentation", "Logistics", "Shipping", "Customs", "Import", "Delivery"] },
  { number: "07", label: "Logistics and project delivery", heading: "From factory to project site.", copy: "We coordinate the movement of materials from the manufacturing source to the project, managing the international logistics and delivery process.", note: "The objective is to ensure that material arrives as specified, in the required quantity and within the planned project schedule.", tags: ["Source", "Logistics", "Delivery", "Project site"] },
  { number: "08", label: "Project execution", heading: "Procurement does not end at delivery.", copy: "Where required, TerraNova can extend its involvement beyond procurement into project execution and installation.", note: "This provides continuity between the approved product, the supplied material and its application at site.", tags: ["Supply", "Installation", "Project execution"] },
];

const process = [
  ["Requirement", "Understand the project and its objectives."],
  ["Source", "Identify suitable products, factories and markets."],
  ["Develop", "Customise or develop where required."],
  ["Manufacture", "Manage production against approved specifications."],
  ["Control", "Monitor quality and compliance."],
  ["Procure and import", "Manage commercial procurement, logistics and import."],
  ["Deliver", "Coordinate material delivery to the project."],
  ["Execute", "Support installation and project execution where required."],
];

/* ─────────────────────────────────────────────
   CURATED UNSPLASH IMAGES
   ───────────────────────────────────────────── */

// Removed curated images to keep layout typography-led

/* ─────────────────────────────────────────────
   ANIMATION PRESETS
   ───────────────────────────────────────────── */

const luxuryEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.75, ease: luxuryEase },
};

const fadeUpDelay = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

/* ─────────────────────────────────────────────
   HERO IMAGE with scroll reveal
   ───────────────────────────────────────────── */

function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["-4%", "4%"]);

  return (
    <motion.div
      ref={ref}
      className="tn-editorial-img mx-5 md:mx-12 lg:mx-16"
      style={{
        height: "clamp(280px, 55vh, 680px)",
        clipPath: isInView
          ? "inset(0% 0% 0% 0%)"
          : "inset(100% 0% 0% 0%)",
        transition: shouldReduce ? "none" : "clip-path 1s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src={images.hero}
          alt="Premium architectural interior with warm timber flooring"
          fill
          sizes="100vw"
          className="object-cover"
          style={{
            transform: isInView ? "scale(1)" : "scale(1.04)",
            transition: shouldReduce ? "none" : "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* Editorial images removed — page is typography-led */

/* ─────────────────────────────────────────────
   SCROLL PROGRESS + SECTION INDICATOR
   ───────────────────────────────────────────── */

const sectionLabels = [
  "Requirement",
  "Sourcing",
  "Development",
  "Manufacturing",
  "Quality",
  "Procurement",
  "Delivery",
  "Execution",
  "Process",
  "Scope",
  "Objective",
];

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionEls = document.querySelectorAll("[data-section-label]");
    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = (entry.target as HTMLElement).dataset.sectionLabel;
            if (label) setActiveSection(label);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="tn-scroll-progress hidden md:block">
        <motion.div className="tn-scroll-progress-fill" style={{ height }} />
      </div>
      {activeSection && (
        <div className="tn-section-indicator hidden md:block">{activeSection}</div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ───────────────────────────────────────────── */

export default function ServicesPage() {
  const shouldReduce = useReducedMotion();

  /* ── Stage articles with image interludes ── */
  const renderStages = useCallback(() => {
    const elements: React.ReactNode[] = [];

    stages.forEach((stage, index) => {
      /* Standard stage article */
      elements.push(
        <motion.article
          key={stage.number}
          data-section-label={sectionLabels[index]}
          className="tn-service-stage grid gap-5 py-7 md:grid-cols-[5.5rem_minmax(11rem,0.75fr)_minmax(0,1.25fr)] md:gap-8 md:py-9"
          {...fadeUp}
        >
          <motion.p className="font-serif text-5xl md:text-6xl leading-none text-bronze" {...fadeUpDelay(index * 0.04)}>
            {stage.number}
          </motion.p>
          <div>
            <motion.p className="text-[10px] uppercase tracking-[0.2em] text-stone" {...fadeUpDelay(index * 0.05)}>{stage.label}</motion.p>
            <motion.h3 className="mt-4 font-serif text-3xl leading-[0.95] md:text-4xl" {...fadeUpDelay(index * 0.08)}>{stage.heading}</motion.h3>
          </div>
          <div>
            <motion.p className="max-w-xl text-sm leading-7 text-charcoal/68" {...fadeUpDelay(index * 0.12)}>{stage.copy}</motion.p>
            <div className="mt-5 flex flex-wrap gap-2">
              {stage.tags.map((tag) => (
                <span
                  key={tag}
                  className="tn-tag border border-charcoal/12 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-charcoal/70 transition-colors duration-200 transform hover:-translate-y-0.5 hover:border-bronze hover:text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.p className="mt-5 text-sm font-medium leading-6 text-charcoal/78" {...fadeUpDelay(index * 0.14)}>{stage.note}</motion.p>
          </div>
          {index < stages.length - 1 && (
            <span className="col-span-full border-b border-charcoal/12" />
          )}
        </motion.article>
      );
    });

    return elements;
  }, []);

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />
      <ScrollProgress />

      {/* ════════════════════════════════════════
          HERO
          ════════════════════════════════════════ */}
      <section className="px-5 pb-14 pt-8 md:px-12 md:pb-20 md:pt-12 lg:px-16">
        <motion.p
          className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze"
          {...fadeUp}
        >
          Our services
        </motion.p>
        <motion.h1
          className="max-w-5xl font-serif text-[clamp(3.8rem,8vw,8.8rem)] font-medium leading-[0.86] tracking-[-0.04em]"
          {...fadeUpDelay(0.08)}
        >
          From project requirement
          <span className="block">to project execution.</span>
        </motion.h1>
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)]"
          {...fadeUpDelay(0.16)}
        >
          <p className="max-w-2xl text-base leading-8 text-charcoal/68 md:text-lg">
            TerraNova provides integrated sourcing and procurement solutions for
            finishing materials, built around the specific requirements of each
            project.
          </p>
          <div className="border-l border-bronze pl-5 text-sm leading-7 text-charcoal/62">
            From identifying the right manufacturing source to custom product
            development, production, quality control, international procurement,
            import and project execution, we manage the procurement journey as
            an integrated process.
          </div>
        </motion.div>
        <motion.p
          className="mt-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze"
          {...fadeUpDelay(0.24)}
        >
          One requirement. One procurement strategy. End to end execution.
        </motion.p>
      </section>

        {/* Removed hero image — editorial typography only */}

      {/* ════════════════════════════════════════
          PROCUREMENT JOURNEY
          ════════════════════════════════════════ */}
      <section className="bg-sand/35 px-5 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.p
            className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze"
            {...fadeUp}
          >
            The procurement journey
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em]"
            {...fadeUpDelay(0.08)}
          >
            One connected process, shaped around the project.
          </motion.h2>
          <div className="mt-10 border-y border-charcoal/12">
            {renderStages()}
          </div>
        </div>
      </section>

      {/* Material interlude removed — typography-led layout maintained */}

      {/* ════════════════════════════════════════
          DARK — TERRANOVA PROCESS
          ════════════════════════════════════════ */}
      <DarkProcessSection shouldReduce={shouldReduce} />

      {/* ════════════════════════════════════════
          PROCUREMENT SCOPE
          ════════════════════════════════════════ */}
      <section
        className="px-5 py-16 md:px-12 md:py-20 lg:px-16"
        data-section-label="Scope"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div {...fadeUp}>
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
              Procurement scope
            </p>
            <h2 className="font-serif text-[clamp(3rem,5vw,6rem)] font-medium leading-[0.9] tracking-[-0.03em]">
              One requirement or the complete procurement cycle.
            </h2>
          </motion.div>
          <motion.div {...fadeUpDelay(0.1)}>
            <p className="max-w-xl text-base leading-8 text-charcoal/68">
              A project may engage TerraNova for a single sourcing requirement or
              for a broader procurement scope covering multiple stages.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Specification",
                "BOQ",
                "Drawing",
                "Product reference",
                "Design requirement",
              ].map((item) => (
                <span
                  key={item}
                  className="tn-tag border border-charcoal/12 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-charcoal/70 transition-colors duration-200 transform hover:-translate-y-0.5 hover:border-bronze hover:text-charcoal"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-10 max-w-6xl border-y border-charcoal/12 py-5"
          {...fadeUpDelay(0.15)}
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-charcoal/70">
            {[
              "Sourcing",
              "Manufacturing",
              "Quality",
              "Import",
              "Supply",
              "Execution",
            ].map((item, index, all) => (
              <span key={item} className="flex items-center gap-3">
                {item}
                {index < all.length - 1 && (
                  <ArrowRight size={13} className="text-bronze" />
                )}
              </span>
            ))}
          </div>
          <p className="mt-6 font-serif text-3xl leading-none md:text-4xl">
            You define the requirement. We build the procurement route.
          </p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          OBJECTIVE
          ════════════════════════════════════════ */}
      <section
        className="bg-sand/40 px-5 py-16 md:px-12 md:py-20 lg:px-16"
        data-section-label="Objective"
      >
        <div className="mx-auto max-w-6xl">
          <motion.p
            className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze"
            {...fadeUp}
          >
            Our objective
          </motion.p>
          <motion.h2
            className="font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em]"
            {...fadeUpDelay(0.08)}
          >
            Design intent.
            <span className="block">
              Technical performance. Project economics.
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-charcoal/68"
            {...fadeUpDelay(0.14)}
          >
            Every service we provide is ultimately directed towards achieving
            three project objectives.
          </motion.p>
          <motion.div
            className="mt-10 grid gap-px border border-charcoal/12 bg-charcoal/12 md:grid-cols-3"
            {...fadeUpDelay(0.2)}
          >
            <article className="bg-ivory p-7">
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-bronze">
                Design intent
              </h3>
              <p className="mt-5 font-serif text-2xl leading-[1.05]">
                Preserve the design vision of the project.
              </p>
            </article>
            <article className="bg-ivory p-7">
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-bronze">
                Technical performance
              </h3>
              <p className="mt-5 font-serif text-2xl leading-[1.05]">
                Meet the technical and quality requirements.
              </p>
            </article>
            <article className="bg-ivory p-7">
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-bronze">
                Project economics
              </h3>
              <p className="mt-5 font-serif text-2xl leading-[1.05]">
                Achieve the commercial objectives of the project.
              </p>
            </article>
          </motion.div>
          <motion.p
            className="mt-7 font-serif text-3xl leading-none md:text-4xl"
            {...fadeUpDelay(0.25)}
          >
            That is how TerraNova approaches project procurement.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
          ════════════════════════════════════════ */}
      <section className="px-5 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 border-t border-charcoal/12 pt-12 md:flex-row md:items-end md:justify-between">
          <motion.div {...fadeUp}>
            <p className="text-[11px] uppercase tracking-[0.28em] text-bronze">
              Start with a requirement
            </p>
            <h2 className="mt-4 font-serif text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.03em]">
              Have a project requirement?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-charcoal/68">
              You do not need to have the complete procurement plan ready. If you
              have a product requirement, specification, BOQ, drawing, reference
              or simply a project need, start there.
            </p>
          </motion.div>
          <motion.div {...fadeUpDelay(0.15)}>
            <Link
              href="/contact-us"
              className="group inline-flex w-fit items-center gap-3 border border-charcoal bg-charcoal px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory hover:text-charcoal"
            >
              Discuss your project{" "}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────────
   DARK PROCESS SECTION — staggered reveal
   ───────────────────────────────────────────── */

function DarkProcessSection({ shouldReduce }: { shouldReduce: boolean | null }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      ref={ref}
      className="bg-charcoal px-5 py-16 text-ivory md:px-12 md:py-20 lg:px-16"
      data-section-label="Process"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="mb-6 text-[11px] uppercase tracking-[0.28em] text-sand"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: luxuryEase }}
        >
          The TerraNova process
        </motion.p>
        <motion.h2
          className="max-w-4xl font-serif text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.08, ease: luxuryEase }}
        >
          One requirement.
          <span className="block">One connected procurement journey.</span>
        </motion.h2>
        <div className="mt-10 grid gap-px border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([title, text], index) => (
            <motion.article
              key={title}
              className="group bg-charcoal p-6 transition-colors duration-500 hover:bg-[#1a1816]"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: shouldReduce ? 0 : 0.2 + index * 0.09,
                ease: luxuryEase,
              }}
            >
              <p className="font-serif text-lg text-sand">0{index + 1}</p>
              <h3 className="mt-7 text-[10px] uppercase tracking-[0.2em] text-ivory">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ivory/62">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
