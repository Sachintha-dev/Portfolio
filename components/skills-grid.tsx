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

export const SkillsGrid = () => (
  <main
    className="skills-page"
    style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}
  >
    <h1>Skills</h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        marginTop: "2rem",
      }}
    >
      {skillCategories.map((category, idx) => (
        <div
          key={idx}
          style={{
            padding: "1.5rem",
            border: "1px solid #eee",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h2 style={{ margin: "0 0 0.75rem 0", fontSize: "1.25rem" }}>
            {category.title}
          </h2>
          <p style={{ margin: "0 0 1rem 0", color: "#555", lineHeight: "1.5" }}>
            {category.description}
          </p>

          {category.icons && (
            <div style={{ margin: "0 0 0.5rem 0" }}>
              {category.icons.map((icon, iconIndex) => (
                <span
                  key={iconIndex}
                  style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    backgroundColor: "#f5f5f5",
                    color: "#333",
                    fontSize: "0.875rem",
                    borderRadius: "1rem",
                    marginRight: "0.5rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
          )}

          {category.topics && (
            <div>
              {category.topics.map((topic, topicIndex) => (
                <div
                  key={topicIndex}
                  style={{
                    color: "#555",
                    fontSize: "0.875rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  • {topic}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </main>
);
