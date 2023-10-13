import React from 'react'
import Image from "next/image";
import Coin from "../../public/coin.jpg";

const BestSofa = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full mt-20'>

         <div className='lg:w-full lg:h-full text-start px-20'>
          <h1 className='text-gray-300 font-light text-xl mb-4'>Sofa chair</h1>
          <h1 className='text-sm lg:text-2xl  font-extrabold mb-8'><span className='text-red-600 mr-2 text-2xl font-extrabold'>Best</span>Sofa Sets</h1>
          <p className='text-lg text-gray-500 mb-8'>The Living room is where we spend long hours 
            of the day watching television, reading a book or newspaper,
             relaxing, hosting guests, or enjoying coffee; 
            it stands out as one of the most important and decorated living spaces.</p>

            <button className='rounded w-32 h-10 bg-red-800 hover:bg-red-400'><p className='text-white'>Sofa Set View</p></button>
         </div>

         <div className='w-full h-full'>
          <Image src={Coin} width={400} height={300}/>
         </div>
    </div>
  )
}

export default BestSofa