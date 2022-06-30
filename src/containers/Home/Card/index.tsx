// Types
import { Country } from "../../../types/Country";

export default function Card({
  population,
  name,
  region,
  flags,
  capital,
}: Country) {
  return (
    <div className="h-80 w-[15.625rem] select-none rounded-lg bg-secondary shadow-lg">
      <div className="h-[9.375rem] rounded-t-lg">
        <img
          src={flags.svg}
          alt="flag"
          className="h-[9.375rem] w-[15.625rem] rounded-t-lg object-cover"
        />
      </div>
      <div className="h-[10.625rem] rounded-b-lg px-[1.375rem] pt-[1rem]">
        <h1 className="mb-[0.688rem] text-lg font-bold">{name.common}</h1>
        <p>
          <span className="font-semibold">Population:</span> {population}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
}
