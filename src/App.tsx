import { Link } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import expressLogo from "/expressjs.svg";

function App() {
  return (
    <div className="mx-auto p-8 text-center h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-center items-center gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="group">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#646cffaa] hover:animate-spin"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" className="group">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#61dafbaa] hover:animate-spin"
            alt="React logo"
          />
        </a>
        <a href="https://expressjs.com" target="_blank" className="group">
          <img
            src={expressLogo}
            className="h-24 p-6 transition-all duration-300 group-hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Express logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
        Vite + React + Express
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Click on the Vite and React logos to learn more
      </p>
      <Link
        to="/overview"
        className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
      >
        View Overview
      </Link>
    </div>
  );
}

export default App;
