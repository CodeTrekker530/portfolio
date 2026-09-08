"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", href: "/", path: "/" },
  { label: "About", href: "/#about", path: "/#about" },
  { label: "Projects", href: "/projects", path: "/projects" },
  { label: "Skills", href: "/skills", path: "/skills" },
  { label: "Contact", href: "/contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar" aria-label="Main navigation">
      {navigationItems.map((item) => {
        const isActive = item.path === "/#about"
          ? pathname === "/" && typeof window !== "undefined" && window.location.hash === "#about"
          : pathname === item.path;

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}

      <Link
        className="navbar-library"
        href="/library"
        aria-label="Project library"
        title="Project library"
        aria-current={pathname === "/library" ? "page" : undefined}
      >
        <span className="library-folder-icon" aria-hidden="true" />
      </Link>
    </nav>
  );
}
