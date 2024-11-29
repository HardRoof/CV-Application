import React, { useState } from "react";

function AcademicBackground() {
  const [background, setBackground] = useState({
    title: "",
    institution: "",
    date: "",
  });

  const handleBackgroundChange = () => {
    const [name, value] = e.target

  }

  return (
    <form>
      <input
        type="text"
        name="title"
        value={background.title}
        onChange={handleBackgroundChange}
      />
      <input
        type="text"
        name="institution"
        value={background.institution}
        onChange={handleBackgroundChange}
      />
      <input
        type="date"
        name="date"
        value={background.date}
        onChange={handleBackgroundChange}
      />
    </form>
  );
}

export default AcademicBackground;
