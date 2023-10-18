'use client'
import React from 'react'
import Image from "next/image";
import Sofa from "../../public/home-Img/FUBA-KOSE-KOLTUK-2.jpg";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSofa = () => {
 useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full mt-20 overflow-hidden'>

         <div className='lg:w-full lg:h-full text-start px-20' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1 className=' text-gray-900 lg:text-gray-300 font-bold lg:font-light text-lg lg:text-xl mb-4'>Sofa chair</h1>
          <h1 className='text-sm lg:text-2xl  font-extrabold mb-8' ><span className='text-red-600 mr-2  text-lg lg:text-2xl font-bold lg:font-extrabold'>Best</span>Sofa Sets</h1>
          <p className='text-md lg:text-lg text-gray-800 lg:text-gray-500 mb-8'>The Living room is where we spend long hours 
            of the day watching television, reading a book or newspaper,
             relaxing, hosting guests, or enjoying coffee; 
            it stands out as one of the most important and decorated living spaces.</p>

            <button className='rounded w-32 h-10 bg-red-800 hover:bg-red-400'><p className='text-white'>Sofa Set View</p></button>
         </div>

         <div className='w-full h-full' data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
          <Image src={Sofa} width={700} height={300} alt="..."/>
         </div>
    </div>
  )
}

export default BestSofa