import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  // Set the initial theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply or remove the dark mode class based on state
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full flex items-center gap-2 transition-colors duration-300 ${
        darkMode ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      {darkMode ? <BiSolidSun /> : <BiSolidMoon />}
    </button>
  );
}
