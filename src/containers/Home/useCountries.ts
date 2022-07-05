import { useEffect, useState } from "react";

// Types
import { Country } from "../../types/Country";

const url = "https://restcountries.com/v3.1/all";

export default function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    }

    getData();
  }, []);

  return { countries };
}
