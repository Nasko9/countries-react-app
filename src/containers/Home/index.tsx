// Components
import Card from "./Card";
import Form from "./Form";
import Skeleton from "./Skeleton";

// Hook
import useCountries from "./useCountries";

export default function Home() {
  const { countries } = useCountries();

  return (
    <div className="bg-primary text-primary">
      <div className="container">
        <Form />
        <div className="cards-section flex flex-wrap gap-y-20 pb-5 xs:mx-24 sm:mx-0 sm:gap-x-[5.7rem] md:gap-x-[8.5rem] lg:gap-x-[6.5rem] xl:gap-x-[3.8rem] 2xl:gap-x-[5.8rem]">
          {countries &&
            countries.map((country) => (
              <Card key={country.cca3} {...country} />
            ))}
          {!countries.length && <Skeleton />}
        </div>
      </div>
    </div>
  );
}
