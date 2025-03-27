"use client"; // if using client components
import React, { useState } from "react";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false); // Initialize state

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode} className="btn btn-ghost">
      {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
