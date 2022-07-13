import { Link } from "react-router-dom";

// Icon
import { IoArrowBackOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center pt-48 text-primary">
      <p className="pb-16 text-3xl">Page Not Found</p>

      <p className="text-4xl">The link might be corrupted</p>
      <p className="pb-16 text-3xl">or the page may have been removed</p>
      <Link to="/">
        <div className="flex h-10 w-40 items-center justify-center rounded-md bg-secondary shadow-[0px_0_11px_-1px_rgba(0,0,0,0.3)]">
          <IoArrowBackOutline className="mr-2" />
          Go back Home
        </div>
      </Link>
    </div>
  );
}
