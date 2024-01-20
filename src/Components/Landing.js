import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import Component1 from './Component1';
import Component2 from './Component2';
const Landing = () => {
  return (
    <div>
      <NavBar/>
      <Component1 />
      <Component2/>
      <Footer/>
    </div>
  )
}

export default Landing
