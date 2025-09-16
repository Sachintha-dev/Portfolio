import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <Hero />
        <AboutSection />
      </main>
    </div>
  );
}
