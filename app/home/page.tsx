import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </main>
    </div>
  );
}
