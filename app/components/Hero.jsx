
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation, HashNavigation} from 'swiper/modules';
import Image from 'next/image'
import   Coin from "../../public/coin.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <div className=''>
    <Swiper
   spaceBetween={30}
   hashNavigation={{
     watchState: true,
   }}
   pagination={{
     clickable: true,
   }}
   navigation={true}
   modules={[Pagination, Navigation, HashNavigation]}
   className="mySwiper"
  >

<SwiperSlide>
        <div className='grid items-center text-center w-full h-full'>
        <Image src={Coin} style={{width:"100%", height:"900px"}}/>
          </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
        <Image src={Coin} style={{width:"100%", height:"900px"}}/>
          </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='grid items-center text-center w-full h-96'>
        <Image src={Coin} style={{width:"100%", height:"900px"}}/>
          </div>
      </SwiperSlide>

  </Swiper>
    </div>
  )
}

export default Hero
