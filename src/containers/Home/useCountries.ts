import { useEffect, useState } from "react";

// API
import axios from "../../api/axiosInstance";

// Types
import { Country } from "../../types/Country";

export default function useCountries({ query }: any) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    (async function () {
      try {
        let url = `all`;
        if (query) {
          url = `/name/${query}`;
        }
        const { data: countries } = await axios.get(url);
        setCountries(countries);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

  return { countries };
}
