import { AboutSection } from "@/components/about-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LeftSidebar } from "@/components/left-sidebar";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fixed Left Sidebar */}
      <LeftSidebar />

      {/* Main Content with left margin to account for sidebar */}
      <main className="min-h-screen bg-gray-100">
        <Hero />
        <AboutSection />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
