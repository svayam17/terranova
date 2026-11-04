import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Terra Nova",
  description:
    "Explore Terra Nova project references across hospitality, residential, commercial, resort, and real estate spaces."
};

/* Three staggered columns: the middle column drops, like a picture spread. */
const plates = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[1/1]", "aspect-[3/4]", "aspect-[4/5]"];

export default function ProjectsPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <section className="frame pb-16 pt-10 md:pb-20 md:pt-16">
        <h1 className="t-display">
          <span className="reveal-line"><span>Projects</span></span>
        </h1>
      </section>

      <section className="frame pb-24 md:pb-36">
        <div className="grid gap-x-8 gap-y-16 border-t border-charcoal/14 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article key={project.slug} className={i % 3 === 1 ? "lg:translate-y-24" : ""}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className={`plate ${plates[i % plates.length]}`}>
                  <Image
                    src={project.image}
                    alt={`${project.name} project`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="caption">
                  <span className="numeral text-base text-bronze">{String(i + 1).padStart(2, "0")}</span>
                  <span>{project.productUsed}</span>
                </div>
                <h2 className="t-h3 mt-3 transition-colors duration-500 group-hover:text-bronze">{project.name}</h2>
                {project.location ? <p className="t-small mt-2 text-charcoal/60">{project.location}</p> : null}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
