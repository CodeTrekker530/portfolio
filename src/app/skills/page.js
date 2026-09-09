import Navbar from "../../components/Navbar";

const skillGroups = [
  {
    number: "01",
    label: "Languages",
    title: "Programming Languages",
    description: "Languages used for application logic, scripting, interfaces, and data work.",
    skills: ["Java", "JavaScript", "Python", "C++", "C#", "SQL"],
    accent: "blue",
  },
  {
    number: "02",
    label: "Interfaces",
    title: "Frontend and Frameworks",
    description: "Tools I use to build responsive interfaces and interactive application experiences.",
    skills: ["React", "Vue.js", "React Native", "HTML", "CSS", "Bootstrap", "JavaFX"],
    accent: "green",
  },
  {
    number: "03",
    label: "Architecture",
    title: "Backend and Tech Stacks",
    description: "Application structures and backend tools used to connect interfaces, services, and data.",
    skills: ["Node.js", "Express.js", "MERN", "MEVN", "CRUD applications", "Real-time systems"],
    accent: "gold",
  },
  {
    number: "04",
    label: "Storage and logic",
    title: "Databases and Algorithms",
    description: "Foundations for storing information, querying data, and building efficient solutions.",
    skills: ["MySQL", "MongoDB", "Supabase", "A* algorithm", "Dijkstra algorithm", "Database design"],
    accent: "rose",
  },
];

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
          A categorized overview of the languages, frameworks, stacks, databases, and algorithms I work with.
        </p>
      </section>

      <section className="skills-dashboard" aria-label="Skills overview">
        <div className="skills-page-grid" aria-label="Capabilities by category">
          {skillGroups.map((group) => (
            <article className={`skills-page-card ${group.accent}-focus`} key={group.title}>
              <div className="skills-card-heading">
                <span className="skills-page-number">{group.number}</span>
                <span className="skills-card-label">{group.label}</span>
              </div>
              <h2>{group.title}</h2>
              <p className="skills-card-description">{group.description}</p>
              <div className="skills-chip-list">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
