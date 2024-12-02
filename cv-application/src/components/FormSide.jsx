import GeneralInfo from "./GeneralInfo";
import AcademicBackground from "./AcademicBackground";
import JobExperience from "./JobExperience";

export default function FormSide({
  info,
  background,
  experience,
  handleInfoChange,
  handleBackgroundChange,
  handleExperienceChange,
}) {
  return (
    <div>
      <GeneralInfo 
        info={info} 
        handleInfoChange={handleInfoChange}
      />
      <AcademicBackground
        background={background}
        handleBackgroundChange={handleBackgroundChange}
      />
      <JobExperience
        experience={experience}
        handleExperienceChange={handleExperienceChange}
      />
    </div>
  );
}
