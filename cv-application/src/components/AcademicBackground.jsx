function AcademicBackground({ background, handleBackgroundChange }) {
  return (
    <form>
      <label htmlFor="title">Degree</label>
      <input
        type="text"
        name="title"
        value={background.title}
        onChange={handleBackgroundChange}
      />
      <label htmlFor="title">Institution</label>
      <input
        type="text"
        name="institution"
        value={background.institution}
        onChange={handleBackgroundChange}
      />
      <label htmlFor="date1">Start Year</label>
      <input
        type="number"
        name="date1"
        value={background.date1}
        onChange={handleBackgroundChange}
      />
      <label htmlFor="date2">End Year</label>
      <input
        type="number"
        name="date2"
        value={background.date2}
        onChange={handleBackgroundChange}
      />
    </form>
  );
}

export default AcademicBackground;
