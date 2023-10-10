'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
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
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: false}}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >



      <SwiperSlide>
        <div className='grid items-center text-center w-full h-full '>
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

export default Rooms

