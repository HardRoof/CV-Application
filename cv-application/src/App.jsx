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

  const [background, setBackground] = useState({
    title: "",
    institution: "",
    date: "",
  });

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    date: "",
    city: "",
    phone: "",
    accomplishments: "",
  });

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleBackgroundChange = (e) => {
    const { name, value } = e.target;
    setBackground({ ...background, [name]: value });
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  return (
    <>
      <header>
        <div className="header-content">
          <h1>CV App</h1>
          <div className="header-buttons">
            <button>Font 1</button>
            <button>Font 2</button>
            <button>Font 3</button>
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
        />
        <PreviewSide
          info={info}
          background={background}
          experience={experience}
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
