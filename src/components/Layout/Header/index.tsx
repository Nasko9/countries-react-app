// Icons
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

// Custom Hook
import useDarkMode from "./useDarkMode";

export default function Header() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="bg-secondary text-primary shadow-[0_6px_5px_-5px_rgba(0,0,0,0.1)]">
      <div className="container flex justify-between">
        <div className="py-7 text-lg font-bold sm:text-2xl">
          Where in the world?
        </div>
        {darkMode === "light" ? (
          <div
            className="flex items-center"
            onClick={() => setDarkMode("dark")}
          >
            <IoMoonOutline />{" "}
            <span className="ml-2 text-sm font-semibold sm:text-base">
              Dark Mode
            </span>
          </div>
        ) : (
          <div
            className="flex items-center"
            onClick={() => setDarkMode("light")}
          >
            <IoSunnyOutline />{" "}
            <span className="ml-2 text-sm font-semibold sm:text-base">
              Light Mode
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
