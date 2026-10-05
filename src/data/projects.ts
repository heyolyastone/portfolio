import type { Project } from "../types";
import placeholderImg from "../assets/hero.png";

export const projects: Project[] = [
  {
    id: "workspacehub",
    name: "WorkspaceHub",
    description: [
      "A full-stack workspace management application built with React, TypeScript, Node.js, Express, and MongoDB.",
      "Includes projects, tasks, comments, authentication, role-based permissions, and deployment configuration.",
    ],
    image: placeholderImg,
    githubUrl: "https://github.com/heyolyastone/ai-se_project_workspacehub",
    liveUrl: "#",
  },
  {
    id: "meshai",
    name: "MeshAI",
    description: [
      "A full-stack AI application with authentication, chats, document uploads, and API integration.",
      "Built with React, TypeScript, Node.js, Express, MongoDB, and Docker.",
    ],
    image: placeholderImg,
    githubUrl: "https://github.com/heyolyastone/ai-se_project_mesh-ai",
    liveUrl: "#",
  },
  {
    id: "recipe-browser",
    name: "Recipe Browser",
    description: [
      "A recipe browsing application with user authentication and protected functionality.",
      "Built with frontend and backend authentication flows and reusable application components.",
    ],
    image: placeholderImg,
    githubUrl: "https://github.com/heyolyastone/ai-se_recipe-browser-auth",
    liveUrl: "#",
  },
];
