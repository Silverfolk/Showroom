import React from 'react';
import showroom_icon from '../Utils/Images/showroom_icon.png'
const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Left side of the header */}
      <div className="flex items-center ml-40 mt-7.5 ml-82.5">
        <img src={showroom_icon} alt="Logo" className="mr-2 " />
        <p className=" ml-4 font-sans_pro font-normal text-custom_Black size-4 leading-4 items-center text-center">COMING SOON</p>
      </div>

      {/* Right side of the header */}
      <div className="text-sm font-sans font-semibold flex items-center space-x-4 mr-40">
        <a href='/' className="leading-5 font-semibold text-custom_Black text-center">Pricing</a>
        <a href='/' className="leading-5 font-semibold text-xs item-center text-center bg-custom_nav_comp2_blue p-2 text-custom_White rounded-full">Get Early Access</a>
      </div>
    </div>
  );
}

export default NavBar;
