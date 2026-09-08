"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";

const projectFolders = [
  {
    name: "PathSmart",
    category: "App Development",
    updated: "Add date",
    description: "Pathfinding application documentation",
    documents: 0,
    href: "",
  },
  {
    name: "Naga City People's Mall Navigation",
    category: "App Development",
    updated: "Add date",
    description: "Indoor navigation system documentation",
    documents: 0,
    href: "",
  },
  {
    name: "Thinkers' Online Classes",
    category: "Web Development",
    updated: "Add date",
    description: "Online school prototype documentation",
    documents: 0,
    href: "",
  },
  {
    name: "Sales Consultant for Solar Company",
    category: "Sales / Business",
    updated: "Add date",
    description: "",
    documents: 0,
    href: "",
  },
];

export default function LibraryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All projects");
  const [view, setView] = useState("grid");

  const visibleFolders = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projectFolders.filter((folder) => {
      const matchesCategory = category === "All projects" || folder.category === category;
      const matchesQuery = !normalizedQuery
        || `${folder.name} ${folder.category} ${folder.description}`.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="portfolio library-page">
      <div className="background-texture" />
      <Navbar />

      <section className="library-shell">
        <div className="library-heading">
          <div>
            <div className="resume-kicker">
              <span>Workspace</span>
              <span className="resume-kicker-line" />
              <span>Project Library</span>
            </div>
            <h1>Project documentation</h1>
            <p>Keep your project notes, plans, screenshots, and technical documents in one place.</p>
          </div>
          <button className="library-new-button" type="button">+ New folder</button>
        </div>

        <div className="library-toolbar">
          <label className="library-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search project folders"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search project folders"
            />
          </label>

          <label className="library-select-label">
            <span>Filter</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option>All projects</option>
              <option>App Development</option>
              <option>Web Development</option>
              <option>Sales Consultant</option>
            </select>
          </label>

          <div className="library-view-toggle" role="group" aria-label="Change folder view">
            <button
              className={view === "grid" ? "active" : ""}
              type="button"
              onClick={() => setView("grid")}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
            >
              ▦
            </button>
            <button
              className={view === "list" ? "active" : ""}
              type="button"
              onClick={() => setView("list")}
              aria-label="List view"
              aria-pressed={view === "list"}
            >
              ☰
            </button>
          </div>
        </div>

        <div className="library-location-row">
          <span>My projects</span>
          <span>{visibleFolders.length} folders</span>
        </div>

        <div className={`folder-grid ${view === "list" ? "list-view" : ""}`}>
          {visibleFolders.map((folder) => (
            <a
              className="folder-card"
              href={folder.href || undefined}
              key={folder.name}
              onClick={(event) => {
                if (!folder.href) event.preventDefault();
              }}
            >
              <div className="folder-card-topline">
                <span className="folder-icon" aria-hidden="true">▰</span>
                <span className="folder-menu" aria-hidden="true">•••</span>
              </div>
              <strong>{folder.name}</strong>
              <span className="folder-category">{folder.category}</span>
              <span className="folder-description">{folder.description}</span>
              <span className="folder-meta">{folder.documents} documents · {folder.updated}</span>
            </a>
          ))}
        </div>

        {visibleFolders.length === 0 && (
          <div className="library-empty-state">
            <strong>No project folders found</strong>
            <span>Try a different search or category.</span>
          </div>
        )}
      </section>
    </main>
  );
}
