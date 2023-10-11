import Link from 'next/link'
import React from 'react'
import {FaShoppingCart,FaSearch , FaHeart} from "react-icons/fa"

const NavMenu = () => {
  return (
 <nav  className='sticky w-full'>
  <div className='w-full h-24 p-16 bg-white flex justify-between lg:visible sm:invisible'>
    <div className='Logo'>
     <h2 className='text-black text-4xl'>Maliki</h2>
    </div>

    <div className='pages'>
    <ul className='flex lg:gap-4 cursor-pointer text-xl'>
     <Link href="/"> <li className='text-red-500'>Home</li></Link>
     <Link href="/pages/blog"> <li className='duration-200 hover:text-red-600'>Blog</li></Link>
     <Link href=""> <li className='duration-200 hover:text-red-600'>E-Catalog</li></Link>
     <Link href=""> <li className='duration-200 hover:text-red-600'>Shop</li></Link>
     <Link href=""><li className='duration-200 hover:text-red-600'>CSR</li></Link>
     <Link href="">  <li className='duration-200 hover:text-red-600'>ShowRoom</li></Link>
     <Link href=""> <li className='duration-200 hover:text-red-600'>About Us</li></Link>
    
     
     
    
     
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
