"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";

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
  const reduce = useReducedMotion();
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
        <RunHead n="i">Contact</RunHead>
        <div className="grid-12 mt-10 gap-y-14">
          <div className="col-span-12 md:col-span-8">
            <h1 className="t-display">
              <span className="reveal-line"><span>Start With Your Project</span></span>
              <span className="reveal-line"><span>Requirement.</span></span>
            </h1>
            <p className="reveal-fade t-lead mt-10 text-charcoal/80">Every project begins with a requirement.</p>
            <p className="reveal-fade t-body measure mt-4">
              Share a product requirement, project brief, BOQ, drawing, specification or simply an idea. We will evaluate the appropriate sourcing and procurement route.
            </p>
          </div>

          <aside className="reveal-fade col-span-12 self-end md:col-span-4">
            <RunHead n="02">Direct contact</RunHead>
            <div className="mt-6 border-t border-charcoal/16 pt-6">
              <p className="t-h2">Amit Mehta</p>
              <p className="t-small mt-2 text-charcoal/60">Director</p>
              <div className="mt-6 space-y-2 text-[0.95rem]">
                <p><a href="tel:+919867185966" className="link-u">+91 98671 85966</a></p>
                <p><a href="mailto:amit@terranovasourcing.in" className="link-u">amit@terranovasourcing.in</a></p>
              </div>
              <p className="t-small mt-6 text-charcoal/60">TerraNova Finishing Materials Pvt. Ltd.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <a href="tel:+919867185966" className="btn btn--ghost !gap-3 !px-4">Call Amit <ArrowUpRight size={15} /></a>
                <a href="mailto:amit@terranovasourcing.in" className="btn btn--ghost !gap-3 !px-4">Email Amit <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ═══ Primary CTA ═════════════════════════════════════ */}
      <section className="bg-charcoal text-ivory on-dark">
        <div className="frame grid-12 gap-y-10 py-20 md:py-28">
          <div className="col-span-12 md:col-span-3"><RunHead n="ii">Start with a requirement</RunHead></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1">Tell us what your project needs.</h2>
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="t-body measure">
                You do not need to have the complete procurement plan ready. Start with one requirement and we will take it from there.
              </p>
              <button type="button" onClick={() => setOpen(true)} className="btn btn--light w-fit shrink-0">
                Start a project <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What you can approach us for ════════════════════ */}
      <section className="frame spread">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3"><RunHead n="iii">What you can approach us for</RunHead></div>
          <h2 className="t-h1 col-span-12 md:col-span-9">One requirement can be the beginning.</h2>
        </div>
        <ol className="mt-16 border-t border-charcoal/16 md:mt-20">
          {approach.map((item) => (
            <li key={item.n} className="grid-12 items-baseline gap-y-2 border-b border-charcoal/12 py-7">
              <span className="numeral col-span-2 text-3xl text-bronze md:col-span-1 md:col-start-4">{item.n}</span>
              <h3 className="t-h3 col-span-10 md:col-span-4">{item.title}</h3>
              <p className="t-body col-span-12 md:col-span-4">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══ Route + audiences ═══════════════════════════════ */}
      <section className="bg-paper">
        <div className="frame spread">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 md:col-span-3"><RunHead n="iv">From requirement to procurement</RunHead></div>
            <div className="col-span-12 md:col-span-9">
              <ol className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[clamp(1.6rem,3.2vw,3rem)] leading-tight">
                {route.map((s, idx) => (
                  <li key={s} className="flex items-baseline gap-4">
                    {s}
                    {idx < route.length - 1 && <span aria-hidden="true" className="text-bronze">/</span>}
                  </li>
                ))}
              </ol>
              <p className="t-body mt-6">The scope depends on what your project needs.</p>
            </div>
          </div>

          <div className="grid-12 mt-24 gap-y-8 md:mt-32">
            <div className="col-span-12 md:col-span-3"><RunHead n="v">Who we work with</RunHead></div>
            <ol className="col-span-12 grid gap-10 border-t border-charcoal/16 pt-10 md:col-span-9 md:grid-cols-3">
              {audiences.map((c) => (
                <li key={c.n}>
                  <span className="numeral text-3xl text-bronze">{c.n}</span>
                  <h3 className="t-h3 mt-4">{c.title}</h3>
                  <p className="t-body mt-3">{c.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══════════════════════════════════════ */}
      <section className="frame spread text-center">
        <p className="t-small text-bronze">Let&apos;s start with the requirement</p>
        <p className="t-h1 mx-auto mt-8 max-w-5xl">
          We don&apos;t sell what we have.
          <span className="block">We source what the project needs.</span>
        </p>
        <p className="t-lead mt-8 italic text-charcoal/65">Architecting Project Profits through Strategic Sourcing.</p>
        <button type="button" onClick={() => setOpen(true)} className="btn mx-auto mt-12">
          Start a project <ArrowUpRight size={16} />
        </button>
      </section>

      <Footer />

      {/* ═══ Enquiry form ════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4 }}
          >
            <div className="absolute inset-0 bg-charcoal/55" onClick={() => setOpen(false)} />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="enquiry-title"
              className="absolute inset-y-0 right-0 w-full max-w-3xl overflow-y-auto bg-ivory"
              initial={{ x: reduce ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduce ? 0 : "100%" }}
              transition={{ duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-6 py-8 md:px-12 md:py-12">
                <div className="flex items-start justify-between gap-6 border-b border-charcoal/14 pb-8">
                  <div>
                    <p className="t-small text-bronze">Project enquiry</p>
                    <h2 id="enquiry-title" className="t-h2 mt-3">Tell us what you are working on.</h2>
                  </div>
                  <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close enquiry form" className="flex items-center gap-2 text-sm text-charcoal/70 hover:text-charcoal">
                    Close <X size={16} />
                  </button>
                </div>

                <form id="contact-form" className="mt-10 space-y-14" aria-label="Project enquiry form">
                  <fieldset>
                    <legend className="flex items-baseline gap-4">
                      <span className="numeral text-2xl text-bronze">01</span>
                      <span className="t-h3">About you</span>
                    </legend>
                    <div className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                      <Field label="Name" name="name" />
                      <Field label="Company" name="company" />
                      <Field label="Designation" name="designation" />
                      <Field label="Email" name="email" type="email" />
                      <Field label="Mobile / WhatsApp" name="mobile" type="tel" />
                      <Field label="Project / Organisation" name="project" />
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="flex items-baseline gap-4">
                      <span className="numeral text-2xl text-bronze">02</span>
                      <span className="t-h3">About the project</span>
                    </legend>
                    <div className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                      <Field label="Project Location" name="location" />
                      <Field label="Approximate Quantity" name="quantity" />
                      <Field label="Product / Requirement" name="product" span />
                      <Field label="Expected Timeline" name="timeline" />
                      <label className="block">
                        <span className="field-label">Upload BOQ / Specification / Drawing / Reference</span>
                        <input name="upload" type="file" className="mt-3 block w-full text-sm text-charcoal/70 file:mr-4 file:cursor-pointer file:border file:border-charcoal file:bg-transparent file:px-4 file:py-2 file:text-sm file:text-charcoal hover:file:bg-charcoal hover:file:text-ivory" />
                      </label>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="flex items-baseline gap-4">
                      <span className="numeral text-2xl text-bronze">03</span>
                      <span className="t-h3">Project details</span>
                    </legend>
                    <label className="mt-6 block">
                      <span className="field-label">Tell Us About Your Requirement</span>
                      <textarea name="requirement" rows={5} className="field" />
                    </label>
                  </fieldset>

                  <div className="flex justify-end border-t border-charcoal/14 pt-8">
                    <button form="contact-form" type="submit" className="btn">
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
