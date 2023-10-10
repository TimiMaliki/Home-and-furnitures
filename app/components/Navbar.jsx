import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaTiktok,FaLinkedin,FaLinkedinIn} from "react-icons/fa"

const Navbar = () => {
  return (
   <nav className='w-full h-40 bg-black'>
   <div className='socials bg-gray-800 w-full h-10 flex justify-between'>
        <div className='logo-Text lg:pl-8 pt-2 text-white visible sm:invisible md:visible lg:visible'>
          <h2>THINK HOME, THINK VENTO</h2>
        </div>

        <div className='flex   pt-2 gap-4 text-white text-lg cursor-pointer'>
          <FaFacebook  className=''/>
          <FaTwitter/>
          <FaInstagram/>
          <FaYoutube/>
          <FaLinkedinIn/>
          <FaTiktok/>

        <div className='flex gap-2  text-white   visible sm:invisible md:visible lg:visible'>
        <div className='border  -mt-2 bg-white '></div>
          <h2 className=''>CONTACT US</h2>
          <div className='border -mt-2 bg-white'></div>
          <h2 className=''>FAQS</h2>
          <div className='border -mt-2 bg-white'></div>
          <h2 className=''>NEWSLETTER</h2>
        </div>

        </div>

   </div>
   </nav>
  )
}

export default Navbar
