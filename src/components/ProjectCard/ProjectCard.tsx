import type { Project } from "../../types";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="project-card">
      <img
        className="project-card__image"
        src={project.image}
        alt={`Screenshot of ${project.name}`}
      />

      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>

        <div className="project-card__description">
          {project.description.map((paragraph) => (
            <p className="project-card__text" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="project-card__links">
          <a
            className="project-card__link"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>

          <a
            className="project-card__link project-card__link_type_secondary"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </li>
  );
}
