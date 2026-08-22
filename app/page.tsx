"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2, Send } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { collections, heroImage, projects } from "@/lib/content";

const fadeUp = {
  initial: { opacity: 0, y: 42 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 180]);
  const heroScale = useTransform(scrollY, [0, 900], [1.05, 1.18]);

  return (
    <main className="overflow-hidden bg-ivory text-charcoal">
      <section className="relative min-h-screen overflow-hidden bg-charcoal text-ivory">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <Image
            src={heroImage}
            alt="Refined architectural interior with stone and warm light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.76),rgba(17,17,17,0.22)_48%,rgba(17,17,17,0.52)),linear-gradient(180deg,rgba(17,17,17,0.15),rgba(17,17,17,0.76))]" />

        <nav className="relative z-10 flex flex-col gap-5 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
          <div className="flex items-center justify-between gap-6">
            <a href="#" className="font-serif text-2xl font-medium tracking-[0.08em] md:text-3xl">
              Terra Nova
            </a>
            <a
              className="text-[10px] uppercase tracking-[0.22em] text-ivory/70 md:hidden"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-ivory/78 md:flex">
            <Link className="transition-colors hover:text-ivory" href="/about">
              About
            </Link>
            <a className="transition-colors hover:text-ivory" href="#studio">
              Studio
            </a>
            <a className="transition-colors hover:text-ivory" href="#collections">
              Materials
            </a>
            <a className="transition-colors hover:text-ivory" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-ivory" href="#contact">
              Contact
            </a>
          </div>
          <div className="flex items-center justify-between gap-5 text-[10px] uppercase tracking-[0.2em] text-ivory/70 md:hidden">
            <Link href="/about">About</Link>
            <a href="#studio">Studio</a>
            <a href="#collections">Products</a>
            <a href="#projects">Projects</a>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-end px-5 pb-10 md:px-12 md:pb-16 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 52 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <p className="mb-5 max-w-xs text-[10px] uppercase leading-5 tracking-[0.26em] text-sand md:mb-7 md:max-w-none md:text-[11px]">
              Global luxury sourcing and materials studio
            </p>
            <h1 className="max-w-5xl font-serif text-[clamp(3.15rem,8.4vw,9.6rem)] font-medium leading-[0.86] tracking-normal">
              Global Craftsmanship.
              <span className="block">Curated for Timeless Spaces.</span>
            </h1>
            <div className="mt-9 flex max-w-3xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-base leading-8 text-ivory/78 md:text-lg">
                Premium wood flooring, decking, cladding, and bespoke sourcing
                solutions for hospitality, real estate, and luxury developments.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <a className="group inline-flex items-center justify-between gap-3 border border-ivory/80 px-5 py-4 text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ease-luxury hover:bg-ivory hover:text-charcoal md:px-6" href="#collections">
                  Explore Collections
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a className="group inline-flex items-center justify-between gap-3 border border-ivory/25 px-5 py-4 text-[11px] uppercase tracking-[0.2em] text-ivory/82 transition-all duration-500 ease-luxury hover:border-ivory hover:text-ivory md:px-6" href="#projects">
                  View Projects
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <motion.div {...fadeUp} className="mx-auto max-w-5xl text-center">
          <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-bronze">
            Material intelligence
          </p>
          <h2 className="font-serif text-[clamp(3.2rem,7vw,8.4rem)] font-medium leading-[0.9] tracking-normal">
            Materials shape atmosphere, emotion, and identity.
          </h2>
        </motion.div>
      </section>

      <section id="studio" className="px-5 pb-16 md:px-12 md:pb-28 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div {...fadeUp} className="relative min-h-[390px] overflow-hidden md:min-h-[620px]">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=88"
              alt="Luxury interior architectural detail"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover transition-transform duration-[1800ms] ease-luxury hover:scale-105"
            />
          </motion.div>
          <motion.div {...fadeUp} className="lg:pl-16">
            <p className="mb-7 text-[11px] uppercase tracking-[0.28em] text-bronze">
              About Terra Nova
            </p>
            <h2 className="max-w-3xl font-serif text-[clamp(3rem,5vw,6.8rem)] font-medium leading-[0.92] tracking-normal">
              A quiet studio for exceptional material decisions.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-charcoal/64">
              Terra Nova evolves the GS Woods legacy into a quieter, more
              architectural studio for premium wood floors, exterior decking,
              cladding, and custom material programs across residential,
              hospitality, commercial, co-working, and distribution projects.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-charcoal/12 md:grid-cols-4">
              {["20+ Years Trade", "13+ Countries", "2016 Incorporated", "Project Solutions"].map(
                (stat) => (
                  <div key={stat} className="bg-ivory p-6">
                    <p className="font-serif text-3xl leading-none text-charcoal">
                      {stat.split(" ")[0]}
                    </p>
                    <p className="mt-4 text-[11px] uppercase leading-5 tracking-[0.18em] text-stone">
                      {stat.replace(`${stat.split(" ")[0]} `, "")}
                    </p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="collections" className="bg-sand/38 px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <motion.div {...fadeUp} className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
              Material collections
            </p>
            <h2 className="max-w-4xl font-serif text-[clamp(3.4rem,6vw,7.4rem)] font-medium leading-[0.9] tracking-normal">
              Surfaces selected for atmosphere.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-charcoal/60">
            A restrained library drawn from GS Woods expertise in flooring,
            decking, cladding, curved outdoor systems, and project-grade surfaces.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {collections.slice(0, 5).map((collection) => (
            <motion.div
              key={collection.name}
              {...fadeUp}
              className="group relative min-h-[390px] overflow-hidden bg-charcoal text-left sm:min-h-[430px] xl:min-h-[520px]"
            >
              <Link
                href={`/products/${collection.slug}`}
                className="absolute inset-0"
              >
                <Image
                  src={collection.image}
                  alt={`${collection.name} material atmosphere`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-[0.88] transition-transform duration-[1800ms] ease-luxury group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 md:p-9">
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.26em] text-sand">
                      Collection
                    </p>
                    <h3 className="font-serif text-4xl font-medium text-ivory md:text-5xl">
                      {collection.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="text-ivory/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="group relative isolate inline-flex items-center gap-3 overflow-hidden border border-charcoal px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-all duration-700 ease-luxury before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-charcoal before:transition-transform before:duration-700 before:ease-luxury hover:-translate-y-0.5 hover:text-ivory hover:before:scale-x-100"
          >
            View All Collections
            <ArrowUpRight size={15} className="transition-transform duration-700 ease-luxury group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </section>

      <section id="projects" className="px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <motion.div {...fadeUp} className="mb-10 max-w-5xl">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
            Featured projects
          </p>
          <h2 className="font-serif text-[clamp(3.4rem,7vw,8rem)] font-medium leading-[0.9] tracking-normal">
            Immersive spaces, resolved through material restraint.
          </h2>
        </motion.div>
        <div className="columns-1 gap-7 md:columns-2 xl:columns-3">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.name}
              {...fadeUp}
              className="group mb-10 break-inside-avoid text-left"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className={`relative overflow-hidden bg-sand ${
                  index % 4 === 0
                    ? "h-[460px] md:h-[640px]"
                    : index % 4 === 1
                      ? "h-[380px] md:h-[500px]"
                      : "h-[420px] md:h-[560px]"
                }`}>
                  <Image
                    src={project.image}
                    alt={`${project.name} architectural project`}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover transition-transform duration-[1800ms] ease-luxury group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 border-t border-charcoal/12 pt-5">
                  <h3 className="font-serif text-3xl font-medium md:text-4xl">
                    {project.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group relative isolate inline-flex items-center gap-3 overflow-hidden border border-charcoal px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-all duration-700 ease-luxury before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-charcoal before:transition-transform before:duration-700 before:ease-luxury hover:-translate-y-0.5 hover:text-ivory hover:before:scale-x-100"
          >
            View All Projects
            <ArrowUpRight size={15} className="transition-transform duration-700 ease-luxury group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-charcoal px-5 py-16 text-ivory md:px-12 md:py-28 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(166,124,82,0.22),transparent_38%)]" />
        <div className="relative grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-sand">
              <Globe2 size={16} />
              Global sourcing
            </p>
            <h2 className="font-serif text-[clamp(3.2rem,5.8vw,7.2rem)] font-medium leading-[0.9] tracking-normal">
              Built on 20+ years of international trade across 13+ countries.
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-ivory/62">
              Terra Nova carries forward the GS Woods sourcing network with a more
              curated lens: dependable supply, OEM collaboration, responsible timber
              selection, and precise material systems for architects and project
              clients.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="relative min-h-[460px]">
            <svg viewBox="0 0 900 520" className="h-full min-h-[460px] w-full">
              <path d="M92 245C151 184 205 160 282 176C350 190 364 127 437 137C514 148 554 207 641 172C720 140 769 176 817 231" fill="none" stroke="rgba(245,241,235,0.14)" strokeWidth="1" />
              <path d="M152 330C241 281 318 322 400 291C474 263 505 309 584 293C662 278 702 326 790 307" fill="none" stroke="rgba(245,241,235,0.12)" strokeWidth="1" />
              <path className="map-line" d="M166 264C312 153 469 163 725 252" fill="none" stroke="#A67C52" strokeWidth="1.4" />
              <path className="map-line" d="M228 330C384 231 523 246 760 185" fill="none" stroke="#D9CFC2" strokeWidth="1.1" />
              <path className="map-line" d="M126 210C279 305 487 357 814 297" fill="none" stroke="#8B8B8B" strokeWidth="1" />
              {[
                [166, 264],
                [312, 153],
                [469, 163],
                [725, 252],
                [228, 330],
                [760, 185],
                [814, 297]
              ].map(([cx, cy]) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="4" fill="#F5F1EB" />
                  <circle cx={cx} cy={cy} r="16" fill="none" stroke="rgba(166,124,82,0.34)" />
                </g>
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <p className="mb-9 text-[11px] uppercase tracking-[0.28em] text-bronze">
            Material philosophy
          </p>
          <blockquote className="font-serif text-[clamp(3.4rem,7vw,8.2rem)] font-medium leading-[0.9] tracking-normal">
            Luxury is found where performance, timber character, timeless detailing,
            and intelligent craftsmanship resolve into one quiet surface.
          </blockquote>
        </motion.div>
      </section>

      <section id="contact" className="bg-sand/40 px-5 py-16 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div {...fadeUp}>
            <p className="mb-7 text-[11px] uppercase tracking-[0.28em] text-bronze">
              Contact
            </p>
            <h2 className="font-serif text-[clamp(3.4rem,6vw,7.2rem)] font-medium leading-[0.9] tracking-normal">
              Discuss Your Project
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-charcoal/62">
              Share the location, flooring or decking intent, and development context.
              The studio will respond with a considered next step.
            </p>
          </motion.div>
          <motion.form {...fadeUp} className="grid gap-6">
            {["Name", "Email", "Project Location"].map((label) => (
              <label key={label} className="block">
                <span className="text-[10px] uppercase tracking-[0.24em] text-stone">
                  {label}
                </span>
                <input className="mt-3 w-full border-0 border-b border-charcoal/22 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-bronze" />
              </label>
            ))}
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.24em] text-stone">
                Material Intent
              </span>
              <textarea rows={4} className="mt-3 w-full resize-none border-0 border-b border-charcoal/22 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-bronze" />
            </label>
            <button className="mt-4 inline-flex w-fit items-center gap-3 border border-charcoal px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-all duration-500 ease-luxury hover:bg-charcoal hover:text-ivory">
              Send Inquiry
              <Send size={15} />
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="bg-charcoal px-5 py-14 text-ivory md:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto_auto]">
          <div>
            <p className="font-serif text-4xl tracking-[0.08em]">Terra Nova</p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-ivory/52">
              Global luxury sourcing studio for wood flooring, decking, cladding,
              and bespoke architectural surfaces.
            </p>
          </div>
          <div className="grid gap-4 text-[11px] uppercase tracking-[0.22em] text-ivory/62">
            <a href="#studio">Studio</a>
            <a href="#collections">Materials</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="grid gap-4 text-[11px] uppercase tracking-[0.22em] text-ivory/62">
            <a href="mailto:amit@gswoods.com">amit@gswoods.com</a>
            <a href="tel:+919867185966">+91 98671 85966</a>
          </div>
          <div className="grid gap-4 text-[11px] uppercase tracking-[0.22em] text-ivory/62">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <p className="mt-16 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.24em] text-ivory/38">
          Copyright 2026 Terra Nova. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
