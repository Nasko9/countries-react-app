import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<string>("light");

  useEffect(() => {
    const root = document.querySelector("html");

    if (localStorage.getItem("mode") === "dark") {
      root?.classList.add("dark");
      setDarkMode("dark");
    } else {
      root?.classList.remove("dark");
      setDarkMode("light");
    }
  }, [darkMode]);

  const handleModeSwitch = () => {
    if (localStorage.getItem("mode") === "light") {
      setDarkMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setDarkMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  return { darkMode, handleModeSwitch };
}
