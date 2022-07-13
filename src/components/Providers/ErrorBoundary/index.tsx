import { ErrorBoundary } from "react-error-boundary";

const className =
  "py-3 px-3 items-center justify-center rounded-md bg-secondary shadow-[0px_0_11px_-1px_rgba(0,0,0,0.3)] cursor-pointer";

function ErrorFallback() {
  return (
    <div className="flex h-screen flex-col items-center pt-48 text-primary">
      <p className="pb-4 text-4xl">Looks like something went wrong</p>
      <p className="pb-16 text-3xl">Our team have been informed about this</p>

      <p className="pb-8 text-3xl">Until we resolve this issue you can</p>
      <div>
        <span className={className} onClick={() => window.location.reload()}>
          Refresh this page{" "}
        </span>
        <span className="px-3">or</span>
        <span
          className={className}
          onClick={() => (window.location.href = "/")}
        >
          Go to Home page
        </span>
      </div>
    </div>
  );
}

export default function GlobalErrorBoundary({ children }: any) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}
