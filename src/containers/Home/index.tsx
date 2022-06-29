// Components
import Card from "./Card";
import Form from "./Form";

export default function Home() {
  return (
    <div className="bg-primary text-primary">
      <div className="container">
        <Form />
        <div className="flex flex-wrap justify-center gap-[2.5rem] pb-5 sm:justify-between 2xl:gap-[4.375rem]">
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
    </div>
  );
}

//! Za skeleton kartice: <div className="h-80 w-[15.6rem] rounded-lg bg-secondary"></div>;
