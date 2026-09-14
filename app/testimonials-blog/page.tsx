import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Testimonials & Blog | Terra Nova",
  description:
    "Client testimonials and insights from Terra Nova's global luxury sourcing studio."
};

export default function TestimonialsBlogPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <section className="px-5 pb-14 pt-10 md:px-12 md:pb-20 md:pt-16 lg:px-16">
        <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">
          Testimonials & Blog
        </p>
        <h1 className="max-w-5xl font-serif text-[clamp(4rem,8vw,9rem)] font-medium leading-[0.86] tracking-[-0.04em] text-charcoal">
          Stories, insights, and client experiences.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-charcoal/68 md:text-lg">
          Perspectives from our projects, sourcing journeys, and the clients who trust us with their material decisions.
        </p>
      </section>

      <section className="px-5 pb-20 md:px-12 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="border border-charcoal/12 bg-sand/30 p-10 md:p-14">
            <p className="text-[11px] uppercase tracking-[0.24em] text-bronze">
              Coming soon
            </p>
            <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2.6rem,5vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.03em] text-charcoal">
              Testimonials and blog content is being prepared.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-charcoal/60">
              We are finalising the content for this section. Please check back soon or contact us directly to learn more about our work and client experiences.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
