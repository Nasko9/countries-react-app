import { useEffect, useState } from "react";

// API
import axios from "../../../api/axiosInstance";

// Types
import { Country } from "../../../types/Country";

export default function useBorder(value: any) {
  const [country, setCountry] = useState<Country[]>([]);

  useEffect(() => {
    (async function () {
      try {
        let url = `alpha/${value}`;
        const { data: country } = await axios.get(url);
        setCountry(country);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [value]);

  return { country };
}
