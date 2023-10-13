import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaTiktok,FaLinkedinIn} from "react-icons/fa"

const Navbar = () => {
  return (
   <nav className='overflow-hidden'>
   <div className='socials bg-gray-800 lg:w-full h-10 flex justify-between'>
        <div className='logo-Text pl-0 lg:pl-8 pt-2 text-white '>
          <h2 className='text-sm lg:text-lg invisible lg:visible'>THINK HOME, THINK VENTO</h2>
        </div>

        <div className='flex  pt-2 gap-0 ml-20 lg:ml-0 lg:gap-4 text-white text-lg cursor-pointer'>
          <FaFacebook  className='text-sm lg:text-lg'/>
          <FaTwitter className='text-sm lg:text-lg'/>
          <FaInstagram className='text-sm lg:text-lg'/>
          <FaYoutube className='text-sm lg:text-lg'/>
          <FaLinkedinIn className='text-sm lg:text-lg'/>
          <FaTiktok className='text-sm lg:text-lg'/>

          </div>

        <div className='flex gap-0 lg:gap-2  text-white invisible lg:visible'>
        <div className='border w-0 lg:w-0 -mt-2 bg-white invisible lg:visible '></div>
          <h2 className='text-sm lg:text-lg invisible lg:visible'>CONTACT US</h2>
          <div className='border -mt-2 bg-white invisible lg:visible'></div>
          <h2 className='text-sm lg:text-lg invisible lg:visible'>FAQS</h2>
          <div className='border -mt-2 bg-white invisible lg:visible'></div>
          <h2 className='text-sm lg:text-lg invisible lg:visible'>NEWSLETTER</h2>
        </div>

        </div>

 
   </nav>
  )
}

export default Navbar
