import { createContext, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export interface SearchType {
  query: string;
  select: string;
  inputHandler: (inputValue: string) => void;
  selectHandler: (selectValue: string) => void;
}

export const SearchContext = createContext<SearchType | null>(null);

export default function SearchContextProvider({ children }: any) {
  const debounce = useDebounce();
  const [query, setQuery] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  const inputHandler = (inputValue: string) => {
    let text = inputValue;
    debounce(() => setQuery(text), 500);
  };

  const selectHandler = (selectValue: string) => {
    setSelect(selectValue);
  };

  return (
    <SearchContext.Provider
      value={{ query, select, inputHandler, selectHandler }}
    >
      {children}
    </SearchContext.Provider>
  );
}
