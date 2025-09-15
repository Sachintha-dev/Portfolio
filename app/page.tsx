import { AboutSection } from "@/components/about-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <AboutSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
