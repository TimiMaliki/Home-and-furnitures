"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import FastDelivery from "../../public/service-Img/express-delivery.png";
import BestQuality from "../../public/service-Img/medal.png";
import Install from "../../public/service-Img/process.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Services = () => {
  return (
    <div className="lg:flex items-center  gap-0 lg:gap-2  justify-between px-0 lg:px-20">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid place-content-center ">
            <Image src={FastDelivery} width={50} className="mb-4" />
            <h1 className="lg:text-3xl mb-4 ">Fast Delivery</h1>
            <p className=" text-md lg:text-lg w-32 lg:w-80 h-32 lg:h-32">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ipsum nam dolores!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid place-content-center">
            <Image src={BestQuality} width={50} className="mb-4" />
            <h1 className="text-3xl mb-4">Fast Delivery</h1>
            <p className=" text-md lg:text-lg w-32 lg:w-80  lg:h-32">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ipsum nam dolores!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid place-content-center">
            <Image src={Install} width={50} className="mb-4" />
            <h1 className="text-3xl mb-4">Fast Delivery</h1>
            <p className=" text-md lg:text-lg w-32 lg:w-80  h-32">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ipsum nam dolores!
            </p>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Services;
