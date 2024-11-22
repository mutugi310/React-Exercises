import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Question1 from "./components/Question1.jsx";
import Question2 from "./components/Question2.jsx";
import Question3 from "./components/Question3.jsx";

function App() {
  let countriesEA = [
    "Kenya",
    "uganda",
    "Tanzania",
    "Rwanda",
    "Burudi",
    " SouthSudan",
    "DRC Congo",
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/*  <Question1 /> */}
        {/*  <Question2 /> */}

        <Question3 list={countriesEA} />
      </div>
      <p className="read-the-docs">Challenge</p>
    </>
  );
}

export default App;
