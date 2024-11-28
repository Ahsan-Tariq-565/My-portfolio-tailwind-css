import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";



const Navbar = () => {

  return (
    <div className='container mx-auto pt-10'>
        <div className='flex justify-between items-center' >
          <div className='text-2xl font-medium'>Ahsan</div>
            <ul className='gap-8 lg:gap-12 hidden md:flex'>
              <li className='menuLink' ><a href='#hero'>Home</a></li>
              <li className='menuLink'><a href='#about'>About</a></li>
              <li className='menuLink'><a href='#projects'>Projects</a></li>
              <li className='menuLink' ><a href='#skills'>Skills</a></li>
              <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            {/* Mobile menu Icon*/ }
             <AiOutlineMenu className='md:hidden' size={30}/>
           </div> 

        </div>
          
  )
}

export default Navbar
