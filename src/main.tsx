import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Overview from "./Overview.tsx";

// Making use of the declarative routing provided by react-router (Mostly what I am familar with)
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/overview" element={<Overview />} />
        {/*  Add more routes here as required */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
