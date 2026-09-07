"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { categoryNames, projectCategories } from "../../data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);
  const category = projectCategories[selectedCategory];

  return (
    <main className="portfolio projects-page">
      <div className="background-texture" />

      <Navbar />

      <section className="projects-header">
        <div className="resume-kicker">
          <span>Selected Work</span>
          <span className="resume-kicker-line" />
          <span>Projects & Skills</span>
        </div>
        <h1>Things I have built and learned.</h1>
        <p>
          Explore my work across software development, web experiences, and Salesforce-related
          training.
        </p>
      </section>

      <section className="project-categories" aria-label="Project categories">
        <div className="project-filter" role="radiogroup" aria-label="Choose a project category">
          {categoryNames.map((categoryName) => (
            <button
              key={categoryName}
              type="button"
              className={`project-filter-button ${selectedCategory === categoryName ? "active" : ""}`}
              role="radio"
              aria-checked={selectedCategory === categoryName}
              onClick={() => setSelectedCategory(categoryName)}
            >
              <span>{projectCategories[categoryName].number}</span>
              {categoryName}
            </button>
          ))}
        </div>

        <article className="project-category selected-project-category">
          <div className="category-heading">
            <span className="category-number">{category.number}</span>
            <div>
              <p className="category-label">Selected Category</p>
              <h2>{selectedCategory}</h2>
            </div>
          </div>

          <div className="project-list">
            {category.projects.map((project) => (
              <article className="project-item" key={project.name}>
                <div className="project-item-topline">
                  <span>{project.name}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {project.githubUrl && (
                  <a
                    className="project-github-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub repository →
                  </a>
                )}
              </article>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
