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
    slug: "naga-city-peoples-mall-navigation",
    name: "Naga City People's Mall Navigation",
    category: "App Development",
    updated: "Add date",
    description: "Indoor navigation system documentation",
    githubUrl: "",
    files: [],
  },
  {
    slug: "thinkers-online-classes",
    name: "Thinkers' Online Classes",
    category: "Web Development",
    updated: "Add date",
    description: "Online school prototype documentation",
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
