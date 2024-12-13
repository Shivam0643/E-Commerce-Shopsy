import React, { useEffect, useState } from "react";
import LightButton from "../assets/website/light-mode-button.png"; // Update with the actual path
import DarkButton from "../assets/website/dark-mode-button.png"; // Update with the actual path

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="Light Mode"
        onClick={() => setTheme("dark")}
        className={`w-12 cursor-pointer transition-all absolute duration-300 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="Dark Mode"
        onClick={() => setTheme("light")}
        className={`w-12 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default Darkmode;

  
  


