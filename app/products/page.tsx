import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsGridClient from "@/components/ProductsGridClient";

export const metadata = {
  title: "Products | TerraNova",
  description: "Material collections and editorial catalogue for project-led sourcing.",
};

const sections = [
  {
    id: "flooring",
    number: "01",
    title: "FLOORING",
    sub: [
      {
        heading: "WOOD FLOORING",
        items: ["Engineered Wood Flooring", "Solid Wood Flooring", "Parquet Flooring", "Herringbone & Chevron", "Custom Wood Flooring"],
      },
      { heading: "VINYL & RESILIENT FLOORING", items: ["SPC Flooring", "LVT Flooring", "Vinyl Flooring"] },
      { heading: "LAMINATE FLOORING", items: ["Residential & Commercial Laminate", "Hospitality Laminate", "Project-Specific Laminate Solutions"] },
      { heading: "CARPET", items: ["Carpet Tiles", "Wall-to-Wall Carpet", "Hospitality Carpet", "Custom Printed Carpet", "Area Rugs", "Project-Specific Carpet Solutions"] },
    ],
  },
  {
    id: "outdoor",
    number: "02",
    title: "OUTDOOR FLOORING & DECKING",
    sub: [
      { items: ["WPC Decking", "Solid Wood Decking", "Thermowood Decking", "Outdoor Flooring", "Exterior Cladding", "Project-Specific Outdoor Solutions"] },
    ],
  },
  {
    id: "wall",
    number: "03",
    title: "WALL & ARCHITECTURAL FINISHES",
    sub: [
      { items: ["WPC Wall Panels", "Fluted Wall Panels", "Decorative Wall Panels", "Microcement", "Mosaics", "Pool Finishes", "Project-Specific Wall & Architectural Solutions"] },
    ],
  },
  {
    id: "architectural",
    number: "04",
    title: "ARCHITECTURAL & FINISHING MATERIALS",
    sub: [
      { items: ["Clay Roof Tiles", "Synthetic Thatch", "Natural Thatch & Natural Finishes", "Shingles", "Wooden Blinds", "Basins", "Bathtubs", "Stone Sculptures", "Architectural Elements"] },
    ],
  },
  {
    id: "custom",
    number: "05",
    title: "CUSTOM & PROJECT-SPECIFIC SOLUTIONS",
    sub: [
      { items: ["CUSTOM DESIGN", "CUSTOM FINISH", "CUSTOM DIMENSIONS", "MATERIAL SELECTION", "PRODUCT CONSTRUCTION", "PERFORMANCE REQUIREMENTS", "PROJECT QUANTITIES"] },
    ],
    note: "The product is selected around the project — not the project around the product.",
  },
];

export default function ProductsPage() {

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />

      <section className="px-5 pb-10 pt-10 md:px-12 lg:px-16">
        <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-bronze">ALL COLLECTIONS</p>
        <h1 className="max-w-5xl font-serif text-[clamp(2.4rem,5vw,3.6rem)] font-medium leading-[0.92]">Material collections for resolved spaces.</h1>
        <p className="mt-6 max-w-3xl text-sm text-charcoal/70">TerraNova works across a focused range of finishing-material categories, sourcing from specialised manufacturing partners across multiple countries. Our product approach is project-led: we evaluate specification, quantity, design and commercial objectives before identifying the right sourcing route.</p>
      </section>

      <section className="px-5 py-10 md:px-12 lg:px-16">
        <ProductsGridClient />

        <div className="mx-auto max-w-6xl px-5 md:px-12 lg:px-16">
          {/* ONE PROJECT. MULTIPLE POSSIBILITIES */}
          <section className="py-10 border-t border-charcoal/12">
            <h3 className="font-serif text-3xl">One Project. Multiple Possibilities.</h3>
            <p className="mt-4 max-w-3xl text-sm text-charcoal/70">A project may require one product or a combination of categories. TerraNova evaluates requirements across products, factories and countries to determine the most appropriate sourcing solution.</p>
            <div className="mt-6">
              <Link href="/contact-us?open=1" className="inline-flex items-center gap-3 border border-charcoal px-6 py-3 text-[13px] uppercase tracking-[0.12em] hover:bg-charcoal hover:text-ivory transition">TELL US WHAT THE PROJECT NEEDS → <ArrowRight size={14} /></Link>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
