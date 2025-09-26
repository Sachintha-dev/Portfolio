"use client";
import { SectionHeader } from "./SectionHeader";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    period: "Jan 2022 - Present",
    description:
      "Developed and maintained web applications using React and TypeScript. Collaborated with designers and backend developers to deliver seamless user experiences.",
  },
  {
    company: "Creative Agency",
    role: "UI/UX Designer",
    period: "Jun 2020 - Dec 2021",
    description:
      "Designed user interfaces and improved user flows for multiple client projects. Conducted user research and usability testing.",
  },
  {
    company: "Startup Hub",
    role: "Intern",
    period: "Jan 2020 - May 2020",
    description:
      "Assisted in building MVPs for startups, focusing on rapid prototyping and feedback-driven development.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader title="Experience" />
        <div className="relative pl-8">
          {/* Timeline vertical line */}
          <div className="absolute left-4 top-0 w-1 h-full bg-blue-100 rounded-full" />
          <ul className="space-y-12">
            {experiences.map((exp, idx) => (
              <li key={idx} className="relative">
                {/* Timeline dot */}
                <span className="absolute left-[calc(1rem+0.125rem)] -translate-x-1/2 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow z-10" />
                <div className="bg-white  rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-blue-700">
                      {exp.role}
                      <span className="text-gray-500 font-normal ml-2">
                        @ {exp.company}
                      </span>
                    </h3>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
