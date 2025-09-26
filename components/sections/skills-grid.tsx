"use client";

const skillCategories = [
  {
    title: "Front-End Development",
    description:
      "Building responsive and user-friendly web interfaces using modern frameworks and technologies with emphasis on performance.",
    icons: ["HTML", "JS", "TS"],
  },
  {
    title: "Styling & Design",
    description:
      "Crafting visually appealing and responsive designs with advanced CSS and design frameworks.",
    icons: ["CSS", "Tailwind", "Bootstrap"],
  },
  {
    title: "Programming Languages",
    description:
      "Proficient in problem-solving and applying programming languages to implement clean data structures and algorithms.",
    icons: ["Python", "C++", "C#", "Java"],
  },
  {
    title: "Back-End Development",
    description:
      "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
    icons: ["Node.js", "Django", "Flask"],
  },
  {
    title: "Web Animations",
    description:
      "Creating seamless animations and transitions to enhance user engagement and interactivity.",
    icons: ["Framer", "GSAP"],
  },
  {
    title: "Database Management",
    description:
      "Designing and managing databases to ensure backup and efficient data storage and retrieval.",
    icons: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Core Computer Science Concepts",
    description:
      "Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and algorithmic thinking.",
    topics: [
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "DSA",
      "System Design",
    ],
  },
  {
    title: "Cloud & Deployment",
    description:
      "Experienced in deploying and managing applications on modern cloud platforms and tools.",
    icons: ["Docker", "AWS", "Vercel"],
  },
  {
    title: "Mobile App Development",
    description:
      "Building Cross-platform mobile applications with modern designs and robust functionality.",
    icons: ["React Native", "Flutter"],
  },
  {
    title: "Version Control & Collaboration",
    description:
      "Effectively managing code repositories and collaborating on projects using modern teamwork tools.",
    icons: ["Git", "GitHub"],
  },
  {
    title: "Personal Development",
    description:
      "Committed to continuous learning and personal growth to excel in both professional and collaborative environments.",
    topics: [
      "Time Management",
      "Problem Solving",
      "Communication",
      "Leadership",
    ],
  },
  {
    title: "Testing & Debugging",
    description:
      "Ensuring code quality and reliability through rigorous testing and debugging processes.",
    icons: ["Jest", "Cypress", "Postman"],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user interfaces and experiences that are intuitive, visually appealing, and easy to navigate.",
    icons: ["Figma", "Wireframing", "Prototyping"],
  },
];

import { SectionHeader } from "./SectionHeader";

export const SkillsGrid = () => (
  <main className="skills-page px-4 sm:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="py-8 sm:py-12">
        <SectionHeader title="Skills" align="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">
                {category.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {category.description}
              </p>

              {category.icons && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {category.icons.map((icon, iconIndex) => (
                    <span
                      key={iconIndex}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              )}

              {category.topics && (
                <div className="space-y-1">
                  {category.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="text-sm text-gray-600">
                      • {topic}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);
