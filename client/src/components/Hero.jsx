const Hero = () => {
  return (
    <>
      <div className="w-[539px]">
        <div className="mb-[69px]">
          <h2 className="text-[50px] w-[539px] font-medium leading-[66px] mb-[20px]">
            Introduce Your Product Quickly & Effectively
          </h2>
          <p className="text-[18px] font-normal leading-[30px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
        <div>
          <a
            href="/"
            className="btn btn-sm px-12 mr-4 bg-[#37447E] text-white hover:bg-[#677cda]"
          >
            Purchase UI Kit
          </a>
          <a href="/" className="btn  btn-outline btn-sm px-12">
            Learn more
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
