import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RunHead } from "@/components/Editorial";

export const metadata = {
  title: "Testimonials & Blog | Terra Nova",
  description: "Client testimonials and insights from Terra Nova's global luxury sourcing studio."
};

export default function TestimonialsBlogPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <section className="frame pb-20 pt-10 md:pb-28 md:pt-16">
        <RunHead n="i">Testimonials & Blog</RunHead>
        <h1 className="t-display mt-10 max-w-6xl">
          <span className="reveal-line"><span>Stories, insights,</span></span>
          <span className="reveal-line md:pl-[16.66%]"><span>and client experiences.</span></span>
        </h1>
        <div className="grid-12 mt-12">
          <p className="reveal-fade t-lead col-span-12 text-charcoal/75 md:col-span-5 md:col-start-8">
            Perspectives from our projects, sourcing journeys, and the clients who trust us with their material decisions.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="frame grid-12 spread gap-y-10">
          <div className="col-span-12 md:col-span-3"><RunHead n="ii">Coming soon</RunHead></div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="t-h1">Testimonials and blog content is being prepared.</h2>
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="t-body measure">
                We are finalising the content for this section. Please check back soon or contact us directly to learn more about our work and client experiences.
              </p>
              <Link href="/contact-us" className="btn btn--ghost w-fit shrink-0">
                Contact Us <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
