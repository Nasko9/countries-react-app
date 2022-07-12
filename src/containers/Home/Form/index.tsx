// Components
import Select from "../../../components/Form/Select";
import Search from "./Search";

// Types
import { InputProps } from "./Types";

const options = [
  { label: "All Regions", value: "all" },
  { label: "Africa", value: "africa" },
  { label: "America", value: "america" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

export default function Form({ inputHandler }: InputProps) {
  return (
    <div className="flex flex-wrap justify-start gap-[2.5rem] py-[2.75rem] sm:justify-between">
      <Search inputHandler={inputHandler} />

      <Select
        name={"region"}
        defaultValue={"Filter by Region"}
        options={options}
      />
    </div>
  );
}
