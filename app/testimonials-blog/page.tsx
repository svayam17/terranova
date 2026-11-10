import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { RunHead } from "@/components/Editorial";
import { Magnetic, Marquee, Reveal, SplitText } from "@/components/motion";

export const metadata = {
  title: "Testimonials & Blog | Terra Nova",
  description: "Client testimonials and insights from Terra Nova's global luxury sourcing studio."
};

export default function TestimonialsBlogPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <PageHero
        label="Testimonials & Blog"
        lines={["Stories, insights,", "and client experiences."]}
        aside={
          <p className="t-lead text-charcoal/75">
            Perspectives from our projects, sourcing journeys, and the clients who trust us with their material decisions.
          </p>
        }
      />

      <div className="border-y border-charcoal/12 py-8">
        <Marquee
          items={["Coming soon", "Stories", "Insights", "Client experiences"]}
          speed={30}
          itemClassName="font-serif text-[clamp(2.6rem,6vw,5.6rem)] italic leading-none"
          altClassName="t-outline not-italic"
        />
      </div>

      <section className="frame spread">
        <div className="relative overflow-hidden bg-charcoal p-8 text-ivory on-dark md:p-16">
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-bronze/25 blur-3xl" aria-hidden="true" />
          <div className="relative grid-12 gap-y-10">
            <div className="col-span-12 md:col-span-3"><Reveal><RunHead n="ii">Coming soon</RunHead></Reveal></div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="t-h1"><SplitText text="Testimonials and blog content is being prepared." /></h2>
              <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <Reveal>
                  <p className="t-body measure">
                    We are finalising the content for this section. Please check back soon or contact us directly to learn more about our work and client experiences.
                  </p>
                </Reveal>
                <Magnetic>
                  <Link href="/contact-us" className="btn btn--light rounded-full !px-7">
                    Contact Us <ArrowUpRight size={16} />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
