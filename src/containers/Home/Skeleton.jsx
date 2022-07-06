function SkeletonCard() {
  return (
    <div className="h-80 w-[15.6rem] animate-pulse rounded-lg bg-secondary">
      <div className="h-[9.375rem] w-[15.625rem] rounded-t-lg bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-[10.625rem] rounded-b-lg px-[1.375rem] pt-[1rem]">
        <div className="mb-[0.688rem] h-6 w-28 rounded-md bg-gray-300 dark:bg-gray-600"></div>
        <div className="mb-[0.313rem] h-6 w-36 rounded-md bg-gray-300 dark:bg-gray-600"></div>
        <div className="mb-[0.313rem] h-6 w-36 rounded-md bg-gray-300 dark:bg-gray-600"></div>
        <div className="mb-[0.313rem] h-6 w-36 rounded-md bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </div>
  );
}

export default function Skeleton() {
  const cardList = [];

  for (let i = 0; i < 12; i++) {
    cardList.push(<SkeletonCard key={i} />);
  }

  return <>{cardList}</>;
}
