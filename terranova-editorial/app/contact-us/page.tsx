"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";
import { useIntroDelay } from "@/components/PageTransition";
import { Magnetic, ProgressRail, Reveal, ScrollWords, SplitText, Stagger, ease } from "@/components/motion";

const approach = [
  { n: "01", title: "A specific product", body: "Flooring, carpet, decking, wall finish or another finishing material." },
  { n: "02", title: "A project requirement", body: "One or multiple finishing material requirements for a project." },
  { n: "03", title: "A custom requirement", body: "A product that needs to be developed, customised or OEM manufactured." },
  { n: "04", title: "International sourcing", body: "A product to be sourced from a specific country or international market." },
  { n: "05", title: "Complete procurement", body: "Support from sourcing and manufacturing through import, supply and execution." }
];

const route = ["Requirement", "Sourcing", "Manufacturing", "Quality", "Import", "Supply", "Execution"];

const audiences = [
  { n: "01", title: "Architects & Designers", body: "Design intent, references, finishes, materials and specifications." },
  { n: "02", title: "Developers & Project Owners", body: "BOQs, quantities, commercial objectives and procurement requirements." },
  { n: "03", title: "PMCs & Project Teams", body: "Technical specifications, quality requirements and project parameters." }
];

function Field({ label, name, type = "text", span = false }: { label: string; name: string; type?: string; span?: boolean }) {
  return (
    <label className={`block ${span ? "sm:col-span-2" : ""}`}>
      <span className="field-label">{label}</span>
      <input name={name} type={type} className="field" />
    </label>
  );
}

