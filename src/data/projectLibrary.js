export const projectFolders = [
  {
    slug: "pathsmart",
    name: "PathSmart",
    category: "App Development",
    updated: "Add date",
    description: "Pathfinding application documentation",
    githubUrl: "https://github.com/CodeTrekker530/Pathsmart-Mobile.git",
    files: [
      {
        name: "PathSmart Research Paper",
        type: "PDF",
        size: "Research paper",
        url: "/docs/pathsmart/PathSmart_Research_Paper.pdf",
      },
    ],
  },
  {
    slug: "thinkers-student-management-system",
    name: "Thinkers' Student Management System",
    category: "App Development",
    updated: "Add date",
    description: "Database heavy application that manages student data",
    githubUrl: "",
    files: [],
  },
  {
    slug: "thinkers-online-classes-platform",
    name: "Thinkers' Online Classes Platform",
    category: "Web Development",
    updated: "Add date",
    description: "Online school prototype website",
    githubUrl: "",
    files: [],
  },
  {
    slug: "sales-consultant-for-solar-company",
    name: "Sales Consultant for Solar Company",
    category: "Sales / Business",
    updated: "Add date",
    description: "",
    githubUrl: "",
    files: [],
  },
];

export function getProjectFolder(slug) {
  return projectFolders.find((folder) => folder.slug === slug);
}
