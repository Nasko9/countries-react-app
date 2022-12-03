import { Link } from "react-router-dom";

// Icons
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

// Custom Hook
import useDarkMode from "./useDarkMode";

const classes = "flex select-none items-center cursor-pointer";

export default function Header() {
  const { darkMode, handleModeSwitch } = useDarkMode();
  console.log(darkMode);
  return (
    <div className="bg-secondary text-primary shadow-lg">
      <div className="container flex justify-between">
        <Link to="/">
          <div className="py-7 text-lg font-bold sm:text-2xl">
            Where in the world?
          </div>
        </Link>
        {darkMode === "light" ? (
          <div className={classes} onClick={() => handleModeSwitch()}>
            <IoMoonOutline />{" "}
            <span className="ml-2 text-sm font-semibold sm:text-base">
              Dark Mode
            </span>
          </div>
        ) : (
          <div className={classes} onClick={() => handleModeSwitch()}>
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
