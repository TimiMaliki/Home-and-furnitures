"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Wooden from "../../public/home-Img/WOODEN-CENTER-TABLE-5KAPAK_11zon-768x432.webp"
import Salon from "../../public/home-Img/salon-perde-modelleri-2014.jpg"
import Royal from "../../public/home-Img/SALTANAT-ROYAL-DINING-SET-jpg.webp"
import Brown from "../../public/home-Img/BROWNIE-Dark-BEDROOM-SET-4KAPAK_4_11zon-768x432.webp"
import Dark from "../../public/home-Img/Dark-BROWNIE-BEDROOM-SET-3_3_11zon-1-768x432.webp"
import Okie from "../../public/home-Img/ORKIDE-OUTDOOR-TRIPLE-SET-1kapak_11zon-768x432.webp"
import { Pagination} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const NewProduct = () => {
  return (
    <div className="lg:px-20  w-full h-full">
      <div className="w-30 h-26 mt-20 items-center text-center ">
        <h2 className="text-xl font-black text-3xl mb-4">NewProduct</h2>
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
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image src={Wooden} width={380} height={300} className="rounded-lg" alt="..."/>
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-green-600 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">new</p>
            </div>
            <h2 className="text-md lg:text-lg">Royal Office Furniture</h2>
            <p className="text-md lg:text-lg">Office Furniture</p>
            <p className="text-red-500 -mt-8">₦3,100,745,00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center  w-28 lg:w-full h-96">
            <Image src={Salon} width={380} height={300} className="rounded-lg" alt="..."/>
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-green-600 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">new</p>
            </div>
            <h2 className="text-md lg:text-lg">Asya Sofa set-Tripple</h2>
            <p className="text-md lg:text-lg">SOFA SET</p>
            <p className="text-red-500 -mt-8">₦1,280,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image src={Royal} width={380} height={300} className="rounded-lg" alt="..."/>
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-green-600 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">new</p>
            </div>
            <h2 className="text-md lg:text-lg">Angel Dining Room Set</h2>
            <p className="text-md lg:text-lg">Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦4,916,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image src={Brown} width={380} height={300} className="rounded-lg" alt="..."/>
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-green-600 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">new</p>
            </div>
            <h2 className="text-md lg:text-lg">Picaz Corner Set</h2>
            <p className="text-md lg:text-lg">SOFA SET</p>
            <p className="text-red-500 -mt-8">₦1,280,999.00 - ₦4,916,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image src={Dark} width={380} height={300} className="rounded-lg" alt="..."/>
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-green-600 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">new</p>
            </div>
            <h2 className="text-md lg:text-lg">SIRIUS Dining Set</h2>
            <p className="text-md lg:text-lg">Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦5,002,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image src={Okie} width={380} height={300} className="rounded-lg" alt="..."/>
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-green-600 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">new</p>
            </div>
            <h2 className="text-md lg:text-lg">Natural Dining Set</h2>
            <p className="text-md lg:text-lg">Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦3,545,999.00</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewProduct;
