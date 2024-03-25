import { IoBedOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 relative">
      {/*  <!--  Image --> */}
      <figure>
        <img
          src="https://picsum.photos/id/69/800/600"
          alt="card image"
          className="aspect-video w-full"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="p-6">
        <p className="w-fit bg-slate-500 text-white p-1 uppercase text-xs absolute top-4 right-4">for sale</p>
        <header className="">
          <h3 className="text-xl font-medium text-slate-700">
            Light And Modern Apartment
          </h3>
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 text-lg text-slate-600">
              <div className="col-span-5">
                <p className="text-blue-400">$4,500/mo</p>
              </div>
              <div className="col-span-7 flex justify-between">
                <div className="flex items-center justify-between"><IoBedOutline /> <span>&nbsp;&nbsp; 2</span></div>
                <div className="flex items-center justify-between"><IoBedOutline /> <span>&nbsp;&nbsp; 2</span></div>
                <div className="flex items-center justify-between"><IoBedOutline /> <span>&nbsp;&nbsp; 2</span></div>
              </div>
            </div>
        </header>
      </div>
    </div>
  );
};

export default Card;
