"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!progressRef.current) return;
  }, []);

  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);

  // Open form when URL contains ?open=1
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("open") === "1") setOpen(true);
    } catch (e) {
      // ignore
    }
  }, []);

  const fade = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.6, ease: [0.2, 0.1, 0.1, 1] } },
  };

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      {/* HERO */}
      <section className="px-5 pt-12 pb-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <motion.div initial="initial" animate="animate" variants={fade}>
            <p className="mb-4 text-[12px] uppercase tracking-[0.28em] text-bronze">CONTACT</p>
            <h1 className="max-w-3xl font-serif text-[clamp(3rem,6.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.02em]">
              Start With Your Project
              <br />
              Requirement.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal/80">Every project begins with a requirement.</p>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-charcoal/70">Share a product requirement, project brief, BOQ, drawing, specification or simply an idea. We will evaluate the appropriate sourcing and procurement route.</p>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0, transition: { duration: shouldReduce ? 0 : 0.6, delay: 0.08 } }} className="flex justify-end">
            <div className="ml-6 pl-6 max-w-xs" style={{ borderLeft: "1px solid rgba(17,17,17,0.08)" }}>
              <div className="mb-4">
                <p className="mb-1 text-[12px] uppercase tracking-[0.18em] text-stone">02 — DIRECT CONTACT</p>
                <div className="mt-3 rounded-sm border border-charcoal/6 bg-ivory p-4">
                  <p className="text-lg font-medium">Amit Mehta</p>
                  <p className="mt-1 text-[15px] text-charcoal/70">Director</p>
                  <p className="mt-4 text-[15px]"><a href="tel:+919867185966" className="text-charcoal hover:text-bronze">+91 98671 85966</a></p>
                  <p className="mt-1 text-[15px]"><a href="mailto:amit@terranovasourcing.in" className="text-charcoal hover:text-bronze">amit@terranovasourcing.in</a></p>
                  <p className="mt-3 text-[15px]">TerraNova Finishing Materials Pvt. Ltd.</p>

                  <div className="mt-4 flex gap-3">
                    <a href="tel:+919867185966" className="inline-flex items-center gap-2 border border-charcoal px-4 py-2 text-[12px] uppercase tracking-[0.12em] hover:bg-charcoal hover:text-ivory transition">CALL AMIT →</a>
                    <a href="mailto:amit@terranovasourcing.in" className="inline-flex items-center gap-2 border border-charcoal px-4 py-2 text-[12px] uppercase tracking-[0.12em] hover:bg-charcoal hover:text-ivory transition">EMAIL AMIT →</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* PRIMARY CTA */}
      <section className="px-5 py-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="initial" animate="animate" variants={fade}>
            <p className="mb-4 text-[12px] uppercase tracking-[0.28em] text-bronze">START WITH A REQUIREMENT</p>
            <h2 className="max-w-lg font-serif text-[clamp(2rem,3.8vw,2.8rem)] font-medium leading-[0.95]">Tell us what your project needs.</h2>
            <p className="mt-4 max-w-md text-lg leading-8 text-charcoal/80">You do not need to have the complete procurement plan ready. Start with one requirement and we will take it from there.</p>

            <div className="mt-8">
              <button onClick={openForm} className="inline-flex items-center gap-3 border border-charcoal px-8 py-4 text-[13px] uppercase tracking-[0.18em] hover:bg-charcoal hover:text-ivory transition">
                START A PROJECT →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU CAN APPROACH US FOR */}
      <section className="px-5 py-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.p className="mb-6 text-[12px] uppercase tracking-[0.28em] text-bronze" {...fade}>WHAT YOU CAN APPROACH US FOR</motion.p>
          <motion.h3 className="font-serif text-[clamp(2.3rem,4.6vw,3.5rem)] font-medium">One requirement can be the beginning.</motion.h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "01", title: "A SPECIFIC PRODUCT", body: "Flooring, carpet, decking, wall finish or another finishing material." },
              { n: "02", title: "A PROJECT REQUIREMENT", body: "One or multiple finishing material requirements for a project." },
              { n: "03", title: "A CUSTOM REQUIREMENT", body: "A product that needs to be developed, customised or OEM manufactured." },
              { n: "04", title: "INTERNATIONAL SOURCING", body: "A product to be sourced from a specific country or international market." },
              { n: "05", title: "COMPLETE PROCUREMENT", body: "Support from sourcing and manufacturing through import, supply and execution." },
            ].map((item, i) => (
              <motion.div key={item.n} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: shouldReduce ? 0 : 0.6, delay: i * 0.06 }} className="py-4">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-[2rem] text-bronze">{item.n}</span>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.12em] text-stone">{item.title}</p>
                    <p className="mt-2 text-[15px] leading-7 text-charcoal/70">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCUREMENT JOURNEY */}
      <section className="px-5 py-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-bronze">FROM REQUIREMENT TO PROCUREMENT</p>
          <motion.div className="flex items-center gap-4 text-[15px] text-charcoal/80 overflow-x-auto" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: shouldReduce ? 0 : 0.6 }}>
            {[
              "Requirement",
              "Sourcing",
              "Manufacturing",
              "Quality",
              "Import",
              "Supply",
              "Execution",
            ].map((s, idx, arr) => (
              <span key={s} className="flex items-center gap-3">
                <span>{s}</span>
                {idx < arr.length - 1 && <span className="text-bronze">→</span>}
              </span>
            ))}
          </motion.div>
          <p className="mt-4 text-sm text-charcoal/70">The scope depends on what your project needs.</p>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="px-5 py-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-bronze">WHO WE WORK WITH</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", title: "ARCHITECTS & DESIGNERS", body: "Design intent, references, finishes, materials and specifications." },
              { n: "02", title: "DEVELOPERS & PROJECT OWNERS", body: "BOQs, quantities, commercial objectives and procurement requirements." },
              { n: "03", title: "PMCS & PROJECT TEAMS", body: "Technical specifications, quality requirements and project parameters." },
            ].map((c, i) => (
              <motion.div key={c.n} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: shouldReduce ? 0 : 0.6, delay: i * 0.06 }} className="flex">
                <div className="pr-6" style={{ borderRight: i < 2 ? "1px solid rgba(17,17,17,0.06)" : "none" }}>
                  <span className="font-serif text-[2rem] text-bronze">{c.n}</span>
                </div>
                <div className="pl-6">
                  <p className="text-[15px] font-semibold">{c.title}</p>
                  <p className="mt-2 text-[15px] leading-7 text-charcoal/70">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Removed duplicate contact & procurement block to keep page concise */}

      {/* FINAL CTA */}
      <section className="bg-sand/20 px-5 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-2 text-[12px] uppercase tracking-[0.28em] text-bronze">LET&apos;S START WITH THE REQUIREMENT</p>
          <p className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05]">We don&apos;t sell what we have.<br />We source what the project needs.</p>
          <p className="mt-4 text-[15px] leading-7 text-charcoal/70">Architecting Project Profits through Strategic Sourcing.</p>
          <div className="mt-6">
            <button onClick={openForm} className="inline-flex items-center gap-3 border border-charcoal px-8 py-4 text-[13px] uppercase tracking-[0.18em] hover:bg-charcoal hover:text-ivory transition">START A PROJECT →</button>
          </div>
        </div>
      </section>

      <Footer />

      {/* SCROLL PROGRESS (subtle) */}
      <div ref={progressRef} className="hidden md:block fixed right-6 top-24 h-[60vh] w-[3px] bg-transparent">
        <motion.div style={{ scaleY: scrollYProgress }} className="origin-top h-full w-full bg-amber-300/50 rounded" />
      </div>

      {/* MODAL / FORM POPUP */}
      {open && (
        <div className="fixed inset-0 z-50">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ duration: shouldReduce ? 0 : 0.35 }} className="absolute inset-0 bg-black" onClick={closeForm} />

          <motion.dialog
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: shouldReduce ? 0 : 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div className="w-full max-w-3xl max-h-[90vh] overflow-auto bg-ivory border border-charcoal/8 shadow-lg">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">PROJECT ENQUIRY</p>
                    <p className="mt-2 text-sm text-charcoal/70">Tell us what you are working on.</p>
                  </div>
                  <button onClick={closeForm} aria-label="Close enquiry form" className="text-sm">CLOSE ×</button>
                </div>

                <form id="contact-form" className="mt-6 space-y-6" aria-label="Project enquiry form">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone">01</p>
                    <h4 className="font-serif text-2xl mt-2">ABOUT YOU</h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Name</span>
                        <input name="name" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Company</span>
                        <input name="company" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Designation</span>
                        <input name="designation" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Email</span>
                        <input name="email" type="email" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Mobile / WhatsApp</span>
                        <input name="mobile" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Project / Organisation</span>
                        <input name="project" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone">02</p>
                    <h4 className="font-serif text-2xl mt-2">ABOUT THE PROJECT</h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Project Location</span>
                        <input name="location" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Approximate Quantity</span>
                        <input name="quantity" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                    </div>

                    <div className="mt-4">
                      <label>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Product / Requirement</span>
                        <input name="product" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                      </label>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <label>
                          <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Expected Timeline</span>
                          <input name="timeline" className="mt-2 w-full border-b border-charcoal/12 bg-transparent py-3 text-lg outline-none focus:border-bronze transition" />
                        </label>
                        <label>
                          <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Upload BOQ / Specification / Drawing / Reference</span>
                          <input name="upload" type="file" className="mt-2 w-full text-sm text-charcoal" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone">03</p>
                    <h4 className="font-serif text-2xl mt-2">PROJECT DETAILS</h4>
                    <label className="mt-4 block">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-stone">Tell Us About Your Requirement</span>
                      <textarea name="requirement" rows={6} className="mt-2 w-full resize-none border border-charcoal/12 bg-transparent px-3 py-3 text-lg outline-none focus:border-bronze h-[150px] transition" />
                    </label>
                  </div>

                  <div className="pt-4 border-t border-charcoal/10">
                    <div className="flex justify-end">
                      <button form="contact-form" type="submit" className="inline-flex items-center gap-2 border border-charcoal px-6 py-3 text-[11px] uppercase tracking-[0.18em] hover:bg-charcoal hover:text-ivory transition">SUBMIT REQUIREMENT →</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.dialog>
        </div>
      )}
    </main>
  );
}
