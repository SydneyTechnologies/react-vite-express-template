import { useState } from "react";
import { Link } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import expressLogo from "/expressjs.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://expressjs.com" target="_blank">
          <img src={expressLogo} className="logo express" alt="Express logo" />
        </a>
      </div>
      <h1>Vite + React + Express</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/overview" className="docs-link">
        View Overview
      </Link>
    </>
  );
}

export default App;
