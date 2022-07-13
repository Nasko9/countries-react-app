import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// API
import axios from "../../api/axiosInstance";

// Types
import { Country } from "../../types/Country";

export default function useSingleCountry() {
  const [country, setCountry] = useState<Country[]>([]);
  const { name }: any = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        let url = `alpha/${name}`;
        const { data: country } = await axios.get(url);
        setCountry(country);
      } catch (error) {
        navigate("/");
      }
    })();
  }, [name, navigate]);

  return { country };
}
