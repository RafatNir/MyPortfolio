// About: legal name, portrait, short biography, and a link to the PDF resume
export default function About() {
  return (
    <section className="page-shell split">
      <div>
        <p className="eyebrow">About me</p>
        <h1>Curious, careful, and always learning.</h1>
        <img
          className="hero-portrait"
          src="/assets/headshot.jpg"
          alt="Rafat Islam, head and shoulders"
        />
      </div>
      <div>
        <p className="lead">
          My name is Rafat Islam. I am a Software Engineering Technology
          student at Centennial College who enjoys turning messy requirements
          into simple, reliable interfaces.
        </p>
        <p>
          I care about accessibility, responsive design, and building tools
          that feel calm to use. Outside of coursework, I keep sharpening my
          skills through small web projects and automation experiments.
        </p>
        {/* The PDF lives in public/assets and opens in a new tab */}
        <a
          className="button"
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
        </a>
      </div>
    </section>
  );
}