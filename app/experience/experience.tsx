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

const Experience = () => (
  <main
    className="experience-page"
    style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
  >
    <h1>Experience</h1>
    <div style={{ position: "relative", paddingLeft: "2rem" }}>
      {/* Vertical timeline line */}
      <div
        style={{
          position: "absolute",
          left: "0.5rem",
          top: "1rem",
          bottom: "0",
          width: "2px",
          backgroundColor: "#ccc",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {experiences.map((exp, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: "2rem",
              paddingBottom: "1rem",
              position: "relative",
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "-1.75rem",
                top: "0.25rem",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#888",
                border: "2px solid white",
                boxShadow: "0 0 0 1px #eee",
              }}
            />

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
    </div>
  </main>
);

export default Experience;
