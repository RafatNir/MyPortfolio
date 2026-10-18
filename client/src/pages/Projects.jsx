// Each project: visual, title, description, my role, and the outcome
const projects = [
    {
    image: "/assets/project-hub.svg",
    title: "Ontario Region Hub Redesign",
    description:
      "An internal communications site for 250+ staff of the Business Enquiries division at the Canada Revenue Agency, built to WCAG accessibility and bilingual standards.",
    role: "Led the end-to-end redesign and launch, built the pages in HTML, CSS, and JavaScript, and coordinated user acceptance testing.",
    outcome: "Delivered training and rollout materials and received formal recognition from senior leadership.",
  },
  {
    image: "/assets/project-reporting.svg",
    title: "Automated Reporting Tools",
    description: "Tools that streamline operational KPI reporting.",
    role: "Built Excel macros and automated VLOOKUP workflows.",
    outcome: "Reduced manual effort and improved accuracy.",
  },
  {
    image: "/assets/project-portfolio.svg",
    title: "Portfolio Site",
    description:
      "A React portfolio with reusable components, six navigable pages, responsive styling, and a contact form.",
    role: "Designed and developed the whole site.",
    outcome: "Deployed live on Netlify from a GitHub repository.",
  },
];

// Projects: one card per project, built from the list above
export default function Projects() {
  return (
    <section className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h1>Projects with a practical outcome.</h1>
        <p className="lead">
          A few examples of design, development, and automation work I am
          proud to discuss.
        </p>
      </div>

      <div className="card-grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <img
              className="card-image"
              src={project.image}
              alt={`${project.title} project visual`}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>My role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}