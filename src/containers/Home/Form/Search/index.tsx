// Icons
import { IoSearchSharp } from "react-icons/io5";

// Component
import Input from "../../../../components/Form/Input";

export default function Search() {
  return (
    <div className="flex rounded-lg bg-secondary shadow-lg lg:w-[28.125rem]">
      <div className="flex items-center px-6">
        {" "}
        <IoSearchSharp className="stroke h-5 w-5" />
      </div>
      <Input
        placeholder="Search for a country..."
        className="w-full rounded-lg py-4 font-semibold "
      />
    </div>
  );
}
