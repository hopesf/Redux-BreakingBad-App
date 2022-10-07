const Navbar = () => {
  return (
    <div className="w-full py-4 ">
      <div className="px-2 lg:px-5 lg:max-w-7xl  mx-auto flex flex-row justify-between">
        {/* logo */}
        <span className="text-sm cursor-pointer hover:bg-white hover:pl-2 hover:py-1 hover:text-danger-500 group hover:p-0 lg:text-3xl text-white p-1 whitespace-nowrap rounded font-bold">
          Breaking{' '}
          <span className="bg-white text-sm group-hover:bg-black group-hover:text-white px-2 py-1 rounded group-hover:rounded-none lg:text-3xl text-danger-500  ">
            Bad
          </span>
        </span>

        {/* menu side */}

        <ul className="flex flex-row items-center text-center space-x-2 lg:space-x-10">
          <li className="text-sm lg:text-lg text-white font-semibold hover:bg-white hover:text-black hover:text-lg p-2 cursor-pointer rounded">
            Characters
          </li>
          <li className="text-sm lg:text-lg text-white font-semibold hover:bg-white hover:text-black hover:text-lg p-2 cursor-pointer rounded">
            Episodes
          </li>
          <li className="text-sm lg:text-lg text-white font-semibold hover:bg-white hover:text-black hover:text-lg p-2 cursor-pointer rounded">
            Quotes
          </li>
          <li className="text-sm lg:text-lg text-white font-semibold hover:bg-white hover:text-black hover:text-lg p-2 cursor-pointer rounded">
            Deaths
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
