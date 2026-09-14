import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/lib/content";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const CategoryDetailClient = dynamic(() => import('@/components/CategoryDetailClient'), { ssr: false });

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) return {};
  return {
    title: `${collection.name} | Terra Nova`,
    description: collection.detail,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return notFound();

  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />
      <CategoryDetailClient collection={collection} />
      <Footer />
    </main>
  );
}
