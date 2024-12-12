function jobExperience({ experience, handleExperienceChange }) {
  return (
    <form>
      <label htmlFor="role">Job Title</label>
      <input
        type="text"
        name="role"
        value={experience.role}
        onChange={handleExperienceChange}
      />
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        value={experience.company}
        onChange={handleExperienceChange}
      />
      <label htmlFor="date1">Start Year</label>
      <input
        type="number"
        name="date1"
        value={experience.date1}
        onChange={handleExperienceChange}
      />
      <label htmlFor="date2">End Year</label>
      <input
        type="number"
        name="date2"
        value={experience.date2}
        onChange={handleExperienceChange}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        value={experience.city}
        onChange={handleExperienceChange}
      />
      <label htmlFor="accomplishments">Description</label>
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
