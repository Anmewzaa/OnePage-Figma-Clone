import image from "../images/undraw_mobile_login_ikmv.png";
import icon from "../images/Icon.png";

const Infomation = () => {
  return (
    <div className="mb-[12rem]">
      <div className="flex justify-center items-center">
        <div className="w-[540px]">
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
          <div className="flex">
            <div className="w-[255px]">
              <img src={icon} alt="" className="mb-[14px]" />
              <h3 className="text-[16px] leading-[26px] font-medium">
                Title Goes Here
              </h3>
              <p className="text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{" "}
              </p>
            </div>
            <div className="w-[255px]">
              <img src={icon} alt="" className="mb-[14px]" />
              <h3 className="text-[16px] leading-[26px] font-medium">
                Title Goes Here
              </h3>
              <p className="text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={image} alt="" className="" height={540} />
        </div>
      </div>
    </div>
  );
};

export default Infomation;
