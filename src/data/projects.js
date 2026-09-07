export const projectCategories = {
  "App Development": {
    number: "01",
    projects: [
      {
        name: "PathSmart",
        type: "React Native / A* Algorithm",
        description:
          "A pathfinding application that uses the A* algorithm to locate products or stores and determine an efficient route.",
        tags: ["React Native", "A* Algorithm", "Pathfinding"],
        githubUrl: "https://github.com/CodeTrekker530/Pathsmart-Mobile.git",
      },
      {
        name: "Thinkers' Student Management System",
        type: "JavaFX / MySQL",
        description:
          "A desktop application for managing student data. Connected to a local MySQL Database.",
        tags: ["Create", "Read", "Update", "Delete", "JavaFX", "MySQL"],
        githubUrl: "",
      },
    ],
  },
  "Web Development": {
    number: "02",
    projects: [
      {
        name: "Thinkers' Online Classes Platform",
        type: "HTML / Bootstrap",
        description:
          "A prototype online school website for a Tutorial School. The website is designed to provide information about the school, its courses, and enrollment process.",
        tags: ["HTML", "Bootstrap", "Database"],
        githubUrl: "",
      },
    ],
  },
  "Sales Consultant": {
    number: "03",
    projects: [
      {
        name: "Sales Consultant for Solar Company",
        type: "Sales / Business",
        description:
          "Worked as a Sales Consultant for a solar company, where I was responsible for generating leads, conducting sales presentations, and closing deals. I also provided customer support and follow-up to ensure customer satisfaction.",
        tags: ["Sales", "Business"],
        githubUrl: "",
      },
    ],
  },
};

export const categoryNames = Object.keys(projectCategories);
