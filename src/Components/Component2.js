import React from 'react'
import Showroom from '../Utils/Images/Showroom.png'
const Component2 = () => {
  return (
    <div className="bg-custom_nav_comp2_blue my-5">
     {/* Upper part */}
     <div className="flex w-full h-full justify-between">

      {/* text box */}
      <div className="bg-custom_Black flex flex-col mt-5  h-full w-2/5">
        <div className='ml-20 flex flex-wrap pl-20 pt-16 '>
        <h1 className='text-custom_White font-bold ml-2 text-2xl leading-9 font-helvetica mb-5 flex flex-wrap '>Give your online shoppers a better brand experience and level up your customer behaviour insights.</h1>
       <div className='flex flex-col pl-2 mt-8 mb-16'>
       <button className="text-xs font-sans_pro font-semibold  mt-2 mb-3 w-max p-2 rounded-full text-custom_White border-2 border-custom_bordercolor ">Store Builder</button>
       <button className="text-xs font-sans_pro font-semibold  mt-2 mb-3 w-max p-2 rounded-full text-custom_White border-2 border-custom_bordercolor">Customer Journey Visualizations </button>
       <button className="text-xs font-sans_pro font-semibold  mt-2 mb-3 w-max p-2 rounded-full text-custom_White border-2 border-custom_bordercolor">A/B Testing</button>
       <button className="text-xs  font-sans_pro font-semibold  mt-2 mb-3 w-max p-2 rounded-full text-custom_White border-2 border-custom_bordercolor">Amplified Brand</button>
       <button className="text-xs  font-sans_pro font-semibold  p-2 mt-2 w-max mb-5 rounded-full text-custom_White border-2 border-custom_bordercolor">Centralized Management Portal</button>
       </div>
       
        </div>
       
      </div>
     
     {/* Image Box */}
     <div className="relative  bg-custom_nav_comp2_blue  ">
  <img src={Showroom} alt="Showroom Store" className="w-full h-full" />
  {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"> */}
    <p className="p-8 font-helvetica font-medium text-lg leading-6 absolute bottom-0 left-0 right-0  bg-custom_comp2_opaque_blue bg-opacity-80 text-white ">Drag-and-drop products to rearrange store based on data findings</p>
  {/* </div> */}
</div>


     </div>

     {/* Lower part */}
     <div className='mt-8 flex flex-col items-center justify-center'>
  <h1 className="text-4xl font-helvetica  text-center font-bold leading-10  p-2 text-custom_White">Are you ready to create your Showroom?</h1>
  <div className='flex  justify-around font-semibold mb-10 p-4 gap-2'>
    <button className='text-base text-center  bg-white font-sans_pro mb-4 m-1 p-3 rounded-full border-1 border-gray-700'>Get Early Access</button>
    <button className='text-base text-center mb-4 m-1 p-3 font-sans_pro rounded-full text-custom_White border-2 border-white-700'>Plans and Pricing</button>
  </div>

</div>

    </div>
  )
}

export default Component2
