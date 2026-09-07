import Navbar from "../../components/Navbar";

export default function SkillsPage() {
  return (
    <main className="portfolio skills-page">
      <div className="background-texture" />

      <Navbar />

      <section className="projects-header">
        <div className="resume-kicker">
          <span>Capabilities</span>
          <span className="resume-kicker-line" />
          <span>Skills</span>
        </div>
        <h1>Tools I use to turn ideas into working solutions.</h1>
        <p>
          A categorized overview of my technical abilities and the professional strengths I bring
          to a team.
        </p>
      </section>

      <section className="skills-page-grid" aria-label="Skills by category">
        <article className="skills-page-card technical-focus">
          <span className="skills-page-number">01</span>
          <h2>Programming Languages</h2>
          <ul className="skills-page-list">
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>C++</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
        </article>

        <article className="skills-page-card">
          <span className="skills-page-number">02</span>
          <h2>Web Development</h2>
          <ul className="skills-page-list">
            <li>React and Vue.js</li>
            <li>HTML and CSS</li>
            <li>Node.js and Express.js</li>
            <li>MERN and MEVN</li>
          </ul>
        </article>

        <article className="skills-page-card">
          <span className="skills-page-number">03</span>
          <h2>Databases and Solutions</h2>
          <ul className="skills-page-list">
            <li>MySQL, MongoDB, and Supabase</li>
            <li>JavaFX</li>
            <li>A* and Dijkstra algorithms</li>
            <li>Real-time updating systems</li>
          </ul>
        </article>

        <article className="skills-page-card soft-focus">
          <span className="skills-page-number">04</span>
          <h2>Soft Skills</h2>
          <ul className="skills-page-list">
            <li>Experienced leadership</li>
            <li>Collaboration and communication</li>
            <li>Problem solving</li>
            <li>Good work ethic</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
