import React from 'react';
import showroom_icon from '../Utils/Images/showroom_icon.png'
import { FaBars } from 'react-icons/fa';
const NavBar = () => {
  return (
    <div className=" flex  items-center  justify-between p-4 ">
      {/* Left side of the header */}
      
      <div className="flex items-center mt-6 ml-4 lg:mt-7.5 lg:ml-82.5">
      <FaBars size={25} color="#333" className='mr-1.25 mt-9px block lg:hidden'  />
        <img src={showroom_icon} alt="Logo" className="lg:mr-2 " />
        <p className=" ml-3  w-full font-sans_pro font-normal text-custom_Black  leading-4  text-center hidden lg:block">COMING SOON</p>
      </div>

      {/* Right side of the header */}
      <div className="text-sm font-sans font-semibold flex items-center space-x-8 lg:mr-40">
        <a href='/' className="pt-3.5 pb-3 leading-5 font-semibold text-custom_Black text-center hidden lg:block ">Pricing</a>
        <a href='/' className=" pr-2 pl-2 pt-9px pb-2  lg:pt-3.5 lg:pb-3 lg:pr-4 lg:pl-4  leading-5 font-semibold text-xs item-center text-center bg-custom_nav_comp2_blue  text-custom_White rounded-full">Get Early Access</a>
      </div>
    </div>
  );
}

export default NavBar;
