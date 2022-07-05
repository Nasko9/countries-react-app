import { useEffect, useState } from "react";
import { Country } from "../../../types/Country";

export default function useBorder(value: any) {
  const [country, setCountry] = useState<Country[]>([]);
  const url = `https://restcountries.com/v3.1/alpha/${value}`;

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
