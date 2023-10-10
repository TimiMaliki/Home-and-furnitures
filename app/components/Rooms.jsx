'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination} from 'swiper/modules';
import Image from 'next/image'
import   Coin from "../../public/coin.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Rooms = () => {



  return (
    <div className='px-8 '>
    <Swiper
      // install Swiper modules
      dir="rtl"
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >



      <SwiperSlide>
        <div className='grid items-center  text-center w-full h-full '>
          <div className='grid place-content-center'>
          <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
       
          </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
      <div className='grid place-content-center'>
          <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
          </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
      <div className='grid place-content-center'>
          <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
      <div className='grid place-content-center'>
          <Image src={Coin} width={300} height={300}/>
         <p>SOFA SET</p>
          </div>
          </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Rooms

