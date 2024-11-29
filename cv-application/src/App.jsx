import { useState } from "react";
 // Alternatively: import React from "react"; useState is an object of react React.useState(initialValue);
import FormSide from "./components/FormSide";
import PreviewSide from "./components/PreviewSide";

import "./index.css";

function App() {
  const text = "testing";
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
