export default function Card() {
  return (
    <div className="h-80 w-[15.625rem] select-none rounded-lg bg-secondary shadow-lg">
      <div className="h-[9.375rem] rounded-t-lg bg-red-700"></div>
      <div className="h-[10.625rem] rounded-b-lg px-[1.375rem] pt-[1rem]">
        <h1 className="mb-[0.688rem] text-lg font-bold">Brazil</h1>
        <p>
          <span className="font-semibold">Population:</span> 206.135.893
        </p>
        <p>
          <span className="font-semibold">Region:</span> Americas
        </p>
        <p>
          <span className="font-semibold">Capital:</span> Brasilia
        </p>
      </div>
    </div>
  );
}
