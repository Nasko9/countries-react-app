// Components
import Card from "./Card";

export default function Home() {
  return (
    <div className="h-screen bg-primary text-primary">
      <div className="container flex flex-wrap justify-center gap-[2.5rem] py-5 sm:justify-between sm:gap-[4.375rem]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

//! Za skeleton kartice: <div className="h-80 w-[15.6rem] rounded-lg bg-secondary"></div>;
