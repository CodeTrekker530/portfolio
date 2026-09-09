import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectFolder, projectFolders } from "../../../data/projectLibrary";

export function generateStaticParams() {
  return projectFolders.map((folder) => ({ slug: folder.slug }));
}

export default async function ProjectFolderPage({ params }) {
  const { slug } = await params;
  const folder = getProjectFolder(slug);

  if (!folder) notFound();

  return (
    <main className="portfolio library-page">
      <div className="background-texture" />
      <Navbar />

      <section className="library-shell folder-page-shell">
        <Link className="folder-back-link" href="/library">← Back to project library</Link>

        <div className="folder-page-heading">
          <div className="folder-page-icon" aria-hidden="true">▰</div>
          <div>
            <div className="resume-kicker">
              <span>My projects</span>
              <span className="resume-kicker-line" />
              <span>{folder.category}</span>
            </div>
            <h1>{folder.name}</h1>
            <p>{folder.description || "Project documentation and attached files."}</p>
          </div>
        </div>

        <div className="folder-page-toolbar">
          <span>Files</span>
          <span>{folder.files.length} {folder.files.length === 1 ? "file" : "files"}</span>
        </div>

        {folder.files.length > 0 ? (
          <div className="document-list" aria-label={`${folder.name} files`}>
            {folder.files.map((file) => (
              <article className="document-row" key={file.url}>
                <div className="document-file-icon" aria-hidden="true">PDF</div>
                <div className="document-details">
                  <strong>{file.name}</strong>
                  <span>{file.type} · {file.size}</span>
                </div>
                <a
                  className="document-open-link"
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open file ↗
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="folder-empty-state">
            <strong>This folder is empty</strong>
            <span>Project documents will appear here when they are added.</span>
          </div>
        )}

        {folder.githubUrl && (
          <a
            className="folder-repository-link"
            href={folder.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub repository →
          </a>
        )}
      </section>
    </main>
  );
}
