const Price = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <h2 className="text-[36px] font-medium leading-[48px] mb-[16px]">
          A Price To Suit Everyone
        </h2>
        <p className="text-[16px] font-normal leading-[26px] text[#6F7CB2] mb-[80px] w-[600px] text-center mb-[36px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <h3 className="text-[50px] font-medium leading-[66px] tracking-[1px]">
          $40
        </h3>
        <p className="text-[16px] font-normal leading-[26px] mb-[60px]">
          UI Design Kit
        </p>
        <p className="text-[14px] font-normal leading-[24px] mb-[10px]">
          See, One price. Simple.
        </p>
        <a className="btn btn-sm px-12 bg-[#37447E] text-white hover:bg-[#677cda]">
          Purchase Now
        </a>
      </div>
    </>
  );
};

export default Price;
