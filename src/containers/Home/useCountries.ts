import { useContext, useEffect, useState } from "react";

// API
import axios from "../../api/axiosInstance";

// Context
import { SearchContext, SearchType } from "./SearchContext";

// Types
import { Country } from "../../types/Country";

export default function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const { query, select } = useContext(SearchContext) as SearchType;

  useEffect(() => {
    (async function () {
      try {
        let url = `all`;
        if (query) {
          url = `/name/${query}`;
        } else if (select) {
          if (select === "all") {
            url = "all";
          } else {
            url = `/region/${select}`;
          }
        }
        const { data: countries } = await axios.get(url);
        setCountries(countries);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query, select]);

  return { countries };
}
