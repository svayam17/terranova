import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-14 text-ivory md:px-12 lg:px-16">
      <div className="grid gap-12 md:grid-cols-[1fr_auto_auto_auto]">
        <div>
          <Link href="/" className="font-serif text-4xl tracking-[0.08em]">
            Terra Nova
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-ivory/52">
            Global luxury sourcing studio for wood flooring, decking, cladding,
            and bespoke architectural surfaces.
          </p>
        </div>
        <div className="grid gap-4 text-[11px] uppercase tracking-[0.22em] text-ivory/62">
          <Link href="/about-us" className="transition-colors hover:text-ivory">
            About Us
          </Link>
          <Link href="/services" className="transition-colors hover:text-ivory">
            Services
          </Link>
          <Link href="/products" className="transition-colors hover:text-ivory">
            Products
          </Link>
          <Link href="/projects" className="transition-colors hover:text-ivory">
            Projects
          </Link>
        </div>
        <div className="grid gap-4 text-[11px] uppercase tracking-[0.22em] text-ivory/62">
          <Link href="/contact-us" className="transition-colors hover:text-ivory">
            Contact Us
          </Link>
          <Link href="/testimonials-blog" className="transition-colors hover:text-ivory">
            Testimonials / Blog
          </Link>
          <a href="mailto:amit@gswoods.com" className="transition-colors hover:text-ivory">
            amit@gswoods.com
          </a>
          <a href="tel:+919867185966" className="transition-colors hover:text-ivory">
            +91 98671 85966
          </a>
        </div>
        <div className="grid gap-4 text-[11px] uppercase tracking-[0.22em] text-ivory/62">
          <a href="#" className="transition-colors hover:text-ivory">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-ivory">
            LinkedIn
          </a>
        </div>
      </div>
      <p className="mt-16 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.24em] text-ivory/38">
        Copyright 2026 Terra Nova. All rights reserved.
      </p>
    </footer>
  );
}
