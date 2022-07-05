// Hook
import useCountryDetails from "./useCountryDetails";

// Types
import { Details } from "../Types";
import Border from "../Border";

export default function CountryDetails({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  borders,
}: Details) {
  const { getCurrency, getNativeName, getLanguages } = useCountryDetails();

  return (
    <div className="h-96lg:w-[30rem] xl:w-[35rem] 2xl:w-[40rem]">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="mt-5 flex flex-wrap justify-between">
        <div className="mt-4 flex flex-col gap-4">
          <p>
            <span className="font-semibold">Native name: </span>
            {getNativeName()}
          </p>
          <p>
            <span className="font-semibold">Population: </span>{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">Subregion: </span>
            {subregion}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <p>
            <span className="font-semibold">Top Level Domain: </span>
            {tld}
          </p>
          <p>
            <span className="font-semibold">Currencies: </span> {getCurrency()}
          </p>
          <p>
            <span className="font-semibold">Languages: </span> {getLanguages()}
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-3">
        <span className="font-semibold"> Border Countries:</span>

        {borders
          ? borders.map((border) => <Border value={border} key={border} />)
          : "No Borders"}
      </div>
    </div>
  );
}
