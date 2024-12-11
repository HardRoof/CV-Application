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
    <nav>
      <div>
        <div className="nav_div_header">
          <img
            className="div_header_logo"
            src="https://rmathr.github.io/cv-project/462edf5f6d5ba03edebc.png"
            alt="Form Header"
            style={{ width: "2.4rem" }}
          />
          <p>Education Experience</p>
        </div>

        <GeneralInfo info={info} handleInfoChange={handleInfoChange} />
      </div>
      <div>
        <AcademicBackground
          background={background}
          handleBackgroundChange={handleBackgroundChange}
        />
      </div>
      <div>
        <JobExperience
          experience={experience}
          handleExperienceChange={handleExperienceChange}
        />
      </div>
    </nav>
  );
}
