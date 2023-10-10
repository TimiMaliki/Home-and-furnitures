import React from 'react'
import {FaShoppingCart,FaSearch , FaHeart} from "react-icons/fa"

const NavMenu = () => {
  return (
 <nav  className='sticky'>
  <div className='w-full h-24 p-16 bg-white flex justify-between'>
    <div className='Logo'>
     <h2 className='text-black text-4xl'>Maliki</h2>
    </div>

    <div className='pages'>
    <ul className='flex lg:gap-4 cursor-pointer text-xl'>
      <li className='text-red-500'>Home</li>
      <li className='duration-200 hover:text-red-600'>Blog</li>
      <li className='duration-200 hover:text-red-600'>E-Catalog</li>
      <li className='duration-200 hover:text-red-600'>Shop</li>
      <li className='duration-200 hover:text-red-600'>CSR</li>
      <li className='duration-200 hover:text-red-600'>ShowRoom</li>
      <li className='duration-200 hover:text-red-600'>About Us</li>
    </ul>
    </div>

    <div className='cart flex  text-lg gap-4 cursor-pointer'>
         <h2>MY ACCOUNT</h2>
         <h3>3D</h3>

         <div className='flex text-2xl lg:gap-2'>
         <FaShoppingCart className='text-gray-400'/>
         <div className='rounded-full bg-red-200 w-5 h-5 relative'>
          <div className='absolute text-sm pl-1.5'><p>0</p></div>
         </div>
         </div>

         <FaSearch className='text-2xl'/>

         <div className='flex text-2xl'>
         <FaHeart className='text-gray-400'/>
         <div className='rounded-full bg-red-200  w-5 h-5  relative -mt-3 lg:-translate-x-2'>
          <div className='absolute text-sm pl-1.5 '><p>0</p></div>
         </div>
         </div>

    </div>
    </div>
 </nav>
  )
}

export default NavMenu
