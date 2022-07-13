import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// API
import axios from "../../api/axiosInstance";

// Context
import { SearchContext, SearchType } from "./SearchContext";

// Types
import { Country } from "../../types/Country";

export default function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const { query, select } = useContext(SearchContext) as SearchType;
  const navigate = useNavigate();

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
        navigate("/");
      }
    })();
  }, [query, select, navigate]);

  return { countries };
}
