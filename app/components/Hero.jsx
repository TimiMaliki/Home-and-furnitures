"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination, Navigation} from "swiper/modules";
import Image from "next/image";
import woodenImg from "../../public/home-Img/WOODEN-BEDROOM-SET.webp";
import NaturalImg from "../../public/home-Img/NATURA-DINING-SET-1kapak_1_11zon.jpg.webp";
import picazoImg from "../../public/home-Img/PICAZ-PICASSO-CORNER-SET-10_10_11zon-1.jpg.webp";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  
  return (
    <div className="mt-4">
     < Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"


        
      >
        <SwiperSlide>
          <div className="grid items-center text-center w-full h-full relative">
            <Image src={woodenImg} style={{ width: "100%", height: "900px"  , objectFit:'cover'}} alt="..." />
            <div className="-translate-y-[40rem] lg:mr-[30rem]font-extrabold text-white">
              <h1 className="mb-8  text-6xl ">WOODEN BEDROOM SET</h1>
              <p className="mb-8  text-xl">
             Every Detail has been carefully considered for your comfort
              </p>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image
              src={NaturalImg}
              style={{ width: "100%", height: "900px" , objectFit:'cover'}}
              alt="..."
            />
            <div className="-translate-y-[40rem] lg:mr-[45rem] text-4xl font-extrabold text-white ">
              <h1 className="mb-8">Furniture Collection 2023</h1>
              <p className="mb-8  text-6xl">
                Natural Dinning Set
              </p>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image src={picazoImg} style={{ width: "100%", height: "900px"  , objectFit:'cover'}} alt="..."/>
            <div className="-translate-y-[40rem] lg:mr-[26rem]  font-extrabold text-white ">
              <h1 className="mb-8 text-xl">NEW ARRIVALS COLLECTION  2023</h1>
              <p className="mb-8  text-4xl">
                MODERN FURNITURES
              </p>
              <p>A Contemporary master pieces</p>
              </div>
          </div>
        </SwiperSlide>
      </Swiper> 
    </div>
  );
};

export default Hero;
