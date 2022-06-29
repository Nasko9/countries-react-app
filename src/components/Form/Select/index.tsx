import { useEffect, useRef, useState } from "react";

// Icons
import { IoChevronDownOutline } from "react-icons/io5";

interface Option {
  label: string;
  value: string;
}

interface Select {
  name: string;
  defaultValue: string;
  options: Option[];
}

export default function Select({ name, defaultValue, options }: Select) {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOptionClick = (option: Option) => {
    setSelected(option.label);

    if (inputRef.current != null) {
      inputRef.current.value = option.value;
    }
  };

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
        <div className="absolute z-10 mt-1 w-[13.75rem] rounded-lg bg-secondary py-[0.625rem] pl-6 pr-5 shadow-lg">
          {options.map((option) => (
            <div
              key={option.label}
              className="py-[0.313rem]"
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
