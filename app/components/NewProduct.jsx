'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import   Coin from "../../public/coin.jpg"
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const NewProduct = () => {



  return (
    <div className='px-20  w-full h-full '>
  <div className='w-30 h-26 mt-20 items-center text-center '>
        <h2 className='text-lg font-black text-3xl mb-4'>NewProduct</h2>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >



      <SwiperSlide>
        <div className='grid items-center text-center w-full h-96'>
        <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
        <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
        <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
      </SwiperSlide>

     
      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
        <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
        <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
        <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
      </SwiperSlide>



    </Swiper>
   

    </div>
  )
}

export default NewProduct
