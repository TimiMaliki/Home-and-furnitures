"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Coin from "../../public/coin.jpg";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Trending = () => {
  return (
    <div className="px-20  w-full h-full ">
      <div className="w-30 h-26 mt-20 items-center text-center ">
        <h2 className="text-lg font-black text-3xl mb-4">TRENDING PRODUCTS</h2>
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
          <div className="grid items-center text-center w-full h-96">
            <Image src={Coin} width={300} height={300} />
            <div className="rounded-full w-12 h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-lg mt-2 text-white">Hot</p>
            </div>
            <h2>Royal Office Furniture</h2>
            <p>Office Furniture</p>
            <p className="text-red-500 -mt-8">₦3,100,745,00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image src={Coin} width={300} height={300} />
            <div className="rounded-full w-12 h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-lg mt-2 text-white">Hot</p>
            </div>
            <h2>Asya Sofa set-Tripple</h2>
            <p>SOFA SET</p>
            <p className="text-red-500 -mt-8">₦1,280,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image src={Coin} width={300} height={300} />
            <div className="rounded-full w-12 h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-lg mt-2 text-white">Hot</p>
            </div>
            <h2>Angel Dining Room Set</h2>
            <p>Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦4,916,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image src={Coin} width={300} height={300} />
            <div className="rounded-full w-12 h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-lg mt-2 text-white">Hot</p>
            </div>
            <h2>Picaz Corner Set</h2>
            <p>SOFA SET</p>
            <p className="text-red-500 -mt-8">₦1,280,999.00 - ₦4,916,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image src={Coin} width={300} height={300} />
            <div className="rounded-full w-12 h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-lg mt-2 text-white">Hot</p>
            </div>
            <h2>SIRIUS Dining Set</h2>
            <p>Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦5,002,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image src={Coin} width={300} height={300} />
            <div className="rounded-full w-12 h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-lg mt-2 text-white">Hot</p>
            </div>
            <h2>Natural Dining Set</h2>
            <p>Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦3,545,999.00</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trending;
