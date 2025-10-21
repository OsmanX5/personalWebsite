import projectCardHolderImage from "../assets/images/project-card-holder.png";

function ProjectCard({ title, description }) {
  return (
    <div class="project-card">
      <img src={projectCardHolderImage} alt="Project 1" />
      <div class="project-card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">View Project</a>
      </div>
    </div>
  );
}
export default ProjectCard;
