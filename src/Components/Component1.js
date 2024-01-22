import React from 'react';
import Phone from '../Utils/Images/Phone.png';
import Land from '../Utils/Images/Land.png';

const Component1 = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:mt-19 lg:mb-36 justify-between'>
      {/* Text Box */}
      <div className='mt-20.5 ml-5 cs:ml-8 cs:mt-25 lg:ml-82.5 mb-11.5 lg:mb-0 w-258px cs:size-140.5 lg:size-2/5 flex items-center cs:justify-center '>
        <div>
          {/* Start and Sell Box */}
          <div className='text-7xl font-helvetica font-bold'>
            <h1>Start today.</h1>
            <h1>Sell tomorrow.</h1>
          </div>

          <p className="max-w-md mt-2 md:mt-6 mb-6 font-Inter font-normal leading-6">
            You don’t need an agency to launch a 3D Showroom. Do it yourself. No coding or design experience necessary.
          </p>

          {/* Input Fields */}
          <div className="flex font-sans_pro flex-wrap">
            <input type="text" id="first_name" className="w-175px h-10.5 mr-4 lg:w-50 lg:h-12.5 bg-custom_formcolor text-custom-landing-input pt-3.5 pl-4 pb-3 rounded-md" placeholder="Full Name*" required />
            <input type="email" id="company_name" className="w-175px h-10.5 lg:w-50 lg:h-12.5 bg-custom_formcolor text-custom-landing-input pt-3.5 pl-4 pb-3 rounded-md" placeholder="Company Name*" required />
          </div>

          {/* Full box */}
          <div className='flex flex-col'>
            <input type="text" placeholder='Company Website*' className='w-358px h-10.5 lg:h-12.5 lg:w-104 bg-custom_formcolor text-custom-landing-input pt-3.5 pl-4 pb-3 pr-25 rounded-md mt-4 mb-4' />
            <button className="text-xs w-358px h-10.5 lg:w-104 lg:h-13 bg-custom_comp1_green pl-32.5 pr-32.5 lg:pt-2 lg:pb-2 text-white rounded-lg lg:mr-3">
              <h1 className='text-sm font-semibold'> Put me in line</h1>
              <p className='text-xs font-normal'>No Commitment</p>
            </button>
          </div>
          
          <p className='text-custom_alert_grey mt-2'>* fields are mandatory</p>
        </div>
      </div>

      {/* Images */}
      <div className='relative ml-25 md:ml-37.5'>
        <img src={Land} className="w-full h-296px cs:h-full" alt="Land Image" />
        <img src={Phone} className='absolute left-[-50px] bottom-[-60px] h-259px cs:h-611px md:left-[-44] cs:bottom-[-200px]' alt="Phone Image" />
        {/* top-32 instead of bottom-[-192px] */}
      </div>
    </div>
  );
};

export default Component1;
