function PreviewSide({ info, background, experience }) {
  const hasEducation =
    background?.title ||
    background?.institution ||
    (background?.date1 && background?.date2);
  const hasExperience =
    experience?.role ||
    experience?.company ||
    experience?.city ||
    experience?.accomplishments ||
    (experience?.date1 && experience?.date2);

  return (
    <div>
      <section>
        <h1>{info.userName}</h1>
        <div>
          <h3>{info.userEmail}</h3>
          <h3>{info.userPhone}</h3>
        </div>
      </section>
      <section>
        {hasEducation && (
          <>
            <h2>EDUCATION</h2>
            <p>{background.title}</p>
            {background.date1 && background.date2 && (
              <p>
                {background.date1} – {background.date2}
              </p>
            )}
            <p>{background.institution}</p>
          </>
        )}
      </section>
      <section>
        {hasExperience && (
          <>
            <h2>WORK EXPERIENCE</h2>
            <p>{experience.role}</p>
            <p>{experience.company}</p>
            {experience.date1 && experience.date2 && (
              <p>
                {experience.date1} – {experience.date2}
              </p>
            )}
            <p>{experience.city}</p>
            <p>{experience.accomplishments}</p>
          </>
        )}
      </section>
    </div>
  );
}

export default PreviewSide;
