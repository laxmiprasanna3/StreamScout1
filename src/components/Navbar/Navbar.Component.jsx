import React from "react";
import {BiChevronDown, BiMenu, BiSearch} from 'react-icons/bi'
function NavSm(){
  return(
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">Hyderabad <BiChevronDown/></span>
        </div>
        <div className="w-8 h-8">
          <h3 className="text-gray-400">Use App</h3>
        </div>
      </div>
    </>
  );
}

function NavMd(){
  return(
    <>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch/>
        <input type="search" className="w-full bg-transparent border-none focus:outline-none" />
      </div>
    </>
  )
}

function NavLg(){
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://64.media.tumblr.com/6c20f5206af7ad37541b8ae0e74e232c/tumblr_pwmv0bjG2U1vewxszo1_1280.jpg"
              alt="streamscout"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex item-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input type="search" className="w-full bg-transparent border-none focus:outline-none" />
          </div>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-gray-300 text-base flex items-center cursor-pointer hover:text-white ">Hyderabad<BiChevronDown/></span>
        </div>
      </div>
    </>
  );
}
const Navbar = () => {
  return <NavLg />;
};

export default Navbar;
