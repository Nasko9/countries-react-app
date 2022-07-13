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
        <div className="flex flex-wrap justify-center gap-[2.5rem] pb-5 sm:justify-between 2xl:gap-[4.375rem]">
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
