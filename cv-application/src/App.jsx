import { useState } from "react";
// Alternatively: import React from "react"; useState is an object of react React.useState(initialValue);
import FormSide from "./components/FormSide";
import PreviewSide from "./components/PreviewSide";
import "./index.css";

function App() {
  const [info, setInfo] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const [background, setBackground] = useState([
    {
      title: "",
      institution: "",
      date1: "",
      date2: "",
      id: crypto.randomUUID(),
    },
  ]);

  const [experience, setExperience] = useState([
    {
      role: "",
      company: "",
      date1: "",
      date2: "",
      city: "",
      accomplishments: [],
      id: crypto.randomUUID(),
    },
  ]);

  const previewFonts = ["Arial", "Times New Roman", "Bookman Old Style"];
  const [fontIndex, setFontIndex] = useState(0);

  const handleFontIndex = (e) => {
    const { id } = e.target;
    setFontIndex(id);
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleBackgroundChange = (e, id) => {
    const { name, value } = e.target;
    const newBackground = background.map((background) =>
      background.id === id ? { ...background, [name]: value } : background
    );
    setBackground(newBackground);
  };

  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;
    const newExperience = experience.map((experience) =>
      experience.id === id
        ? {
            ...experience,
            [name]:
              name === "accomplishments"
                ? value.split("\n").filter((line) => line.trim() !== "") // .filter is to ignore empty lines
                : value,
          }
        : experience
    );
    setExperience(newExperience);
  };

  const handleCloseBtn = (e, id, type) => {
    e.preventDefault();
    if (type === "background") {
      // If the condition item.id !== id is true, the item is included in the new array. If false, the item is excluded.
      setBackground(background.filter((item) => item.id !== id));
    } else if (type === "experience") {
      setExperience(experience.filter((item) => item.id !== id));
    }
  };

  const addNewBackground = () => {
    setBackground([
      ...background,
      {
        title: "",
        institution: "",
        date1: "",
        date2: "",
        id: crypto.randomUUID(),
      },
    ]);
  };

  const addNewExperience = () => {
    setExperience([
      ...experience,
      {
        role: "",
        company: "",
        date1: "",
        date2: "",
        city: "",
        accomplishments: [],
        id: crypto.randomUUID(),
      },
    ]);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <h1>CV App</h1>
          <div className="header-buttons">
            <button id="0" type="button" onClick={(e) => handleFontIndex(e)}>
              Font 1
            </button>
            <button id="1" type="button" onClick={(e) => handleFontIndex(e)}>
              Font 2
            </button>
            <button id="2" type="button" onClick={(e) => handleFontIndex(e)}>
              Font 3
            </button>
          </div>
        </div>
      </header>
      <main>
        <FormSide
          info={info}
          background={background}
          experience={experience}
          handleInfoChange={handleInfoChange}
          handleBackgroundChange={handleBackgroundChange}
          handleExperienceChange={handleExperienceChange}
          addNewBackground={addNewBackground}
          addNewExperience={addNewExperience}
          handleCloseBtn={handleCloseBtn}
        />
        <PreviewSide
          info={info}
          background={background}
          experience={experience}
          previewFonts={previewFonts}
          fontIndex={fontIndex}
        />
      </main>
      <footer>
        {" "}
        CV App
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715"
          alt="Github"
          id="github"
          onClick={() => window.open("https://github.com/HardRoof", "_blank")}
        />
      </footer>
    </>
  );
}

export default App;
