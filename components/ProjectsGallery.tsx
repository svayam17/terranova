"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { ease } from "@/components/motion";

/** Filterable project gallery — categories come from the project data. */
export default function ProjectsGallery() {
  const reduce = useReducedMotion();
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <LayoutGroup>
      <div className="flex flex-wrap gap-2 border-b border-charcoal/12 pb-8" role="tablist" aria-label="Filter projects by category">
        {categories.map((c) => {
          const active = c === filter;
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(c)}
              className={`relative rounded-full px-5 py-2.5 text-[0.85rem] transition-colors duration-300 ${
                active ? "text-ivory" : "text-charcoal/70 hover:text-charcoal"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-charcoal"
                  transition={{ duration: reduce ? 0 : 0.5, ease }}
                />
              )}
              {!active && <span className="absolute inset-0 rounded-full border border-charcoal/15" />}
              <span className="relative">
                {c} <span className={`numeral ml-1 ${active ? "text-sand" : "text-bronze"}`}>{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((project, i) => (
            <motion.article
              key={project.slug}
              layout
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: reduce ? 0 : 0.7, ease, delay: reduce ? 0 : (i % 6) * 0.05 }}
              className={i % 3 === 1 ? "lg:mt-20" : ""}
            >
              <Link href={`/projects/${project.slug}`} data-cursor="View" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={project.image}
                    alt={`${project.name} project`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.6s] ease-luxury group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.72rem] text-charcoal backdrop-blur">
                    {project.productUsed}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-ivory text-charcoal opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-charcoal/12 pt-4">
                  <h2 className="t-h3 transition-colors duration-500 group-hover:text-bronze">{project.name}</h2>
                  <span className="numeral text-lg text-bronze">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
                </div>
                {project.location ? <p className="t-small mt-2 text-charcoal/60">{project.location}</p> : null}
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
