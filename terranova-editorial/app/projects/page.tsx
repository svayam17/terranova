import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata = {
  title: "Projects | Terra Nova",
  description:
    "Explore Terra Nova project references across hospitality, residential, commercial, resort, and real estate spaces."
};

export default function ProjectsPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header variant="light" />
      <PageHero label="Featured projects" lines={["Projects"]} indent={false} />
      <section className="frame pb-24 md:pb-36">
        <ProjectsGallery />
      </section>
      <Footer />
    </main>
  );
}
