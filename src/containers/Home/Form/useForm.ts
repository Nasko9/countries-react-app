import { useState } from "react";

// Hook
import useDebounce from "../../../hooks/useDebounce";

export default function useForm() {
  const debounce = useDebounce();
  const [query, setQuery] = useState<string>("");

  const inputHandler = (inputValue: string) => {
    let text = inputValue;
    debounce(() => setQuery(text), 500);
  };

  return { inputHandler, query };
}
