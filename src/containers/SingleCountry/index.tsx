import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// Components
import CountryDetails from "./CountryDetails";
import CountryImage from "./CountryImage";
import Skeleton from "./Skeleton";

// Hook
import useSingleCountry from "./useSingleCountry";

export default function SingleCountry() {
  const { country } = useSingleCountry();

  return (
    <div className="bg-primary text-primary xs:h-full xl:h-screen">
      <div className="container">
        <div className="py-[4.688rem]">
          <Link to="/">
            <div className="flex h-10 w-32 items-center justify-center rounded-md bg-secondary shadow-[0px_0_11px_-1px_rgba(0,0,0,0.3)]">
              <IoArrowBackOutline className="mr-2" />
              Back
            </div>
          </Link>
        </div>

        {country &&
          country.map((data) => (
            <div
              key={data.cca3}
              className="flex flex-col justify-between gap-11 pb-28 lg:flex-row"
            >
              <CountryImage src={data.flags.svg} />

              <CountryDetails
                name={data.name.common}
                population={data.population}
                region={data.region}
                subregion={data.subregion}
                capital={data.capital}
                tld={data.tld}
                borders={data.borders}
              />
            </div>
          ))}
        {!country.length && <Skeleton />}
      </div>
    </div>
  );
}
