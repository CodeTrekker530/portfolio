import Image from "next/image";
import Link from "next/link";
import uncLogo from "../assets/UNC.png";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="portfolio">
      <div className="background-texture" />

      <section className="hero">
        <div className="resume-kicker hero-kicker">
          <span>Hi, I&apos;m</span>
          <span className="resume-kicker-line" />
          <span>Peter Alforte</span>
        </div>

        <h1 className="hero-title">
          I do all sort of things. Check out my Works.
        </h1>

        <div className="buttons">
          <a href="/projects" className="button primary">
            View My Work <span>→</span>
          </a>

          <a href="/contact" className="button secondary">
            Contact Me
          </a>
        </div>

        <div className="socials">
          <a href="https://github.com/CodeTrekker530" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/luois-peter-alforte-9605ab26a" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=peteralforte@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>

        <a href="#about" className="peek-about">
          Wanna know about me?
        </a>
      </section>

      <section id="about" className="resume-section">
        <div className="resume-header">
          <div className="resume-kicker">
            <span>Profile</span>
            <span className="resume-kicker-line" />
            <span>Resume</span>
          </div>
          <h2 className="about-title">About Me</h2>
        </div>

        <div className="resume-grid">
          <article className="resume-card summary-card">
            <h3>Summary</h3>
            <p>
              Bachelor of Science in Computer Science graduate with experience in Java,
              JavaScript, C++, Python, and SQL. Skilled in web and mobile development,
              including the MERN stack and JavaFX, with hands-on experience creating practical
              software solutions such as PathSmart, a pathfinding system using the A* algorithm.
              Strong problem-solving abilities and a solid foundation in software development
              principles.
            </p>
          </article>

          <article className="resume-card education-card">
            <h3>Education</h3>

            <div className="education-row">
              <div className="school-mark">
                <Image
                  src={uncLogo}
                  alt="University of Nueva Caceres logo"
                  className="school-logo"
                  fill
                  sizes="64px"
                />
              </div>

              <div className="education-copy">
                <p className="degree">Bachelor of Science in Computer Science</p>
                <p>University of Nueva Caceres</p>
                <p>Naga City, Philippines</p>
                <p className="year">2022 - 2026</p>
              </div>
            </div>
          </article>

          <article className="resume-card work-card">
            <h3>Work Experience</h3>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-year">2026</span>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">Jan 2026 - Mar 2026</span>
                  <h4>OJT / Internship Training Program</h4>
                  <p>AWS Cloud Foundations Training</p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2026</span>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">Jan 2026 - Jun 2026</span>
                  <h4>Accenture Academy</h4>
                  <p>Salesforce Administration</p>
                </div>
              </div>
            </div>
          </article>

          <article className="resume-card skills-card">
            <h3>Skills</h3>

            <div className="skills-columns">
              <div className="skills-column">
                <div className="skill-group">
                  <h4>Technical Skills</h4>

                  <h5>Programming Languages</h5>
                  <ul className="skill-list">
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Python</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h5>Web Development</h5>
                  <ul className="skill-list">
                    <li>React and Vue.js</li>
                    <li>HTML and CSS</li>
                    <li>Node.js and Express.js</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h5>Databases and Stacks</h5>
                  <ul className="skill-list">
                    <li>MySQL, MongoDB, Supabase</li>
                    <li>MERN and MEVN</li>
                    <li>JavaFX</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h5>Specialized Solutions</h5>
                  <ul className="skill-list">
                    <li>A* and Dijkstra algorithms</li>
                    <li>Real-time updating systems</li>
                  </ul>
                </div>
              </div>

              <div className="skills-column soft-skills-column">
                <div className="skill-group">
                  <h4>Soft Skills</h4>
                </div>

                <div className="skill-group">
                  <h5>Experienced Leader</h5>
                  <ul className="skill-list">
                    <li>Worked as team leader for three university projects.</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h5>Collaboration</h5>
                  <ul className="skill-list">
                    <li>Able to communicate effectively in Tagalog and English.</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h5>Problem Solver</h5>
                  <ul className="skill-list">
                    <li>Creative in creating suitable solutions to problems.</li>
                  </ul>
                </div>

                <div className="skill-group">
                  <h5>Good Work Ethic</h5>
                  <ul className="skill-list">
                    <li>Shows respect and discipline at all times.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Navbar />
    </main>
  );
}