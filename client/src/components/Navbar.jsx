const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 w-[1080px] bg-transparent">
        <div className="flex justify-between w-full">
          <ul className="flex text-[#505F98] text-[14px]">
            <li className="mr-6">
              <a href="/">Home</a>
            </li>
            <li className="mr-6">
              <a href="/">About</a>
            </li>
            <li className="mr-6">
              <a href="/">Contact</a>
            </li>
          </ul>
          <a className="btn btn-ghost normal-case text-xl font-black text-[#37447E]">
            Landing
          </a>
          <a className="btn btn-sm px-12 bg-[#37447E] text-white hover:bg-[#677cda]">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
