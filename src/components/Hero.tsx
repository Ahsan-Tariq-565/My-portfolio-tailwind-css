import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div  id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile-picture.JPG)] bg-left lg:bg-[8%] bg-cover mt-[-10px] '
    style={{backgroundSize: "20%"}}>

      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up" >Muhammad Ahsan</p>
            <p data-aos="zoom-in-up" >Tariq</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
