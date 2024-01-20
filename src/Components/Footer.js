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
    
       <div className="flex items-center justify-between p-4">
      {/* Left side of the header */}
      <div className="flex items-center ml-40">
        <img src={showroom_icong} alt="Logo" className="mr-2" />
        <p className="text-sm text-center font-sans_pro text-custom_alert_grey ml-4">press@showroom.store</p>
      </div>

      {/* Right side of the header */}
      <div className="flex items-center space-x-4 mr-40">
      <img src={Twitter} alt="Logo" className="mr-2" />
      <img src={Youtube} alt="Logo" className="mr-2" />
      <img src={Linkedin} alt="Logo" className="mr-2" />
      <img src={tiktok} alt="Logo" className="mr-2" />
      <img src={insta} alt="Logo" className="mr-2" />
      </div>
    </div>
    
  )
}

export default Footer
