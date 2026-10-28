import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>

        <ul className="projects__list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
