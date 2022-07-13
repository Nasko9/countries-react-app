// Components
import Select from "../../../components/Form/Select";
import Search from "./Search";

const options = [
  { label: "All Regions", value: "all" },
  { label: "Africa", value: "africa" },
  { label: "America", value: "america" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

export default function Form() {
  return (
    <div className="flex flex-wrap justify-start gap-[2.5rem] py-[2.75rem] xs:mx-24 sm:mx-0 sm:justify-between">
      <Search />

      <Select
        name={"region"}
        defaultValue={"Filter by Region"}
        options={options}
      />
    </div>
  );
}
