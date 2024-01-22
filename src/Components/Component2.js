import React from 'react';
import Showroom from '../Utils/Images/Showroom.png';

const Component2 = () => {
  return (
    <div className="bg-custom_nav_comp2_blue w-full mt-97px cs:mt-67.5">
      {/* Upper part */}
      <div className="flex flex-col lg:flex-row w-full h-full justify-between">
        {/* Text box */}
        <div className="bg-custom_Black flex flex-col mt-10 h-full w-full lg:w-787px">
          <div className='mt-13 ml-5 md:ml-83.5 md:mt-13 md:mr-20.5 flex flex-wrap '>
            <h1 className='text-custom_White font-bold mt-13 text-2xl leading-9 font-helvetica flex flex-wrap '>Give your online shoppers a better brand experience and level up your customer behavior insights.</h1>
            <div className='flex flex-col space-y-4 md:space-y-6 mt-4 md:mt-8 md:mb-16 mb-33px'>
              <button className="text-xs font-sans_pro font-semibold mt-6 w-max pl-21px pt-2 pr-4.5 pb-7px rounded-full text-custom_White border-2 border-custom_bordercolor">Store Builder</button>
              <button className="text-xs font-sans_pro font-semibold w-max pl-21px pt-2 pr-4.5 pb-7px rounded-full text-custom_White border-2 border-custom_bordercolor">Customer Journey Visualizations</button>
              <button className="text-xs font-sans_pro font-semibold w-max pl-21px pt-2 pr-4.5 pb-7px rounded-full text-custom_White border-2 border-custom_bordercolor">A/B Testing</button>
              <button className="text-xs font-sans_pro font-semibold w-max pl-21px pt-2 pr-4.5 pb-7px rounded-full text-custom_White border-2 border-custom_bordercolor">Amplified Brand</button>
              <button className="text-xs font-sans_pro font-semibold w-max pl-21px pt-2 pr-4.5 pb-7px mb-25 rounded-full text-custom_White border-2 border-custom_bordercolor">Centralized Management Portal</button>
            </div>
          </div>
        </div>
        {/* Image Box */}
        <div className="relative bg-custom_nav_comp2_blue  ">
          <img src={Showroom} alt="Showroom Store" className="w-full h-full" />
          <p className="pl-5 md:pl-13 pt-49px pb-13 h-31 font-helvetica font-medium text-lg leading-6 absolute bottom-0 left-0 right-0 bg-custom_comp2_opaque_blue bg-opacity-80 text-white ">Drag-and-drop products to rearrange store based on data findings</p>
        </div>
      </div>

      {/* Lower part */}
      <div className='flex flex-col items-center justify-center'>
        <h1 className="text-4xl mt-10 ml-77px mr-77px md:mt-119px md:ml-129 md:mr-129 font-helvetica text-center font-bold leading-10 text-custom_White">Are you ready to create your Showroom?</h1>
        <div className='flex justify-around font-semibold mt-33px mb-39px md:mb-30 gap-2'>
          <button className='text-xs text-center bg-white font-sans_pro mr-3 md:mr-5 pl-37px pr-37px pt-3.5 pb-13px rounded-full border-1 border-gray-700'>Get Early Access</button>
          <button className='text-xs text-center pl-37px pr-37px pt-3.5 pb-13px font-sans_pro rounded-full text-custom_White border-2 border-white-700'>Plans and Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default Component2;
