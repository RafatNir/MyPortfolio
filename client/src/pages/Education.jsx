import { useEffect, useState } from "react";

export default function Education() {
  const [qualifications, setQualifications] = useState([]);

  useEffect(() => {
   fetch("http://localhost:3000/api/qualifications")
      .then((res) => res.json())
      .then((data) => setQualifications(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h1>Academic Qualifications</h1>

        <p className="lead">
          Qualifications loaded from MongoDB through the Express API.
        </p>
      </div>

      <div className="card-grid">
        {qualifications.length === 0 ? (
          <p>No qualifications found.</p>
        ) : (
          qualifications.map((qualification) => (
            <article
              className="card"
              key={qualification._id}
            >
              <h3>{qualification.title}</h3>

              <p>
                <strong>Owner:</strong>{" "}
                {qualification.firstname}{" "}
                {qualification.lastname}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {qualification.email}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {qualification.description}
              </p>

              <p>
                <strong>Completion Date:</strong>{" "}
                {qualification.completion
                  ? new Date(
                      qualification.completion
                    ).toLocaleDateString()
                  : "N/A"}
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}