import { Card } from "./Card";

export const CardList = () => {
  return (
    <>
      <div className=" container mx-auto pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-20 px-0 mx-auto justify-items-center ">
          <Card />
        </div>
      </div>
    </>
  );
};
