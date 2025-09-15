import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectsShowcase } from "@/components/projects-showcase";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        <ProjectsShowcase />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
