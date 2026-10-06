import type { Project } from "../types";
import flashcardsImg from "../assets/projects/workspacehub.svg";
import meshaiImg from "../assets/projects/meshai.svg";
import recipeBrowserImg from "../assets/projects/recipe-browser.svg";

export const projects: Project[] = [
  {
    id: "flashcards",
    name: "Flashcard App",
    description: [
      "A study application for viewing, creating, deleting, and practicing flashcard decks.",
      "Built with HTML, CSS, JavaScript, Fetch API, REST API integration, and GitHub Pages.",
    ],
    image: flashcardsImg,
    githubUrl: "https://github.com/heyolyastone/ai-se_project_flashcards",
    liveUrl: "https://heyolyastone.github.io/ai-se_project_flashcards/",
  },
  {
    id: "meshai",
    name: "MeshAI",
    description: [
      "A full-stack AI application with authentication, chats, document uploads, and API integration.",
      "Built with React, TypeScript, Node.js, Express, MongoDB, and Docker.",
    ],
    image: meshaiImg,
    githubUrl: "https://github.com/heyolyastone/ai-se_project_mesh-ai",
    liveUrl: "https://meshai-olga.mooo.com",
  },
  {
    id: "recipe-browser",
    name: "Recipe Browser",
    description: [
      "A recipe browsing application built with React and TypeScript.",
      "Features reusable components and a responsive interface for browsing recipe content.",
    ],
    image: recipeBrowserImg,
    githubUrl: "https://github.com/heyolyastone/ai-se_recipe-browser",
    liveUrl: "https://ai-se-recipe-browser-git-main-triple-ten2.vercel.app/",
  },
];
