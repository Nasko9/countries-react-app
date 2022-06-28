import { useEffect, useState } from "react";

export default function useDarkMode() {
  const localStorageMode = localStorage.getItem("mode");

  const [darkMode, setDarkMode] = useState<string>(localStorageMode || "light");

  const mode = darkMode === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(mode);
    root.classList.add(darkMode || "");

    if (typeof window !== "undefined") {
      localStorage.setItem("mode", mode);
    }
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
