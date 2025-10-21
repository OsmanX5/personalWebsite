import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
function Experiences({ experincesInfo }) {
  return (
    <section id="experience">
      <h2 class="blue-gradient-text">EXPERIENCE</h2>
      <div id="experience-list"></div>
      {experincesInfo.map((x) => (
        <ExperienceCard
          jobTitle={x.jobTitle}
          jobTime={x.jobTime}
          jobDescription={x.jobDescription}
        />
      ))}
    </section>
  );
}
export default Experiences;
