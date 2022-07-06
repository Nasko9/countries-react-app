export default function Skeleton() {
  return (
    <div className="flex flex-col justify-between gap-11 pb-56 lg:flex-row">
      <div className="h-96 w-[36rem] animate-pulse bg-gray-300 dark:bg-gray-600"></div>
      <div className="lg:w-[30rem] xl:w-[35rem] 2xl:w-[40rem]">
        <div className="h-9 w-32 rounded-md bg-gray-300 dark:bg-gray-600"></div>
        <div className="mt-5 flex flex-wrap justify-between">
          <div className="mt-4 flex flex-col gap-4">
            <div className="h-6 w-[12.5rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-6 w-[12.5rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-6 w-[12.5rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-6 w-[12.5rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-6 w-[12.5rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="h-6 w-[12.5rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-6 w-[12.5rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-6 w-[12.5rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-3">
          <div className="h-6 w-32 rounded-md bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-10 w-[5.478rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-10 w-[5.478rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-10 w-[5.478rem] rounded-md bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
}
