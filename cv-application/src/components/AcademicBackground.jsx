const AcademicBackground = ({ background, handleBackgroundChange }) => {
  return (
    <form>
      {background.map((bg) => (
        <div key={bg.id}>
          <input
            name="title"
            value={bg.title}
            onChange={(e) => handleBackgroundChange(e, bg.id)}
            placeholder="Title"
          />
          <input
            name="institution"
            value={bg.institution}
            onChange={(e) => handleBackgroundChange(e, bg.id)}
            placeholder="Institution"
          />
          <input
            name="date1"
            value={bg.date1}
            onChange={(e) => handleBackgroundChange(e, bg.id)}
            placeholder="Start Date"
          />
          <input
            name="date2"
            value={bg.date2}
            onChange={(e) => handleBackgroundChange(e, bg.id)}
            placeholder="End Date"
          />
        </div>
      ))}
    </form>
  );
};

export default AcademicBackground;
