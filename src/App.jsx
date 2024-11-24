import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Question1 from "./components/Question1.jsx";
import Question2 from "./components/Question2.jsx";
import Question3 from "./components/Question3.jsx";
import Question4 from "./components/Question4.jsx";
import Question5 from "./components/Question5.jsx";
import Question6 from "./components/Question6.jsx";

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
        <h2 className="text-xl py-4">Challenges</h2>
        {/*  <Question1 /> */}
        {/*  <Question2 /> */}

        {/* <Question3 list={countriesEA} /> */}
        {/*  <Question4 /> */}

        {/* <Question5 /> */}
        <Question6 />
      </div>
    </>
  );
}

export default App;
