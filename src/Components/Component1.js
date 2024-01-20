import React from 'react'
import Phone from '../Utils/Images/Phone.png';
import Land from '../Utils/Images/Land.png';
const Component1 = () => {
  return (
    <div className='flex flex-row mt-12 mb-36 justify-between'>
      {/* Text Box  */}
    <div className='p-4 size-2/5 flex items-center '>
  <div >
    
    {/* Start and Sell Box  */}
    <div className='text-7xl font-helvetica font-bold '>
    <h1>Start today.</h1>
    <h1>Sell tomorrow.</h1>
    </div>
    
    <p className="max-w-md font-Inter font-normal leading-6 ">
      You don’t need an agency to launch a 3D Showroom. Do it yourself. No coding or design experience necessary.
    </p>

    {/* Input Fields */}
    <div className="flex font-sans_pro  justify-between">
    <input type="text" id="first_name" className="bg-custom_formcolor text-custom-landing-input p-2 rounded-lg m-2 w-2/5" placeholder="Full Name*" required/>
    <input type="email" id="company_name" className="bg-custom_formcolor text-custom-landing-input p-2 rounded-lg  m-2 w-2/5" placeholder="Company Name*" required/>
    </div>
    <input type="text" placeholder='Company Website*' className='bg-custom_formcolor text-custom-landing-input p-2 rounded-lg   w-full mt-3 mb-3 ' />
    <button className="text-xs  bg-custom_comp1_green w-full p-2.5 text-white rounded-lg mr-3 ">
      <h1 className='text-sm font-semibold'> Put me in line</h1>
      <p className='text-xs font-normal'>No Commitment</p>
    </button>
    <p className='text-custom_alert_grey'>* fields are mandatory</p>
  </div>
</div>
 
 {/* Images  */}
 <div className='relative '>
  <img src={Land} className="w-full h-full" alt="Land Image" />
  <img src={Phone} className='absolute left-[-150px] bottom-[-190px] ' alt="Phone Image" />
</div>

    </div>
  )
}

export default Component1;
