"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const newTheme = dark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button onClick={toggle} className="absolute top-4 right-4">
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
