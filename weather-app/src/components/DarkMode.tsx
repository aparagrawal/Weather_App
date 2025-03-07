import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }:{darkMode:any,setDarkMode:any}) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="btn dark-mode-btn"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
