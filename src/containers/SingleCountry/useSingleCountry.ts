import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Types
import { Country } from "../../types/Country";

export default function useSingleCountry() {
  const [country, setCountry] = useState<Country[]>([]);
  const { name }: any = useParams();
  const url = `https://restcountries.com/v3.1/alpha/${name}`;

  useEffect(() => {
    async function getData() {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setCountry(data));
    }

    getData();
  }, [url]);

  return { country };
}
