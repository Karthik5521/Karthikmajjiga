// src/data/skills.ts
import skillImages from "./images";

export const skillTabs = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Databases",
  "Tools",
];

export const allSkills = [
  // 💻 Languages
    { name: "C#", img: skillImages.CSharp, category: "Languages" },
  { name: "SQL", img: skillImages.SQL, category: "Languages" },
  { name: "JavaScript", img: skillImages.JavaScript, category: "Languages" },
  { name: "TypeScript", img: skillImages.TypeScript, category: "Languages" },
  { name: "Java", img: skillImages.Java, category: "Languages" },
  { name: "Python", img: skillImages.Python, category: "Languages" },


  // 🎨 Frontend
  { name: "React", img: skillImages.React, category: "Frontend" },
  { name: "Next.js", img: skillImages.Nextjs, category: "Frontend" },
  { name: "Vite js", img: skillImages.Vitejs, category: "Frontend" },
  { name: "HTML", img: skillImages.HTML, category: "Frontend" },
  { name: "CSS", img: skillImages.CSS, category: "Frontend" },
  { name: "Bootstrap", img: skillImages.Bootstrap, category: "Frontend" },
  { name: "Tailwind CSS", img: skillImages.Tailwind, category: "Frontend" },

  // 🧩 Backend
   { name: ".NET Core", img: skillImages.DotNet, category: "Backend" },
  { name: "Spring Boot", img: skillImages.Spring, category: "Backend" },

  // 🛢 Databases
  { name: "MongoDB", img: skillImages.MongoDB, category: "Databases" },
  { name: "MySQL", img: skillImages.MySQL, category: "Databases" },
  { name: "PostgreSQL", img: skillImages.PostgreSQL, category: "Databases" },

  // 🛠 Tools
  { name: "Git", img: skillImages.Git, category: "Tools" },
  { name: "GitHub", img: skillImages.GitHub, category: "Tools" },
  { name: "Postman", img: skillImages.Postman, category: "Tools" },
  { name: "VSCode", img: skillImages.VSCode, category: "Tools" },
  { name: "IntelliJ", img: skillImages.IntelliJ, category: "Tools" },
  { name: "WebStorm", img: skillImages.WebStorm, category: "Tools" },
  { name: "Vercel", img: skillImages.Vercel, category: "Tools" },
  { name: "Azure", img: skillImages.Azure, category: "Tools" },
];

