import GeneralInfo from "./components/GeneralInfo";
import AcademicBackground from "./components/AcademicBackground";
import JobExperience from "./components/JobExperience";

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
      <GeneralInfo info={info} handleInfoChange={handleInfoChange} />
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
