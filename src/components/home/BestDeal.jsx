import Card from "../shared/Card";

const BestDeal = () => {
  return (
    <div className="container mx-auto my-10 lg:my-20">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-center">
        Discover Our Best Deals
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
        sollicitudin
      </p>
      <div className="container px-6 py-6 md:py-10 lg:py-16 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4">
            <Card />
          </div>
          <div className="col-span-4"><Card /></div>
          <div className="col-span-4"><Card /></div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
