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
        <div className="cards-section flex flex-wrap gap-x-[5.8rem] gap-y-20 pb-5 ">
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
