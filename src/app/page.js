/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="portfolio">
      <div className="background-texture" />

      <section className="hero">
        <p className="intro">Hi, I'm</p>

        <h1>
          Peter Alforte
        </h1>

        <div className="accent-line" />

        <p className="description">
          I do all sort of things, Check out my Works.
        </p>

        <div className="buttons">
          <a href="#projects" className="button primary">
            View My Work <span>→</span>
          </a>

          <a href="#contact" className="button secondary">
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

          <a href="mailto:your@email.com">
            Email
          </a>
        </div>

        <a href="#about" className="peek-about">
          Wanna know about me?
        </a>
      </section>

      <section id="about" className="resume-section">
        <div className="resume-header">
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
              <div className="school-mark" aria-label="University logo placeholder">
                UNC
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
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">Jan 2026 - Mar 2026</span>
                  <h4>OJT / Internship Training Program</h4>
                  <p>AWS Cloud Foundations Training</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">Jan 2026 - Jun 2026</span>
                  <h4>Accenture Academy</h4>
                  <p>Salesforce Administration</p>
                </div>
              </div>
            </div>
          </article>

          <article className="resume-card">
            <h3>Skills</h3>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>C++</li>
              <li>C#</li>
              <li>Python</li>
              <li>React</li>
              <li>Vue.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Supabase</li>
              <li>MERN</li>
              <li>MEVN</li>
              <li>JavaFX</li>
              <li>A*</li>
              <li>Dijkstra</li>
              <li>Leadership</li>
              <li>Problem Solving</li>
            </ul>
          </article>
        </div>
      </section>

      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </main>
  );
}