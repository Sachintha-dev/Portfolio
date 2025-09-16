import React from "react";

const experiences = [
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

const Experience: React.FC = () => (
  <main
    className="experience-page"
    style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
  >
    <h1>Experience</h1>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {experiences.map((exp, idx) => (
        <li
          key={idx}
          style={{
            marginBottom: "2rem",
            borderBottom: "1px solid #eee",
            paddingBottom: "1rem",
          }}
        >
          <h2 style={{ margin: 0 }}>
            {exp.role}{" "}
            <span style={{ color: "#888", fontWeight: "normal" }}>
              @ {exp.company}
            </span>
          </h2>
          <p style={{ margin: "0.5rem 0", color: "#555" }}>{exp.period}</p>
          <p style={{ margin: 0 }}>{exp.description}</p>
        </li>
      ))}
    </ul>
  </main>
);

export default Experience;
