import { Link } from "react-router-dom";

// Home: welcome message, mission statement, and links to About and Projects
export default function Home() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Software Engineering Technology student</p>
        <h1>Thoughtful digital work, built to be useful.</h1>
        <p className="lead">
          I&apos;m Rafat, a developer focused on accessible web experiences,
          practical automation, and clear problem solving.
        </p>
        <div className="button-row">
          <Link className="button" to="/about">Meet me</Link>
          <Link className="button secondary" to="/projects">View projects</Link>
        </div>
        <p className="hero-note">
          My mission is to make technology easier to understand and more
          useful for the people who rely on it.
        </p>
      </div>
      <img
        className="hero-portrait"
        src="/assets/headshot.jpg"
        alt="Portrait of Rafat Islam"
      />
    </section>
  );
}