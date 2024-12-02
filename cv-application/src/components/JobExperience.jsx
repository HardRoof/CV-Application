function jobExperience({experience ,handleExperienceChange}) {
  return (
    <form>
      <input
        type="text"
        name="role"
        value={experience.role}
        onChange={handleExperienceChange}
      />
      <input
        type="text"
        name="company"
        value={experience.company}
        onChange={handleExperienceChange}
      />
      <input
        type="date"
        name="date"
        value={experience.date}
        onChange={handleExperienceChange}
      />
      <input
        type="text"
        name="city"
        value={experience.city}
        onChange={handleExperienceChange}
      />
      <input
        type="tel"
        name="phone"
        value={experience.phone}
        onChange={handleExperienceChange}
      />
      <input
        type="text"
        name="accomplishments"
        value={experience.accomplishments}
        onChange={handleExperienceChange}
      />
    </form>
  );
}

export default jobExperience;
