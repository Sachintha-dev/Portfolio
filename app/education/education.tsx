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

export default function Education() {
  return (
    <main className="education-page" style={{ padding: "2rem" }}>
      <h1>Education</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {educationData.map((edu, idx) => (
          <li key={idx} style={{ marginBottom: "2rem" }}>
            <h2>{edu.institution}</h2>
            <p>
              <strong>{edu.degree}</strong> <br />
              <span>{edu.year}</span>
            </p>
            <p>{edu.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
