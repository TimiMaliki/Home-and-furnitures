import React from 'react'
import {FaShoppingCart} from "react-icons/fa"

const Navbar = () => {
  return (
 <nav className='w-full h-24 p-16 bg-white flex justify-between'>
    <div className='Logo'>
     <h2 className='text-black text-4xl'>Maliki</h2>
    </div>

    <div className='pages'>
    <ul className='flex lg:gap-4 cursor-pointer'>
      <li>Home</li>
      <li>Blog</li>
      <li>E-Catalog</li>
      <li>Shop</li>
      <li>CSR</li>
      <li>ShowRoom</li>
      <li>About Us</li>
    </ul>
    </div>

    <div className='cart'>
         <h2>MY ACCOUNT</h2>
         <h3>3D</h3>
         <div className='flex'>
         <FaShoppingCart/>
         <div className='rounded-full bg-red-200 w-2 h-2 relative'>
          <div className='absolute'>0</div>
         </div>
         </div>
    </div>
 </nav>
  )
}

export default Navbar
