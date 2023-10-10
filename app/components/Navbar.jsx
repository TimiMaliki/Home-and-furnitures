import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaTiktok} from "react-icons/fa"

const Navbar = () => {
  return (
   <nav className='w-full h-40 bg-black'>
   <div className='socials bg-gray-800 w-full h-10 flex justify-between'>
        <div className='logo-Text pl-8 pt-2 text-white'>
          <h2>THINK HOME, THINK VENTO</h2>
        </div>

        <div className='flex px-44 pt-2 gap-4 text-white text-2xl cursor-pointer'>
          <FaFacebook  className=''/>
          <FaTwitter/>
          <FaInstagram/>
          <FaYoutube/>
          <FaTiktok/>
        </div>
   </div>
   </nav>
  )
}

export default Navbar
