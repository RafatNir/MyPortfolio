import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://myportfolio-kbj4.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects with a practical outcome.</h1>
        <p className="lead">
          Projects loaded from MongoDB through the Express API.
        </p>
      </div>

      <div className="card-grid">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <article className="card" key={project._id}>
              <h3>{project.title}</h3>

              <p>
                <strong>Owner:</strong>{" "}
                {project.firstname} {project.lastname}
              </p>

              <p>
                <strong>Email:</strong> {project.email}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {project.description}
              </p>

              <p>
                <strong>Completion Date:</strong>{" "}
                {project.completion
                  ? new Date(project.completion).toLocaleDateString()
                  : "N/A"}
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}