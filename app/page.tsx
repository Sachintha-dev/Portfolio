import { AboutSection } from "@/components/about-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LeftSidebar } from "@/components/left-sidebar";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { SkillsGrid } from "@/components/skills-grid";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Fixed Left Sidebar */}
      <LeftSidebar />

      {/* Main Content with left margin to account for sidebar */}
      <main className="min-h-screen bg-gray-100">
        <Hero />
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsShowcase />
        </section>
        <section id="skills">
          <SkillsGrid />
        </section>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
