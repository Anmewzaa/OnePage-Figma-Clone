// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Infomation from "./components/Infomation";
import Moreinfo from "./components/Moreinfo";
import Price from "./components/Price";
import Footer from "./components/Footer";
// Image
import HeroImage from "./images/Hero.png";

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-[1080px] mb-[18rem]">
        <Navbar />
      </div>
      <div className="mx-auto max-w-[1080px] mb-[32rem]">
        <Hero />
        <img
          src={HeroImage}
          alt="Hero image"
          className="absolute top-0 right-0 z-[-100]"
        />
      </div>
      <div className="mx-auto max-w-[1080px] mb-[12rem]">
        <Infomation />
        <Moreinfo />
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-[1080px]">
          <Price />
        </div>
      </div>
      <div className="bg-base-200 text-base-content">
        <Footer />
      </div>
    </>
  );
};

export default App;
