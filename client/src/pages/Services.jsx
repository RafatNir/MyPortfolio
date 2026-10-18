// Each service is [number label, title, description]
const services = [
  ["01", "Web development", "Responsive React websites and interfaces that work across phones, tablets, and desktops."],
  ["02", "Accessible design", "Semantic, keyboard-friendly experiences with clear hierarchy and readable content."],
  ["03", "Automation tools", "Practical scripts and spreadsheet workflows that reduce repetitive reporting work."],
];

// Services: short list of what I offer, one card per service
export default function Services() {
  return (
    <section className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h1>Useful technology, without the noise.</h1>
        <p className="lead">
          The kinds of work I am prepared to contribute to on a student or
          junior development team.
        </p>
      </div>

      <div className="card-grid">
        {services.map(([number, title, description]) => (
          <article className="card" key={title}>
            <div className="eyebrow">{number}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}