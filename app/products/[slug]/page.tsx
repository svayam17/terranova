import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryDetailClient from "@/components/CategoryDetailClient";
import { collections } from "@/lib/content";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) return {};
  return {
    title: `${collection.name} | Terra Nova`,
    description: collection.detail
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) return notFound();

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />
      <CategoryDetailClient collection={collection} />
      <Footer />
    </main>
  );
}
