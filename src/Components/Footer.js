import React from 'react'
import flogo from '../Utils/Images/flogo.png';
import Youtube from '../Utils/Images/Youtube.png';
import Linkedin from '../Utils/Images/in.png';
import Twitter from '../Utils/Images/twitter.png';
import tiktok from '../Utils/Images/tiktok.png';
import insta from '../Utils/Images/insta.png';
import showroom_icong from '../Utils/Images/showroom_icong.png'
const Footer = () => {
  return (
    
       <div className="flex flex-col lg:flex-row ml-4 lg:ml-0 lg:items-center lg:justify-between p-4">
      {/* Left side of the footer  */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:ml-82.5 mt-5 mb-4 lg:mr-148">
        {/*lg:mr-165 changed to  lg:mr-150 */}
        <img src={showroom_icong} alt="Logo" className="h-33px w-45 lg:size-full lg:mr-2" />
        <p className="text-sm lg:ml-20.5 mt:6 lg:mt-2 mb-3px   lg:text-center font-sans_pro text-custom_alert_grey ">press@showroom.store</p>
      </div>

      {/* Right side of the footer  */}
      <div className="flex items-center gap-4 mt:6 mt:0px lg:mr-40">
      <img src={Twitter} alt="Logo"  />
      <img src={Youtube} alt="Logo"  />
      <img src={Linkedin} alt="Logo"  />
      <img src={tiktok} alt="Logo"  />
      <img src={insta} alt="Logo"  />
      </div>
    </div>
    
  )
}

export default Footer
