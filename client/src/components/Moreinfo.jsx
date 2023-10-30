import Image1 from "../images/undraw_happy_news_hxmt.png";
import Image2 from "../images/undraw_social_influencer_sgsv.png";
import Image3 from "../images/undraw_mention_6k5d.png";

const Moreinfo = () => {
  return (
    <div className="grid gap-[12rem]">
      <div className="flex gap-x-8">
        <img src={Image1} alt="" className="w-1/2" />
        <div className="w-1/2 flex flex-col justify-center ">
          <h2 className="text-[36px] font-medium leading-[48px] text[#091133] mb-[16px]">
            Light, Fast & Powerful
          </h2>
          <p className="text-[16px] font-normal leading-[26px] text[#6F7CB2] mb-[80px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
      <div className="flex gap-x-8">
        <img src={Image2} alt="" className="w-1/2" />
        <div className="w-1/2 flex flex-col justify-center ">
          <h2 className="text-[36px] font-medium leading-[48px] text[#091133] mb-[16px]">
            Light, Fast & Powerful
          </h2>
          <p className="text-[16px] font-normal leading-[26px] text[#6F7CB2] mb-[80px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
      <div className="flex gap-x-8">
        <img src={Image3} alt="" className="w-1/2" />
        <div className="w-1/2 flex flex-col justify-center ">
          <h2 className="text-[36px] font-medium leading-[48px] text[#091133] mb-[16px]">
            Light, Fast & Powerful
          </h2>
          <p className="text-[16px] font-normal leading-[26px] text[#6F7CB2] mb-[80px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moreinfo;
