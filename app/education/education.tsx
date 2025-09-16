const educationData = [
  {
    institution: "University of Example",
    degree: "Bachelor of Science in Computer Science",
    year: "2018 - 2022",
    description:
      "Focused on software engineering, algorithms, and web development.",
  },
  {
    institution: "Example High School",
    degree: "High School Diploma",
    year: "2014 - 2018",
    description: "Graduated with honors.",
  },
];

const Education = () => (
  <main
    className="education-page"
    style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
  >
    <h1>Education</h1>
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
        {educationData.map((edu, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: "2rem",
              borderBottom: "1px solid #eee",
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

            <h2 style={{ margin: 0 }}>{edu.institution}</h2>
            <p style={{ margin: "0.5rem 0", color: "#555" }}>
              <strong>{edu.degree}</strong>
            </p>
            <p style={{ margin: "0.5rem 0", color: "#555" }}>{edu.year}</p>
            <p style={{ margin: 0 }}>{edu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </main>
);

export default Education;
