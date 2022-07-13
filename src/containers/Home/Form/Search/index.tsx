import { useContext } from "react";
// Icons
import { IoSearchSharp } from "react-icons/io5";

// Context
import { SearchContext, SearchType } from "../../SearchContext";

export default function Search() {
  const { inputHandler } = useContext(SearchContext) as SearchType;

  return (
    <div className="flex rounded-lg bg-secondary shadow-lg lg:w-[28.125rem]">
      <div className="flex items-center px-6">
        {" "}
        <IoSearchSharp className="stroke h-5 w-5" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full rounded-lg bg-secondary py-4 font-semibold focus:outline-none"
        onChange={(e) => inputHandler(e.target.value)}
      />
    </div>
  );
}
