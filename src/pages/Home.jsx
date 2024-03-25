import BestDeal from "../components/home/BestDeal";
import Carousel from "../components/home/Carousel";
import Dropdown from "../components/shared/Dropdown";
import Navbar from "../components/shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Dropdown />
      <Carousel />
      <BestDeal />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
