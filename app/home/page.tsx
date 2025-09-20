import { AboutSection } from "@/components/sections/about-section";
import { Hero } from "@/components/sections/hero";

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
