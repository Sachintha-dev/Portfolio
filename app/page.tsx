import { Footer } from "@/components/footer";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HomePageContent from "./home/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Fixed Left Sidebar */}
      {/* <LeftSidebar /> */}
      <main className="min-h-screen bg-gray-100">
        <HomePageContent />
        <section id="about">
          <AboutPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
        <Footer />
      </main>
    </div>
  );
}