export default function ContactUsPage() {
  const [open, setOpen] = useState(false);
  const [openRow, setOpenRow] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const intro = useIntroDelay();
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("open") === "1") setOpen(true);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      {/* ═══ Opening ═════════════════════════════════════════ */}
      <section className="frame pb-20 pt-10 md:pb-28 md:pt-16">
        <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: intro }}>
          <RunHead n="i">Contact</RunHead>
        </motion.div>
        <h1 className="t-display mt-10">
          <SplitText immediate delay={intro + 0.08} text={["Start With Your Project", "Requirement."]} lineClassName="[&:nth-child(2)]:md:pl-[16.66%] [&:nth-child(2)]:italic" />
        </h1>

        <div className="grid-12 mt-16 gap-y-12">
          <motion.div
            className="col-span-12 md:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: intro + 0.6 }}
          >
            <p className="t-lead text-charcoal/80">Every project begins with a requirement.</p>
            <p className="t-body mt-4">
              Share a product requirement, project brief, BOQ, drawing, specification or simply an idea. We will evaluate the appropriate sourcing and procurement route.
            </p>
            <Magnetic className="mt-10">
              <button type="button" onClick={() => setOpen(true)} className="btn rounded-full !px-7">
                Start a project <ArrowUpRight size={16} />
              </button>
            </Magnetic>
          </motion.div>

          <motion.aside
            className="col-span-12 md:col-span-5 md:col-start-8"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: intro + 0.75 }}
          >
            <div className="relative overflow-hidden bg-charcoal p-8 text-ivory md:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-bronze/25 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <p className="t-small flex items-center gap-3 text-sand"><span className="numeral text-lg">02</span> Direct contact</p>
                <p className="mt-8 font-serif text-[clamp(2.4rem,4vw,3.4rem)] leading-none">Amit Mehta</p>
                <p className="t-small mt-3 text-ivory/55">Director</p>
                <div className="mt-8 space-y-3 border-t border-ivory/12 pt-6 text-[0.95rem]">
                  <a href="tel:+919867185966" className="flex items-center gap-3 text-ivory/85 transition-colors hover:text-sand"><Phone size={15} /> +91 98671 85966</a>
                  <a href="mailto:amit@terranovasourcing.in" className="flex items-center gap-3 text-ivory/85 transition-colors hover:text-sand"><Mail size={15} /> amit@terranovasourcing.in</a>
                </div>
                <p className="t-small mt-6 text-ivory/45">TerraNova Finishing Materials Pvt. Ltd.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <a href="tel:+919867185966" className="btn btn--light rounded-full !gap-3 !px-5">Call Amit <ArrowUpRight size={15} /></a>
                  <a href="mailto:amit@terranovasourcing.in" className="btn btn--outline-light rounded-full !gap-3 !px-5">Email Amit <ArrowUpRight size={15} /></a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ═══ Primary CTA ═════════════════════════════════════ */}
      <section className="on-dark bg-charcoal text-ivory">
        <div className="frame grid-12 gap-y-10 py-24 md:py-32">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="ii">Start with a requirement</RunHead></Reveal></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-display"><SplitText text="Tell us what your project needs." /></h2>
            <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <p className="t-body measure">
                  You do not need to have the complete procurement plan ready. Start with one requirement and we will take it from there.
                </p>
              </Reveal>
              <Magnetic>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  data-cursor="Begin"
                  className="group flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-bronze text-sm text-ivory transition-colors duration-500 hover:bg-ivory hover:text-charcoal"
                >
                  <span className="flex items-center gap-2">Start a project <ArrowUpRight size={16} /></span>
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What you can approach us for — accordion ════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="iii">What you can approach us for</RunHead></Reveal></div>
          <h2 className="t-h1 col-span-12 md:col-span-9"><SplitText text="One requirement can be the beginning." /></h2>
        </div>
        <ol className="mt-16 border-t border-charcoal/16 md:mt-20">
          {approach.map((item, i) => {
            const isOpen = openRow === i;
            return (
              <li key={item.n} className="border-b border-charcoal/12">
                <button
                  type="button"
                  onClick={() => setOpenRow(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-12 items-baseline gap-x-4 py-7 text-left"
                >
                  <span className="numeral col-span-2 text-3xl text-bronze md:col-span-1">{item.n}</span>
                  <span className={`col-span-8 font-serif text-[clamp(1.8rem,3.4vw,3.2rem)] leading-none transition-all duration-500 md:col-span-10 ${isOpen ? "italic text-bronze" : "group-hover:translate-x-2"}`}>
                    {item.title}
                  </span>
                  <span className="col-span-2 flex justify-end md:col-span-1">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-45 border-bronze bg-bronze text-ivory" : "border-charcoal/20"}`}>
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.6, ease }}
                      className="overflow-hidden"
                    >
                      <p className="t-lead pb-8 pl-[16.66%] text-charcoal/70 md:pl-[8.33%]">{item.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ═══ Route + audiences ═══════════════════════════════ */}
      <section className="bg-paper">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="iv">From requirement to procurement</RunHead></Reveal></div>
            <div className="col-span-12 md:col-span-9">
              <Reveal><p className="t-h3 italic text-charcoal/75">The scope depends on what your project needs.</p></Reveal>
            </div>
          </div>
          <ProgressRail steps={route} className="mt-16 md:mt-20" />

          <div className="grid-12 mt-28 gap-y-8 md:mt-36">
            <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="v">Who we work with</RunHead></Reveal></div>
            <Stagger className="col-span-12 grid gap-5 md:col-span-9 md:grid-cols-3" gap={0.12}>
              {audiences.map((c) => (
                <article key={c.n} className="group flex h-full min-h-[18rem] flex-col justify-between bg-ivory p-8 transition-all duration-700 ease-luxury hover:-translate-y-2 hover:bg-charcoal hover:text-ivory">
                  <span className="numeral text-4xl text-bronze group-hover:text-sand">{c.n}</span>
                  <div>
                    <h3 className="t-h3">{c.title}</h3>
                    <p className="mt-3 text-[0.92rem] leading-[1.7] text-charcoal/65 transition-colors duration-500 group-hover:text-ivory/70">{c.body}</p>
                  </div>
                </article>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══════════════════════════════════════ */}
      <section className="frame spread text-center">
        <Reveal><p className="t-small text-bronze">Let&apos;s start with the requirement</p></Reveal>
        <ScrollWords
          text="We don't sell what we have. We source what the project needs."
          className="t-display mx-auto mt-10 max-w-6xl"
        />
        <Reveal><p className="t-lead mt-10 italic text-charcoal/65">Architecting Project Profits through Strategic Sourcing.</p></Reveal>
        <Magnetic className="mt-12">
          <button type="button" onClick={() => setOpen(true)} className="btn rounded-full !px-8">
            Start a project <ArrowUpRight size={16} />
          </button>
        </Magnetic>
      </section>

      <Footer cta={false} />

      {/* ═══ Enquiry drawer ══════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.5 }}
          >
            <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="enquiry-title"
              data-lenis-prevent
              className="absolute inset-y-0 right-0 w-full max-w-3xl overflow-y-auto bg-ivory"
              initial={{ x: reduce ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduce ? 0 : "100%" }}
              transition={{ duration: reduce ? 0 : 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="px-6 py-8 md:px-12 md:py-12">
                <div className="flex items-start justify-between gap-6 border-b border-charcoal/14 pb-8">
                  <div>
                    <p className="t-small text-bronze">Project enquiry</p>
                    <h2 id="enquiry-title" className="t-h1 mt-3">Tell us what you are working on.</h2>
                  </div>
                  <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close enquiry form" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-charcoal/20 transition-all duration-500 hover:rotate-90 hover:bg-charcoal hover:text-ivory">
                    <X size={18} />
                  </button>
                </div>

                <form id="contact-form" className="mt-10 space-y-14" aria-label="Project enquiry form">
                  {[
                    ["01", "About you"],
                    ["02", "About the project"],
                    ["03", "Project details"]
                  ].map(([n, title], idx) => (
                    <motion.fieldset
                      key={n}
                      initial={reduce ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease, delay: 0.3 + idx * 0.1 }}
                    >
                      <legend className="flex items-baseline gap-4">
                        <span className="numeral text-2xl text-bronze">{n}</span>
                        <span className="t-h3">{title}</span>
                      </legend>
                      {idx === 0 && (
                        <div className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                          <Field label="Name" name="name" />
                          <Field label="Company" name="company" />
                          <Field label="Designation" name="designation" />
                          <Field label="Email" name="email" type="email" />
                          <Field label="Mobile / WhatsApp" name="mobile" type="tel" />
                          <Field label="Project / Organisation" name="project" />
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                          <Field label="Project Location" name="location" />
                          <Field label="Approximate Quantity" name="quantity" />
                          <Field label="Product / Requirement" name="product" span />
                          <Field label="Expected Timeline" name="timeline" />
                          <label className="block">
                            <span className="field-label">Upload BOQ / Specification / Drawing / Reference</span>
                            <input name="upload" type="file" className="mt-3 block w-full text-sm text-charcoal/70 file:mr-4 file:cursor-pointer file:rounded-full file:border file:border-charcoal file:bg-transparent file:px-4 file:py-2 file:text-sm file:text-charcoal hover:file:bg-charcoal hover:file:text-ivory" />
                          </label>
                        </div>
                      )}
                      {idx === 2 && (
                        <label className="mt-6 block">
                          <span className="field-label">Tell Us About Your Requirement</span>
                          <textarea name="requirement" rows={5} className="field" />
                        </label>
                      )}
                    </motion.fieldset>
                  ))}

                  <div className="flex justify-end border-t border-charcoal/14 pt-8">
                    <button form="contact-form" type="submit" className="btn rounded-full !px-7">
                      Submit requirement <ArrowUpRight size={16} />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
