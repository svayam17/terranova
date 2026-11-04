import Link from "next/link";

/** Colophon. The wordmark runs the full measure of the page. */
export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="frame pt-20 md:pt-28">
        <div className="grid-12 gap-y-12">
          <p className="col-span-12 max-w-xs font-serif text-[1.35rem] leading-snug text-ivory/70 md:col-span-5">
            Global luxury sourcing studio for wood flooring, decking, cladding,
            and bespoke architectural surfaces.
          </p>

          <nav aria-label="Footer" className="col-span-6 md:col-span-2 md:col-start-7">
            <ul className="space-y-3 text-sm text-ivory/60">
              <li><Link href="/about-us" className="transition-colors hover:text-ivory">About Us</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-ivory">Services</Link></li>
              <li><Link href="/products" className="transition-colors hover:text-ivory">Products</Link></li>
              <li><Link href="/projects" className="transition-colors hover:text-ivory">Projects</Link></li>
            </ul>
          </nav>

          <ul className="col-span-6 space-y-3 text-sm text-ivory/60 md:col-span-2">
            <li><Link href="/contact-us" className="transition-colors hover:text-ivory">Contact Us</Link></li>
            <li><Link href="/testimonials-blog" className="transition-colors hover:text-ivory">Testimonials / Blog</Link></li>
            <li><a href="#" className="transition-colors hover:text-ivory">Instagram</a></li>
            <li><a href="#" className="transition-colors hover:text-ivory">LinkedIn</a></li>
          </ul>

          <ul className="col-span-12 space-y-3 text-sm md:col-span-2">
            <li><a href="mailto:amit@gswoods.com" className="link-u text-ivory/80">amit@gswoods.com</a></li>
            <li><a href="tel:+919867185966" className="link-u text-ivory/80">+91 98671 85966</a></li>
          </ul>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 select-none whitespace-nowrap font-serif text-[clamp(4.5rem,18.5vw,19rem)] leading-[0.78] tracking-[-0.035em] text-ivory md:mt-28"
        >
          Terra Nova
        </p>

        <p className="mt-6 border-t border-ivory/12 py-7 text-xs text-ivory/40">
          Copyright 2026 Terra Nova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
