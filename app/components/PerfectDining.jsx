'use client'
import React from 'react'
import Image from "next/image";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Dinner from "../../public/home-Img/Sirius-Yemek-2-kopya-1.png"


const PerfectDining = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full mt-20 overflow-hidden'>

         <div className='w-full h-full text-start px-20'data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1 className='text-gray-300 font-light text-xl mb-4'>Sofa chair</h1>
          <h1 className='text-2xl font-extrabold mb-8'><span className='text-red-600 mr-2 text-2xl font-extrabold'>Best</span>Sofa Sets</h1>
          <p className='text-lg text-gray-500 mb-8'>The Living room is where we spend long hours 
            of the day watching television, reading a book or newspaper,
             relaxing, hosting guests, or enjoying coffee; 
            it stands out as one of the most important and decorated living spaces.</p>

            <button className='rounded w-32 h-10 bg-red-800 hover:bg-red-400'><p className='text-white'>Sofa Set View</p></button>
         </div>

         <div className='w-full h-full' data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
          <Image src={Dinner} width={600} height={300}/>
         </div>
    </div>
  )
}

export default PerfectDining