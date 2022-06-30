import React, { useEffect, useRef, useState } from "react";

// Types
import { Option } from "./Types";

export default function useSelect() {
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

  return {
    ref,
    inputRef,
    open,
    setOpen,
    selected,
    setSelected,
    handleOpen,
    handleOptionClick,
  };
}
