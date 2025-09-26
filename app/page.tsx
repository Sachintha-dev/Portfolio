import { Footer } from "@/components/layout/footer";
import { BlogsAndPublications } from "@/components/sections/blogs-publications";
import { Contact } from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import { HeroAbout } from "@/components/sections/hero-about";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { SkillsGrid } from "@/components/sections/skills-grid";
import AboutPage from "./about/page";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-gray-100 pb-0">
        <section id="home">
          <HeroAbout />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="experiences">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <ProjectsShowcase />
        </section>
        <section id="skills">
          <SkillsGrid />
        </section>
        <section id="blogs">
          <BlogsAndPublications />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
