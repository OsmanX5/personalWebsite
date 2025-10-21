import ProjectCard from "./ProjectCard";
import "./Projects.css";
function Projects({ projectsInfo }) {
  return (
    <section id="projects">
      <h2 class="orange-gradient-text">PROJECTS</h2>
      <div id="projects-list">
        {projectsInfo.map((x) => (
          <ProjectCard title={x.title} description={x.description} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
