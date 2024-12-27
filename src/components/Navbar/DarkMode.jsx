import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
const DarkMode = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => settheme("light")} />
      ) : (
        <BiSolidMoon onClick={() => settheme("dark")} />
      )}
    </div>
  );
};

export default DarkMode;
