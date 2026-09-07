import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <main className="portfolio contact-page">
      <div className="background-texture" />

      <Navbar />

      <section className="contact-header">
        <div className="resume-kicker">
          <span>Get In Touch</span>
          <span className="resume-kicker-line" />
          <span>Contact</span>
        </div>
        <h1>Let&apos;s build something useful together.</h1>
        <p>
          Whether you have an opportunity, a project idea, or simply want to connect, you can
          reach me through any of the channels below.
        </p>
      </section>

      <section className="contact-grid" aria-label="Contact options">
        <a
          className="contact-card contact-card-primary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=peteralforte@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-card-label">Email</span>
          <strong>peteralforte@gmail.com</strong>
          <span className="contact-card-action">Open Gmail compose →</span>
        </a>

        <a
          className="contact-card"
          href="https://github.com/CodeTrekker530"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-card-label">GitHub</span>
          <strong>@CodeTrekker530</strong>
          <span className="contact-card-action">View my repositories →</span>
        </a>

        <a
          className="contact-card"
          href="https://www.linkedin.com/in/luois-peter-alforte-9605ab26a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-card-label">LinkedIn</span>
          <strong>Peter Alforte</strong>
          <span className="contact-card-action">Connect with me →</span>
        </a>

        <div className="contact-card contact-card-location">
          <span className="contact-card-label">Location</span>
          <strong>Naga City, Camarines Sur</strong>
          <span className="contact-card-action">Philippines 4400</span>
        </div>
      </section>
    </main>
  );
}
