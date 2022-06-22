import { IoMoonOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="container flex justify-between">
      <div className="py-7 text-2xl font-bold">Where in the world?</div>
      <div className="flex items-center">
        <IoMoonOutline /> <span className="ml-2 font-semibold">Dark Mode</span>
      </div>
    </div>
  );
}
