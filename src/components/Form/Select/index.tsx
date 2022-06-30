// Custom Hook
import useSelect from "./useSelect";

// Icons
import { IoChevronDownOutline } from "react-icons/io5";

// Types
import { Option } from "./Types";

interface SelectProps {
  name: string;
  defaultValue: string;
  options: Option[];
}

export default function Select({ name, defaultValue, options }: SelectProps) {
  const { ref, inputRef, open, selected, handleOpen, handleOptionClick } =
    useSelect();

  return (
    <div
      ref={ref}
      className="w-[13.75rem] cursor-pointer select-none rounded-lg bg-secondary"
    >
      <div
        className="flex items-center justify-between rounded-lg py-4 pl-6 pr-5 shadow-lg"
        onClick={handleOpen}
      >
        {selected === "" ? (
          <span>{defaultValue}</span>
        ) : (
          <span>{selected}</span>
        )}

        <input
          type="text"
          name={name}
          ref={inputRef}
          disabled
          className="pointer-events-none hidden select-none"
        />

        <IoChevronDownOutline className={open ? "rotate-0" : "rotate-180"} />
      </div>

      {open && (
        <div className="absolute z-10 mt-1 w-[13.75rem] rounded-lg bg-secondary py-[0.625rem]  shadow-lg">
          {options.map((option) => (
            <div
              key={option.label}
              className="py-[0.313rem] pl-6 pr-5 hover:bg-primary"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
