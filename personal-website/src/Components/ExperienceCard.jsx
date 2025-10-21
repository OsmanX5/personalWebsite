function ExperienceCard({ jobTitle, jobTime, jobDescription }) {
  return (
    <div class="experience-card">
      <div class="experience-card-header">
        <div class="experience-card-header-title">
          <svg class="experience-card-company-icon"></svg>
          <h3>{jobTitle}</h3>
        </div>
        <p> {jobTime}</p>
      </div>
      <p>{jobDescription}</p>
    </div>
  );
}
export default ExperienceCard;
