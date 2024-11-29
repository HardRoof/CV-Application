import { useState } from "react";
 // Alternatively: import React from "react"; useState is an object of react React.useState(initialValue);
 import GeneralInfo from "./components/GeneralInfo";
 import AcademicBackground from "./components/AcademicBackground";
 import JobExperience from "./components/JobExperience";

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
		const {name, value} = e.target;
		setInfo({...info, [name]: value});
	};

  const handleBackgroundChange = () => {
    const [name, value] = e.target;
    setBackground({ ...background, [name]: value });
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  return (
    <>
      <header>CV App</header>
      <main>
        <FormSide />
        <PreviewSide />
      </main>
      <footer>CV App "Github logo"</footer>
    </>
  );
}

export default App;
