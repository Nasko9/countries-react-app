import { Link } from "react-router-dom";
import useBorder from "./useBorder";

export default function Border({ value }: any): JSX.Element {
  const { country } = useBorder(value);

  return (
    <>
      {country.map((data: any) => (
        <Link to={`/${data.cca3}`} key={data.cca3}>
          <div className="rounded-md bg-secondary px-5 py-2 shadow-[0_0_6px_-1px_rgba(0,0,0,0.3)]">
            {data.name.common}
          </div>
        </Link>
      ))}
    </>
  );
}
