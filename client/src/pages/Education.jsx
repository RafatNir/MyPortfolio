// Each entry: credential obtained, institution, year(s), and an optional note.
// Listed with the most recent first.
const educationHistory = [
  {
    credential: "Software Engineering Technology (Advanced Diploma)",
    institution: "Centennial College",
    dates: "2025 - Present (in progress)",
    details:
      "Coursework includes web application development, programming, databases, systems analysis, and software testing.",
  },
  {
    credential: "Master of Arts (MA), Media Production",
    institution: "Toronto Metropolitan University",
    dates: "2018",
  },
  {
    credential: "Master of Business Administration (MBA), Marketing",
    institution: "Atish Dipankar University of Science and Technology",
    dates: "2013",
  },
  {
    credential: "Bachelor of Business Administration (BBA), Marketing",
    institution: "Atish Dipankar University of Science and Technology",
    dates: "2011",
  },
];

// Education: timeline of all educational qualifications, built from the list above
export default function Education() {
  return (
    <section className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h1>Learning with purpose.</h1>
        <p className="lead">
          A foundation in business, media, and software development, with a
          current focus on web application design.
        </p>
      </div>

      <div className="timeline">
        {educationHistory.map((entry) => (
          <article className="timeline-item" key={entry.credential}>
            <h3>{entry.credential}</h3>
            <p>{entry.institution} · {entry.dates}</p>
            {/* Only entries with extra detail show this line */}
            {entry.details && <p>{entry.details}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}