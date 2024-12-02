function PreviewSide({ info, background, experience }) {
  const hasEducation =
    background?.title || background?.institution || background?.date;
  const hasExperience =
    experience?.role ||
    experience?.company ||
    experience?.date ||
    experience?.city ||
    experience?.phone ||
    experience?.accomplishments;
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
            <p>{background.date}</p>
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
            <p>{experience.date}</p>
            <p>{experience.city}</p>
            <p>{experience.phone}</p>
            <p>{experience.accomplishments}</p>
          </>
        )}
      </section>
    </div>
  );
}

export default PreviewSide;
