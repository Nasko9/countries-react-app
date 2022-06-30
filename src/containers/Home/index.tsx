// Components
import Card from "./Card";
import Form from "./Form";
import useCountries from "./useCountries";

export default function Home() {
  const { countries } = useCountries();

  return (
    <div className="bg-primary text-primary">
      <div className="container">
        <Form />
        <div className="flex flex-wrap justify-center gap-[2.5rem] pb-5 sm:justify-between 2xl:gap-[4.375rem]">
          {countries.map((country) => (
            <Card key={country.ccn3} {...country} />
          ))}
        </div>
      </div>
    </div>
  );
}

//! Za skeleton kartice: <div className="h-80 w-[15.6rem] rounded-lg bg-secondary"></div>;
