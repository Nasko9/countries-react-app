// Hook
import useSingleCountry from "../useSingleCountry";

export default function useCountryDetails() {
  const { country } = useSingleCountry();

  const getNativeName = () => {
    if (country.length === 0) {
      return "empty";
    } else {
      let native = country[0].name.nativeName;
      let nativeArr = Object.values(native);
      let nativeCommon;
      nativeArr.map((data) => (nativeCommon = data.common));
      return nativeCommon;
    }
  };

  const getCurrency = () => {
    if (country.length === 0) {
      return "empty";
    } else {
      let curr = country[0].currencies;
      let currArr = Object.values(curr);
      return currArr[0].name;
    }
  };

  const getLanguages = () => {
    if (country.length === 0) {
      return "empty";
    } else {
      let language = country[0].languages;
      let languagesArr = Object.values(language);
      return languagesArr.join(", ");
    }
  };

  return { getCurrency, getNativeName, getLanguages };
}
